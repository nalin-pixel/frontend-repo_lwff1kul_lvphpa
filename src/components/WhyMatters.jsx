import React from 'react'
import { Brain, ArrowRightLeft, Map } from 'lucide-react'

const WhyMatters = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why This Matters</h2>
          <p className="mt-3 text-slate-300/90">Reality > vibes</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-300/90">
            <p>Most students pick majors based on vibes, not outcomes. Debt, job markets, and automation don’t care. We mix humor with real data to show what you’re actually walking into.</p>
            <p>Use your score to adjust expectations, stack relevant skills, or pivot early. It’s not about dunking on your major — it’s about stacking the odds in your favor.</p>
            <p>We combine your inputs with labor stats to generate a clear plan: where to focus, which internships to chase, and which skills unlock the best roles.</p>
          </div>
          <div className="bg-slate-900/60 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 text-white font-semibold">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-900"><Brain className="h-5 w-5"/></span>
              Infographic
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
              <div className="space-y-3">
                <div className="px-3 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">Major</div>
                <div className="px-3 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">Location</div>
                <div className="px-3 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-white">Time Horizon</div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRightLeft className="h-6 w-6 text-slate-300" />
              </div>
              <div className="space-y-3">
                <div className="px-3 py-2 rounded-xl bg-emerald-400/20 text-emerald-200 ring-1 ring-emerald-300/30">Score</div>
                <div className="px-3 py-2 rounded-xl bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/30">Job Outlook</div>
                <div className="px-3 py-2 rounded-xl bg-fuchsia-400/20 text-fuchsia-200 ring-1 ring-fuchsia-300/30">Salary Band</div>
                <div className="px-3 py-2 rounded-xl bg-amber-400/20 text-amber-200 ring-1 ring-amber-300/30">Recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMatters
