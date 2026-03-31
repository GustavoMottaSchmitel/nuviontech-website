const ITEMS = [
  "Next.js","React","TypeScript","Tailwind CSS","Node.js",
  "WhatsApp API","Automação com IA","ChatGPT Integrado",
  "Landing Pages","Chatbots 24h","Sistemas Web","Full Stack",
]

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="bg-[#0D1F35] border-y border-[#1A3050] py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-0">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-10 whitespace-nowrap">
            <span className="w-[4px] h-[4px] rounded-full bg-[#2979FF]" />
            <span className="text-[13px] font-bold text-[#6B8AAD] uppercase tracking-[.1em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
