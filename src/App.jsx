import React from 'react'
import Spline from '@splinetool/react-spline'
import { Wrench, Phone, Clock, MapPin, Shield, Star } from 'lucide-react'

const palette = {
  red: '#BC2123',
  gold: '#E3BC22',
  teal: '#77B1B5',
  dark: '#17252F',
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full grid place-items-center font-extrabold text-white"
            style={{ backgroundColor: palette.red }}
          >
            RM
          </div>
          <div className="leading-tight">
            <p className="text-sm tracking-wider uppercase text-gray-600">Reifenmonteur</p>
            <p className="font-semibold" style={{ color: palette.dark }}>Meisterbetrieb</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm" style={{ color: palette.dark }}>
          <a href="#leistungen" className="hover:opacity-80">Leistungen</a>
          <a href="#ueber" className="hover:opacity-80">Über mich</a>
          <a href="#kontakt" className="hover:opacity-80">Kontakt</a>
          <a
            href="tel:+491601234567"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: palette.red }}
          >
            <Phone size={16} /> Anrufen
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for vintage tint (does not block Spline interaction) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(23,37,47,0.55) 0%, rgba(23,37,47,0.75) 55%, rgba(23,37,47,0.9) 100%), radial-gradient(60% 60% at 20% 10%, rgba(227,188,34,0.25) 0%, rgba(227,188,34,0) 60%)',
        }}
      />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-6xl h-full px-4 flex flex-col justify-end pb-12">
          <span className="inline-block text-xs tracking-[0.2em] uppercase mb-3 text-white/80">Mobil. Präzise. Zuverlässig.</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.15)]">
            Reifenservice vom Profi –
            <br className="hidden sm:block" />
            bei Ihnen vor Ort
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base sm:text-lg">
            Selbstständig, viele Jahre Erfahrung und immer einsatzbereit. Montage, Wechsel, Auswuchten
            und Einlagerung – schnell, fair und professionell.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="tel:+491601234567"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-semibold shadow-lg shadow-black/10"
              style={{ backgroundColor: palette.red }}
            >
              <Phone size={18} /> Jetzt anrufen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border font-semibold text-white/95"
              style={{ borderColor: palette.teal }}
            >
              <Wrench size={18} /> Leistungen ansehen
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-white/80 text-sm">
            <div className="inline-flex items-center gap-2"><Star size={16} className="text-yellow-300" /> 4.9/5 Kundenzufriedenheit</div>
            <div className="inline-flex items-center gap-2"><Shield size={16} className="text-emerald-300" /> Meisterqualität</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, desc, accent }) {
  return (
    <div className="group rounded-xl border bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all" style={{ borderColor: `${accent}33` }}>
      <div className="h-12 w-12 rounded-lg grid place-items-center mb-4" style={{ backgroundColor: `${accent}22`, color: palette.dark }}>
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-1" style={{ color: palette.dark }}>{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function Leistungen() {
  return (
    <section id="leistungen" className="relative py-16" style={{ backgroundColor: '#f9fafb' }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: palette.dark }}>Leistungen</h2>
          <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `${palette.gold}33`, color: palette.dark }}>Fair. Schnell. Mobil.</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ServiceCard
            icon={Wrench}
            title="Montage & Wechsel"
            desc="Professioneller Reifenwechsel inkl. Kontrolle von Luftdruck und Zustand."
            accent={palette.red}
          />
          <ServiceCard
            icon={Shield}
            title="Auswuchten"
            desc="Ruhiger Lauf und weniger Verschleiß durch präzises Auswuchten."
            accent={palette.teal}
          />
          <ServiceCard
            icon={Clock}
            title="Einlagerung"
            desc="Sichere Einlagerung Ihrer Saisonreifen – trocken, kühl und geschützt."
            accent={palette.gold}
          />
        </div>
      </div>
    </section>
  )
}

function UeberMich() {
  return (
    <section id="ueber" className="py-16" style={{ backgroundColor: 'white' }}>
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: `${palette.dark}10` }}>
          <div className="aspect-[4/3] bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${palette.teal}22, ${palette.gold}22)` }} />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest" style={{ color: palette.red }}>Über mich</span>
          <h3 className="mt-2 text-3xl font-extrabold" style={{ color: palette.dark }}>Viele Jahre Erfahrung – echte Handwerksqualität</h3>
          <p className="mt-3 text-gray-700">
            Ich bin leidenschaftlicher Reifenmonteur mit langjähriger Praxis im mobilen Service.
            Mit modernem Equipment, einem Auge fürs Detail und fairen Preisen sorge ich dafür,
            dass Sie sicher und entspannt unterwegs sind – direkt bei Ihnen vor Ort.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border" style={{ borderColor: `${palette.teal}33` }}>
              <p className="text-2xl font-extrabold" style={{ color: palette.dark }}>10+ Jahre</p>
              <p className="text-sm text-gray-600">Erfahrung</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ borderColor: `${palette.gold}55` }}>
              <p className="text-2xl font-extrabold" style={{ color: palette.dark }}>Mobil</p>
              <p className="text-sm text-gray-600">Vor-Ort Service</p>
            </div>
            <div className="p-4 rounded-lg border" style={{ borderColor: `${palette.red}33` }}>
              <p className="text-2xl font-extrabold" style={{ color: palette.dark }}>Transparent</p>
              <p className="text-sm text-gray-600">Faire Preise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KontaktCTA() {
  return (
    <section id="kontakt" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 20% 10%, ${palette.gold}, transparent 40%), radial-gradient(circle at 80% 70%, ${palette.teal}, transparent 35%)` }} />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="rounded-2xl p-8 md:p-10 border shadow-sm" style={{ backgroundColor: palette.dark, borderColor: '#00000022' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white">Bereit für den Wechsel?</h3>
              <p className="mt-2 text-white/80">Rufen Sie an oder schreiben Sie mir – ich melde mich umgehend.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+491601234567" className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: palette.red }}>
                  <Phone size={18} /> Jetzt anrufen
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border text-white" style={{ borderColor: palette.teal }}>
                  <MapPin size={18} /> Einsatzgebiet ansehen
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-white/90">
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2"><Clock size={18} /> <p className="font-semibold">Flexible Zeiten</p></div>
                <p className="text-sm mt-1">Termine auch abends und am Wochenende nach Absprache.</p>
              </div>
              <div className="rounded-lg p-4 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2"><Shield size={18} /> <p className="font-semibold">Sicher & versichert</p></div>
                <p className="text-sm mt-1">Sorgfältige Arbeit mit Garantie auf Montage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: '#0f1a20' }}>
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© {new Date().getFullYear()} Reifenmonteur – Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-6 text-white/80 text-sm">
          <a href="#" className="hover:opacity-80">Impressum</a>
          <a href="#" className="hover:opacity-80">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f3f5f6' }}>
      <Navbar />
      <Hero />
      <Leistungen />
      <UeberMich />
      <KontaktCTA />
      <Footer />
    </div>
  )
}
