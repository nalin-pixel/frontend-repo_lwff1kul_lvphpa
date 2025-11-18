import React from 'react'
import { Instagram, TikTok, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400" />
            <div>
              <div className="text-white font-semibold">Cookedness Meter</div>
              <div className="text-slate-400 text-sm">Reality checks for your major</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="TikTok" href="#" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"><TikTok className="h-5 w-5"/></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"><Instagram className="h-5 w-5"/></a>
            <a aria-label="X" href="#" className="p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"><Twitter className="h-5 w-5"/></a>
          </div>
        </div>
        <div className="mt-8 text-slate-500 text-xs">© {new Date().getFullYear()} Cookedness Meter. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
