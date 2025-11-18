import React from 'react'

const faqs = [
  { q: 'How accurate is this?', a: 'We blend real labor data with predictive modeling. It\'s a serious estimate with a pinch of humor.' },
  { q: 'What data do you use?', a: 'Salary surveys, job postings, government labor reports, and macro trends to keep scores grounded.' },
  { q: 'Does this work for international students?', a: 'Yes. Choose your country to tailor salaries, visas, and job market dynamics.' },
  { q: 'Will my results be saved?', a: 'If you create an account, you can save and compare reports. Browsing is ephemeral.' },
  { q: 'Is this just a joke or serious?', a: 'Both. We keep the tone playful while giving you practical, research-backed advice.' },
  { q: 'Do you sell my data?', a: 'No. Your inputs stay private. We only use anonymized analytics to improve accuracy.' },
  { q: 'Can I compare two majors?', a: 'Yep — our Duel mode lets you stack two majors head-to-head with a clear winner.' },
  { q: 'Will this replace a career counselor?', a: 'No — it\'s a turbocharged reality check to take into better conversations with mentors.' },
]

const FAQ = () => {
  return (
    <section id="faq" className="relative py-20">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked</h2>
          <p className="mt-3 text-slate-300/90">Short answers, big clarity</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-slate-900/60 ring-1 ring-white/10 rounded-3xl p-6 backdrop-blur">
              <div className="text-white font-semibold">{f.q}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
