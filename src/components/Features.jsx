import React from 'react'
import { ChartBar, AlertTriangle, Swords, Lightbulb } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc, color = 'from-cyan-400 to-emerald-400' }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur p-6">
    <div className={`absolute -inset-16 bg-gradient-to-tr ${color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
    <Icon className="h-8 w-8 text-white/90" />
    <h3 className="mt-3 text-white font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-300/90">{desc}</p>
  </div>
)

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.07),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Students Love It</h2>
          <p className="mt-3 text-slate-300/90">Data-first, no fluff</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={ChartBar} title="Real Labor Data" desc="Powered by current salary reports, hiring trends, and credible labor sources." />
          <FeatureCard icon={AlertTriangle} title="Brutally Honest Scores" desc="No sugarcoating — clear verdicts like Medium Rare or Fully Cooked." color="from-amber-400 to-orange-500" />
          <FeatureCard icon={Swords} title="Major vs Major Duel" desc="Compare two majors side by side to see who survives the job market." color="from-fuchsia-400 to-cyan-400" />
          <FeatureCard icon={Lightbulb} title="Actionable Advice" desc="Concrete next steps: skills to add, internships to chase, pivots to consider." color="from-violet-400 to-emerald-400" />
        </div>
      </div>
    </section>
  )
}

export default Features
