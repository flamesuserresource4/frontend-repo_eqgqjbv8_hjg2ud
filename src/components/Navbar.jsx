import { Rocket, Mountain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur supports-[backdrop-filter]:backdrop-blur ring-1 ring-slate-200">
            <Mountain className="h-5 w-5" />
            <span className="font-semibold tracking-wide">Parallax Peaks</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-800 hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="text-slate-800 hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="text-slate-800 hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-white shadow-md shadow-orange-500/30 hover:shadow-orange-500/50 transition">
          <Rocket className="h-4 w-4" />
          Launch
        </button>
      </nav>
    </header>
  );
}
