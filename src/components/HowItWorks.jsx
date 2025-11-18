import React from 'react'
import { Globe, GaugeCircle, BrainCircuit } from 'lucide-react'

const Step = ({ icon: Icon, title, desc, number }) => (
  <div className="relative bg-slate-900/60 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur">
    <div className="absolute -top-3 -left-3 h-10 w-10 bg-emerald-400 text-slate-900 rounded-2xl font-bold flex items-center justify-center shadow-[0_10px_20px_rgba(34,197,94,0.35)]">{number}</div>
    <Icon className="h-8 w-8 text-emerald-300" />
    <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-300/90">{desc}</p>
  </div>
)

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.07),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How It Works</h2>
          <p className="mt-3 text-slate-300/90">Three quick steps to your reality check</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Step number="1" icon={Globe} title="Choose major + country" desc="Pick your field and location so we can tailor salaries and job outlook to your market." />
          <Step number="2" icon={BrainCircuit} title="AI crunches the data" desc="We analyze salaries, job growth, automation risk, and competition from credible sources." />
          <Step number="3" icon={GaugeCircle} title="Get your cookedness score" desc="See a 0–100 score with a verdict and exact advice and alternatives if you're too cooked." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
