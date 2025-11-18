import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 ring-1 ring-white/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              New: AI-powered major reality checks
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
              How Cooked Is Your Major?
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
              Our AI predicts how safe or doomed your future is based on real job data, salaries, automation risk, and market trends. Equal parts funny and brutally honest.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-slate-900 bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-[0_10px_30px_rgba(34,197,94,0.35)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)] transition-shadow">
                Check How Cooked You Are
              </a>
              <a href="#compare" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white ring-1 ring-white/20 hover:bg-white/10">
                Compare Majors Instead
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl pointer-events-none"></div>
            <div className="relative grid grid-cols-1 gap-6">
              <div className="bg-slate-900/70 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur shadow-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-slate-200/80 text-sm">Cookedness Score</div>
                    <div className="mt-1 text-5xl font-extrabold text-white">73%</div>
                    <div className="text-emerald-300 font-semibold mt-1">Mildly Cooked</div>
                    <p className="mt-3 text-slate-300/90 text-sm max-w-sm">High demand, but very competitive at entry level. Stack internships + projects to stand out.</p>
                  </div>
                  <div className="text-6xl">🔥</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 rounded-2xl p-3 ring-1 ring-white/10">
                    <div className="text-slate-300/80">Job Market Risk</div>
                    <div className="text-white font-semibold">Low</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 ring-1 ring-white/10">
                    <div className="text-slate-300/80">Stress Level</div>
                    <div className="text-white font-semibold">Medium</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 ring-1 ring-white/10">
                    <div className="text-slate-300/80">Salary Band</div>
                    <div className="text-white font-semibold">$75k–$140k</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-3 ring-1 ring-white/10">
                    <div className="text-slate-300/80">Debt Pressure</div>
                    <div className="text-white font-semibold">Manageable</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/70 ring-1 ring-white/10 rounded-3xl p-4 backdrop-blur flex items-center justify-between">
                <div className="text-white font-semibold">Mobile View</div>
                <div className="text-3xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 pointer-events-none"></div>
    </section>
  )
}

export default Hero
