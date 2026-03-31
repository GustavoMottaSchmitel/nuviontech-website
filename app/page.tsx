import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import MarqueeStrip from "@/components/MarqueeStrip"
import ServicesSection from "@/components/ServicesSection"
import AboutSection from "@/components/AboutSection"
import PortfolioSection from "@/components/PortfolioSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CtaBand from "@/components/CtaBand"
import Footer from "@/components/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050D1A]">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaBand />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
