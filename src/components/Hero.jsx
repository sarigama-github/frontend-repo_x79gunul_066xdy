import { useState } from 'react'
import { Sparkles, Building2, Package, MapPin, Phone, ShoppingCart } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { CATEGORIES, SAMPLE_COMPANIES, SAMPLE_PRODUCTS } from './data'

const palette = {
  teal: '#1B4332',
  sage: '#95D5B2',
  sand: '#F7F9F7',
}

function Segmented({ value, onChange }) {
  return (
    <div className="inline-flex rounded-xl p-1 bg-white/10 backdrop-blur border border-white/20 shadow-inner">
      {[
        { key: 'empresas', label: '🏢 Empresas', Icon: Building2 },
        { key: 'productos', label: '📦 Productos', Icon: Package },
      ].map((opt) => (
        <button
          key={opt.key}
          onClick={() => onChange(opt.key)}
          className={`relative px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base transition-all ${
            value === opt.key
              ? 'bg-white/70 text-slate-900 shadow'
              : 'text-white/80 hover:text-white'
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <opt.Icon size={18} />
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-wider text-white/70">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white/10 text-white/90 rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#95D5B2]/60 backdrop-blur"
      >
        <option value="">Todos</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-slate-900">{o}</option>
        ))}
      </select>
    </div>
  )
}

function AIInput({ value, onChange }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 blur-xl" />
      <div className="relative bg-white/10 border border-white/20 rounded-3xl p-4 sm:p-6 backdrop-blur shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[rgba(149,213,178,0.2)] border border-white/20 text-white flex items-center justify-center">
            <Sparkles className="text-[--sage]" />
          </div>
          <div className="text-white/80 text-sm">Prompt para el Agente Eco</div>
        </div>
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ej: Busco cosmética sólida vegana sin plásticos o un retiro de yoga en Gredos..."
          className="w-full resize-none bg-transparent text-white placeholder-white/60 outline-none text-lg sm:text-xl leading-relaxed"
        />
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xs text-white/60">Consejo: Sé específico para mejores resultados</div>
          <button className="px-4 py-2 rounded-full bg-[#95D5B2] text-slate-900 font-semibold hover:brightness-95 transition">Buscar</button>
        </div>
      </div>
    </div>
  )
}

function CompanyCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/15 backdrop-blur hover:bg-white/15 transition p-4">
      <div className="flex items-center gap-4">
        <img src={item.logo} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
        <div className="flex-1">
          <div className="text-white font-semibold text-lg">{item.name}</div>
          <div className="text-[10px] inline-flex items-center gap-2 mt-1 px-2 py-1 rounded-full bg-[rgba(149,213,178,0.15)] border border-white/20 text-[--sage] text-white/90">
            {item.sub}
          </div>
          <div className="mt-2 text-white/70 text-sm inline-flex items-center gap-1"><MapPin size={14} /> {item.location}</div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 text-slate-900 font-medium hover:bg-white transition">
          <Phone size={16} /> Contactar Agente AI
        </button>
      </div>
    </div>
  )
}

function ProductCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/15 backdrop-blur hover:bg-white/15 transition p-4">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <div className="text-white font-semibold text-lg">{item.name}</div>
          <div className="text-xs text-white/70 mt-1">{item.sub}</div>
        </div>
        <div className="text-right">
          <div className="text-[#95D5B2] font-bold">{item.price}</div>
          <div className="text-xs text-white/70">Eco-Score {item.ecoScore}</div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#95D5B2] text-slate-900 font-semibold hover:brightness-95 transition">
          <ShoppingCart size={16} /> Comprar directo
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  const [mode, setMode] = useState('empresas')
  const [prompt, setPrompt] = useState('')

  // Filters
  const [cat, setCat] = useState('')
  const [sub1, setSub1] = useState('')
  const [sub2, setSub2] = useState('')
  const [sub3, setSub3] = useState('')

  const selectedCategory = CATEGORIES.find((c) => c.label === cat)

  const items = mode === 'empresas' ? SAMPLE_COMPANIES : SAMPLE_PRODUCTS

  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1B4332]/70 via-[#1B4332]/60 to-[#1B4332]/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">EcoAlternativa Evolution</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
            Directorio inteligente con estética Solarpunk: descubre empresas y productos sostenibles con ayuda de un agente AI.
          </p>
        </div>

        {/* Switcher */}
        <div className="mt-8 flex justify-center">
          <Segmented value={mode} onChange={setMode} />
        </div>

        {/* AI Input */}
        <div className="mt-8 max-w-4xl mx-auto">
          <AIInput value={prompt} onChange={setPrompt} />
        </div>

        {/* Manual Filter Bar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Dropdown
            label="Categoría"
            options={CATEGORIES.map((c) => c.label)}
            value={cat}
            onChange={setCat}
          />
          <Dropdown
            label="Subcategoría 1"
            options={(selectedCategory?.subs ?? [])}
            value={sub1}
            onChange={setSub1}
          />
          <Dropdown
            label="Subcategoría 2"
            options={(selectedCategory?.subs ?? [])}
            value={sub2}
            onChange={setSub2}
          />
          <Dropdown
            label="Subcategoría 3"
            options={(selectedCategory?.subs ?? [])}
            value={sub3}
            onChange={setSub3}
          />
        </div>

        {/* Results */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mode === 'empresas'
            ? SAMPLE_COMPANIES.map((c) => <CompanyCard key={c.name} item={c} />)
            : SAMPLE_PRODUCTS.map((p) => <ProductCard key={p.name} item={p} />)}
        </div>
      </div>
    </section>
  )
}
