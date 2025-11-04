export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Parallax Peaks. All rights reserved.</p>
        <div className="text-sm">
          Crafted with love for immersive web experiences.
        </div>
      </div>
    </footer>
  );
}
