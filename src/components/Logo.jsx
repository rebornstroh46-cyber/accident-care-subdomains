export default function Logo({ size = 'sm' }) {
  const dim = size === 'sm' ? 'h-10 w-10' : 'h-14 w-14'
  return (
    <a
      href="https://accidentcarechiropractic.net"
      className="flex items-center gap-2.5 group shrink-0"
      title="Accident Care Co-op — main site"
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full blur-md opacity-60"
          style={{
            background: 'conic-gradient(from 0deg, #DC2626, #F59E0B, #60A5FA, #DC2626)',
          }}
        />
        <img
          src="/logo.jpg"
          alt="Accident Care Co-op"
          className={`relative ${dim} rounded-full object-cover border-2 border-black
                      group-hover:border-hazard/60 transition-colors duration-200`}
          style={{ boxShadow: '0 0 12px rgba(220,38,38,0.6)' }}
        />
      </div>
      <div className="leading-tight hidden sm:block">
        <span className="block font-display font-bold text-sm tracking-wide text-gradient-fire-ice">
          Accident Care
        </span>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Co-op
        </span>
      </div>
    </a>
  )
}
