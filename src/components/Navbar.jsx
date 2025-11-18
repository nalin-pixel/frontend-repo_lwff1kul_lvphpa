import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
      {children}
    </a>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              <Sparkles className="h-5 w-5 text-slate-900" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Cookedness Meter</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#how">How It Works</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#samples">Sample Reports</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden md:flex">
            <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold text-slate-900 bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-[0_10px_30px_rgba(34,197,94,0.35)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)] transition-shadow">
              Check Your Cookedness
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:bg-white/5" onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <a href="#how" className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">How It Works</a>
            <a href="#features" className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">Features</a>
            <a href="#samples" className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">Sample Reports</a>
            <a href="#faq" className="block px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5">FAQ</a>
            <a href="#cta" className="block mt-2 px-3 py-2 rounded-lg font-semibold text-slate-900 bg-gradient-to-br from-emerald-400 to-cyan-400">Check Your Cookedness</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
