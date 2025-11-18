import React from 'react'
import { Mail, Send, Sparkles } from 'lucide-react'

const CTA = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.07),transparent_60%)]"></div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Try it free — get your Cookedness</h2>
        <p className="mt-3 text-slate-300/90">Unlock major comparisons, save your report, and get alternative path suggestions.</p>

        <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3">
          <div className="relative">
            <Mail className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="email" required placeholder="Enter your email" className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-emerald-400/50 focus:ring-2" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-slate-900 bg-gradient-to-br from-emerald-400 to-cyan-400">
            Get Early Access <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-4 text-slate-300/80 text-sm">or</div>

        <button className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-slate-900 bg-white">
          <img src="/google.svg" alt="Google" className="h-5 w-5" /> Sign in with Google
        </button>

        <div className="mt-8 text-slate-400 text-sm">
          By continuing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy</a>.
        </div>
      </div>
    </section>
  )
}

export default CTA
