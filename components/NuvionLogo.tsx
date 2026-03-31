export default function NuvionLogo({ size = 40 }: { size?: number }) {
  const id = `nlg-${size}`
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="50%" stopColor="#2979FF" />
          <stop offset="100%" stopColor="#7C4DFF" />
        </linearGradient>
      </defs>
      <path d="M5 34V6L16 28V6" stroke={`url(#${id})`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M16 6L27 26" stroke={`url(#${id})`} strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M20 17L29 8" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M23 8H29V14" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
