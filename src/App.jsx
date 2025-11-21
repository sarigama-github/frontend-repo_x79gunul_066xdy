import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1B4332] relative">
      {/* Background accents for Solarpunk vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(149,213,178,0.25),transparent_60%),radial-gradient(40%_40%_at_0%_80%,rgba(247,249,247,0.2),transparent_60%),radial-gradient(40%_40%_at_100%_80%,rgba(149,213,178,0.2),transparent_60%)]" />
      <div className="relative">
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App
