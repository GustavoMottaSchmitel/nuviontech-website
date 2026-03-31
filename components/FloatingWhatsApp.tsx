"use client"
import { motion } from "motion/react"

const WA = "https://wa.me/5527997498818?text=Ol%C3%A1%21+Vim+pelo+site+da+NuvionTech+e+gostaria+de+saber+mais."

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-7 right-7 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,.5)] bg-[#25D366]"
    >
      {/* pulse ring */}
      <span className="absolute inset-[-6px] rounded-full border-2 border-[#25D366]/40 animate-wa-pulse" />
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 2.43.65 4.7 1.78 6.67L2 30l7.53-1.75A13.94 13.94 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2z" fill="white" fillOpacity=".25"/>
        <path d="M22.5 19.87c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H12c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" fill="white"/>
      </svg>
    </motion.a>
  )
}
