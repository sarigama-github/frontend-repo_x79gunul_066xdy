export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="font-semibold text-white">EcoAlternativa Evolution</div>
          <p className="text-sm text-white/70 mt-2">Conecta con iniciativas, productos y servicios que cuidan del planeta.</p>
        </div>
        <nav className="flex items-center gap-6 justify-start sm:justify-end text-sm">
          <a href="#about" className="hover:text-white transition">About EcoAlternativa Evolution</a>
          <a href="#join" className="hover:text-white transition">Join the Network</a>
        </nav>
      </div>
    </footer>
  )
}
