import React from 'react'

const samples = [
  { major: 'Computer Science', score: 27, verdict: 'Barely Cooked', insight: 'High demand, but very competitive entry level.' },
  { major: 'Business', score: 48, verdict: 'Mildly Cooked', insight: 'Versatile path — internships matter more than GPA.' },
  { major: 'Psychology', score: 71, verdict: 'Medium Rare', insight: 'Rewarding field; grad school often required for pay growth.' },
  { major: 'Biology', score: 66, verdict: 'Kind of Cooked', insight: 'Research roles limited; consider biotech or data add-ons.' },
  { major: 'Fine Arts', score: 84, verdict: 'Well Done', insight: 'Creative freedom but low starting pay; build client funnel early.' },
]

const Meter = ({ score }) => {
  const hue = 120 - (score * 1.2) // 0->100 maps green->red
  return (
    <div className="w-full h-2 rounded-full bg-white/10">
      <div className="h-2 rounded-full" style={{ width: `${score}%`, background: `hsl(${hue} 90% 55%)` }} />
    </div>
  )
}

const SampleReports = () => {
  return (
    <section id="samples" className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Sample Cookedness Reports</h2>
          <p className="mt-3 text-slate-300/90">Peek at a few majors</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((s) => (
            <div key={s.major} className="bg-slate-900/60 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{s.major}</div>
                  <div className="text-slate-300/90 text-sm">{s.verdict}</div>
                </div>
                <div className="text-white text-3xl font-extrabold">{s.score}%</div>
              </div>
              <div className="mt-4"><Meter score={s.score} /></div>
              <p className="mt-4 text-slate-300/90 text-sm">{s.insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SampleReports
