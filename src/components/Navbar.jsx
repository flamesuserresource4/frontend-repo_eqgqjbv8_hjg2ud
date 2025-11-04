import { Rocket, Mountain, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Mountain className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Parallax Peaks</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15 transition">
          <Rocket className="h-4 w-4" />
          Launch
        </button>
      </nav>
    </header>
  );
}
