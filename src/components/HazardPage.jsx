/**
 * HazardPage — full-screen layout shell used by both .shop and .store.
 * Renders the animated diagonal tape background, top bar with logo,
 * two marquee tape banners (top + bottom of card), and the center card.
 */
import Logo       from './Logo'
import TapeBanner from './TapeBanner'
import Footer     from './Footer'

export default function HazardPage({
  tapeText,          // e.g. "UNDER CONSTRUCTION"
  accentColor,       // 'fire' | 'ice'
  children,
  showNetLink = false,
}) {
  const glowColor = accentColor === 'fire'
    ? 'rgba(220,38,38,0.5)'
    : 'rgba(96,165,250,0.5)'

  const accentBorder = accentColor === 'fire'
    ? 'border-fire/40'
    : 'border-ice/40'

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Hazard tape full-screen background ── */}
      <div className="fixed inset-0 hazard-bg opacity-[0.13] pointer-events-none z-0" aria-hidden />

      {/* ── Radial accent glow (fire or ice) ── */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 45%, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.18,
        }}
      />

      {/* ── Top nav bar ── */}
      <header className="relative z-20 flex items-center justify-between px-5 py-4
                         border-b border-white/10 bg-black/70 backdrop-blur-md">
        <Logo size="sm" />

        {/* Domain pill */}
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em]
                          border ${accentBorder} rounded-full px-3 py-1
                          ${accentColor === 'fire' ? 'text-fire bg-fire/5' : 'text-ice bg-ice/5'}`}>
          accidentcarechiropractic.{accentColor === 'fire' ? 'shop' : 'store'}
        </span>
      </header>

      {/* ── Main content area ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">

        {/* Top tape banner (scrolls left) */}
        <div className="w-full max-w-3xl mb-6 -rotate-1 shadow-[0_4px_20px_rgba(250,204,21,0.25)]">
          <TapeBanner text={tapeText} direction="left" speed={16} />
        </div>

        {/* Center glass card */}
        <div className={`glass-card w-full max-w-lg md:max-w-2xl px-8 md:px-14 py-10 md:py-14`}>
          {children}
        </div>

        {/* Bottom tape banner (scrolls right) */}
        <div className="w-full max-w-3xl mt-6 rotate-1 shadow-[0_-4px_20px_rgba(250,204,21,0.25)]">
          <TapeBanner text={tapeText} direction="right" speed={20} />
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer showNetLink={showNetLink} />
    </div>
  )
}
