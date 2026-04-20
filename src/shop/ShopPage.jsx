import { useState } from 'react'
import HazardPage from '../components/HazardPage'

/* ── Merch preview cards ── */
const items = [
  { emoji: '🧥', label: 'Hoodie',         sub: 'Fire & Ice edition' },
  { emoji: '🧢', label: 'Snapback Hat',   sub: 'Embroidered logo'   },
  { emoji: '👕', label: 'Provider Tee',   sub: 'Clinic-ready fit'   },
  { emoji: '📋', label: 'Clipboard Pad',  sub: 'Branded field notes' },
  { emoji: '🩺', label: 'Neck Gaiter',    sub: 'All-season flex'    },
  { emoji: '🎒', label: 'Pro Bag',        sub: 'Mobile clinic carry' },
]

export default function ShopPage() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <HazardPage tapeText="UNDER CONSTRUCTION" accentColor="fire">

      {/* ── Badge ── */}
      <div className="flex items-center justify-center mb-7">
        <span className="tape-label px-5 py-1.5 text-xs md:text-sm tracking-[0.25em] rounded-full
                         shadow-[0_0_20px_rgba(250,204,21,0.4)]">
          🔥 &nbsp;MERCH DROP INCOMING&nbsp; 🔥
        </span>
      </div>

      {/* ── Hero headline ── */}
      <h1 className="font-display font-bold text-center leading-none mb-4
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-white">CO-OP MERCH</span>
        <span className="block text-hazard cursor-blink">COMING SOON</span>
      </h1>

      {/* ── Subtext ── */}
      <p className="text-center text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
        High-quality hoodies, hats &amp; professional gear for{' '}
        <span className="text-white font-semibold">accident care workers</span>.
        Built by the co-op, worn with pride.
      </p>

      {/* ── Merch preview grid ── */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-8">
        {items.map(({ emoji, label, sub }) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.03]
                       flex flex-col items-center py-3 px-2 gap-1
                       hover:border-hazard/40 hover:bg-hazard/5 transition-all duration-200"
          >
            <span className="text-2xl md:text-3xl">{emoji}</span>
            <span className="text-white font-semibold text-[11px] md:text-xs text-center">{label}</span>
            <span className="text-white/35 text-[9px] md:text-[10px] text-center">{sub}</span>
          </div>
        ))}
      </div>

      {/* ── Email signup ── */}
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-full bg-hazard/10 border-2 border-hazard/40
                          flex items-center justify-center mx-auto mb-3 text-2xl">
            ✅
          </div>
          <p className="font-display font-bold text-hazard text-xl mb-1">You're on the list!</p>
          <p className="text-white/50 text-sm">
            We'll hit you at <strong className="text-white">{email}</strong> the moment we drop.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3">
            Get notified at launch
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              className="hazard-input flex-1"
            />
            <button type="submit" className="btn-hazard px-6 py-3 text-sm shrink-0">
              Notify Me
            </button>
          </div>
          {error && <p className="text-red-400 text-xs text-center">{error}</p>}
          <p className="text-center text-[10px] text-white/25">
            No spam. One email when we launch. That's it.
          </p>
        </form>
      )}

      {/* ── Divider with domain ── */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-fire/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
          accidentcarechiropractic.shop
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-fire/40" />
      </div>
    </HazardPage>
  )
}
