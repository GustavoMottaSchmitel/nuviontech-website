import { chromium } from "playwright"
import { mkdir } from "node:fs/promises"
import path from "node:path"

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:3011"
const outputDir = path.resolve("qa", "responsive")
const browser = await chromium.launch({ channel: "msedge", headless: true })

await mkdir(outputDir, { recursive: true })

const targets = [
  { name: "home-320", path: "/", width: 320, height: 900, fullPage: true },
  { name: "home-390", path: "/", width: 390, height: 844, fullPage: true },
  { name: "home-768", path: "/", width: 768, height: 1024, fullPage: true },
  { name: "home-1024", path: "/", width: 1024, height: 900, fullPage: true },
  { name: "home-1440", path: "/", width: 1440, height: 1000, fullPage: true },
  { name: "case-390", path: "/projetos/ata-seguranca", width: 390, height: 844, fullPage: true },
  { name: "case-320", path: "/projetos/ata-seguranca", width: 320, height: 900, fullPage: true },
  { name: "case-1440", path: "/projetos/ata-seguranca", width: 1440, height: 1000, fullPage: true },
  { name: "service-390", path: "/servicos/landing-pages", width: 390, height: 844, fullPage: true },
  { name: "about-390", path: "/sobre", width: 390, height: 844, fullPage: true },
]

const report = []

for (const target of targets) {
  const page = await browser.newPage({
    viewport: { width: target.width, height: target.height },
    deviceScaleFactor: 1,
    colorScheme: "dark",
    reducedMotion: "reduce",
  })
  const errors = []
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text())
  })
  page.on("pageerror", (error) => errors.push(error.message))
  await page.goto(`${baseUrl}${target.path}`, { waitUntil: "networkidle" })
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(innerHeight * 0.7))
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 110))
    }
    scrollTo(0, 0)
    await new Promise((resolve) => setTimeout(resolve, 300))
  })
  await page.waitForLoadState("networkidle")
  await page.waitForFunction(
    () => [...document.images]
      .filter((image) => {
        const box = image.getBoundingClientRect()
        return box.bottom > -innerHeight && box.top < innerHeight * 2
      })
      .every((image) => image.complete && image.naturalWidth > 0),
    undefined,
    { timeout: 30_000 },
  )
  await page.screenshot({ path: path.join(outputDir, `${target.name}.png`), fullPage: target.fullPage })
  const state = await page.evaluate(() => ({
    viewportWidth: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    brokenImages: [...document.images]
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.getAttribute("src")),
    clippedElements: [...document.querySelectorAll("main *")]
      .filter((element) => {
        const style = getComputedStyle(element)
        const box = element.getBoundingClientRect()
        const decorative = element.getAttribute("aria-hidden") === "true" || element.closest('[aria-hidden="true"]')
        return !decorative && style.position !== "fixed" && box.width > 1 && box.height > 1 && (box.left < -1 || box.right > innerWidth + 1)
      })
      .slice(0, 25)
      .map((element) => ({ tag: element.tagName, className: element.className, left: Math.round(element.getBoundingClientRect().left), right: Math.round(element.getBoundingClientRect().right) })),
    tinyText: [...document.querySelectorAll("body *")]
      .filter((element) => {
        const style = getComputedStyle(element)
        const box = element.getBoundingClientRect()
        return element.childElementCount === 0 && box.width > 0 && box.height > 0 && parseFloat(style.fontSize) < 9
      })
      .slice(0, 25)
      .map((element) => ({ text: element.textContent?.trim().slice(0, 60), size: getComputedStyle(element).fontSize })),
  }))
  report.push({ ...target, ...state, consoleErrors: errors })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(report, null, 2))
