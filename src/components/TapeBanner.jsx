/**
 * TapeBanner — animated diagonal hazard-tape strip that runs
 * edge-to-edge across a container. Pass `text` and `color` props.
 */
export default function TapeBanner({
  text = 'UNDER CONSTRUCTION',
  className = '',
  speed = 18,          // seconds per loop
  direction = 'left',  // 'left' | 'right'
}) {
  const repeat = Array(20).fill(text).join('  ✦  ')

  return (
    <div
      className={`w-full overflow-hidden py-2 select-none ${className}`}
      style={{ background: '#FACC15' }}
      aria-label={text}
    >
      <div
        className="whitespace-nowrap font-display font-bold text-black text-sm md:text-base tracking-[0.18em] uppercase"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          display: 'inline-block',
          willChange: 'transform',
        }}
      >
        {repeat}&nbsp;&nbsp;&nbsp;{repeat}
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
