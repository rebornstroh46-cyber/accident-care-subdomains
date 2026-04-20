import { useState } from 'react'
import HazardPage from '../components/HazardPage'

/* ── Planned app ideas ── */
const apps = [
  { emoji: '📋', label: 'Intake Tracker',     sub: 'Streamline accident patient intake'       },
  { emoji: '📸', label: 'Injury Photo Log',   sub: 'HIPAA-conscious image documentation'      },
  { emoji: '⏱️', label: 'Treatment Timer',    sub: 'Track billable session durations'          },
  { emoji: '📊', label: 'Progress Reporter',  sub: 'Generate PI-ready progress summaries'      },
  { emoji: '🗺️', label: 'Provider Finder',   sub: 'Locate co-op members near you'             },
  { emoji: '📝', label: 'SOAP Note Builder',  sub: 'Quick structured clinical notes'           },
]

export default function StorePage() {
  const [form, setForm]         = useState({ name: '', email: '', idea: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]     = useState({})

  const validate = () => {
    const e = {}
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Valid email required'
    if (!form.idea.trim())
      e.idea = 'Tell us what you need'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <HazardPage tapeText="IN DEVELOPMENT" accentColor="ice" showNetLink>

      {/* ── Badge ── */}
      <div className="flex items-center justify-center mb-7">
        <span className="tape-label px-5 py-1.5 text-xs md:text-sm tracking-[0.25em] rounded-full
                         shadow-[0_0_20px_rgba(250,204,21,0.4)]">
          ❄️ &nbsp;TOOLS FOR THE COMMUNITY&nbsp; ❄️
        </span>
      </div>

      {/* ── Hero headline ── */}
      <h1 className="font-display font-bold text-center leading-none mb-4
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block text-white">CLINICAL APPS</span>
        <span className="block text-ice cursor-blink">COMING SOON</span>
      </h1>

      {/* ── Subtext ── */}
      <p className="text-center text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
        Care-specific tools{' '}
        <span className="text-white font-semibold">donated to our community</span>{' '}
        for public use. Built by practitioners, for practitioners.
      </p>

      {/* ── App preview grid ── */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-8">
        {apps.map(({ emoji, label, sub }) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.03]
                       flex flex-col items-center py-3 px-2 gap-1
                       hover:border-ice/40 hover:bg-ice/5 transition-all duration-200"
          >
            <span className="text-2xl md:text-3xl">{emoji}</span>
            <span className="text-white font-semibold text-[11px] md:text-xs text-center">{label}</span>
            <span className="text-white/35 text-[9px] md:text-[10px] text-center">{sub}</span>
          </div>
        ))}
      </div>

      {/* ── Feature suggestion form ── */}
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-full bg-ice/10 border-2 border-ice/40
                          flex items-center justify-center mx-auto mb-3 text-2xl">
            🚀
          </div>
          <p className="font-display font-bold text-ice text-xl mb-1">Idea received!</p>
          <p className="text-white/50 text-sm">
            Thanks{form.name ? `, ${form.name}` : ''}. We review every suggestion and build what matters most.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3">
            Suggest an app feature
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              name="name"
              type="text"
              placeholder="Your name (optional)"
              value={form.name}
              onChange={handleChange}
              className="hazard-input flex-1"
            />
            <input
              name="email"
              type="email"
              placeholder="your@email.com *"
              value={form.email}
              onChange={handleChange}
              className={`hazard-input flex-1 ${errors.email ? 'border-red-500/60' : ''}`}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email}</p>
          )}

          <textarea
            name="idea"
            rows={3}
            placeholder="What tool would make your work easier? Describe the problem it solves..."
            value={form.idea}
            onChange={handleChange}
            className={`hazard-input resize-none ${errors.idea ? 'border-red-500/60' : ''}`}
          />
          {errors.idea && (
            <p className="text-red-400 text-xs">{errors.idea}</p>
          )}

          <button type="submit" className="btn-hazard w-full py-3 text-sm">
            Submit Feature Idea
          </button>

          <p className="text-center text-[10px] text-white/25">
            All tools will be free &amp; open to the accident care community.
          </p>
        </form>
      )}

      {/* ── Divider with domain ── */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ice/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
          accidentcarechiropractic.store
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-ice/40" />
      </div>
    </HazardPage>
  )
}
