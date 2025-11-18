import React from 'react'

const people = [
  { name: 'Jada P.', role: 'Sophomore, Economics', score: 58, quote: 'Cookedness told me to stack SQL + Excel and intern early. Landed a spring analyst role.' },
  { name: 'Ryan K.', role: 'Senior, Psychology', score: 72, quote: 'Realized grad school is key. I added a data minor and lined up a research assistantship.' },
  { name: 'Mina L.', role: 'Freshman, Fine Arts', score: 83, quote: 'The advice on building a client funnel + social presence was gold. Feeling strategic now.' },
  { name: 'Carlos D.', role: 'Junior, CS', score: 31, quote: 'Competitive field, but the roadmap made it feel winnable. Side projects + internships = leverage.' },
]

const Avatar = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2)
  return (
    <div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white font-semibold">
      {initials}
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.07),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Students Spill the Tea</h2>
          <p className="mt-3 text-slate-300/90">Real quotes, real pivots</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p) => (
            <div key={p.name} className="bg-slate-900/60 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Avatar name={p.name} />
                <div>
                  <div className="text-white font-semibold">{p.name}</div>
                  <div className="text-slate-300/80 text-xs">{p.role} • {p.score}% Cooked</div>
                </div>
              </div>
              <p className="mt-4 text-slate-300/90 text-sm">“{p.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
