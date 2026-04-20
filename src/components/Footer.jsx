export default function Footer({ showNetLink = false }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Disclaimer */}
        <p className="text-xs text-white/35 text-center sm:text-left leading-relaxed max-w-md">
          Part of the{' '}
          <a
            href="https://accidentcarechiropractic.net"
            className="text-white/50 hover:text-hazard transition-colors duration-150 underline underline-offset-2"
          >
            Accident Care Co-op network
          </a>
          {' '}| Not affiliated with any specific clinical entity.
        </p>

        {/* Right side: back-to-net link + EIS credit */}
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          {showNetLink && (
            <a
              href="https://accidentcarechiropractic.net"
              className="text-xs text-hazard/70 hover:text-hazard transition-colors duration-150 underline underline-offset-2"
            >
              ← Back to main site
            </a>
          )}
          {/* EIS build credit — small, bottom-right */}
          <p className="text-[10px] text-white/20 tracking-wide">
            an EIS build{' '}
            <span role="img" aria-label="orange circle" style={{ fontSize: '10px' }}>🟠</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
