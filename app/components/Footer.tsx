import React from 'react'
import Link from 'next/link'
import { Youtube, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Haqqımızda', href: '#about' },
  { label: 'Tədris proqramı', href: '#courses' },
  { label: 'Müəllim', href: '#teacher' },
  { label: 'Qiymətlər', href: '#pricing' },
  { label: 'Əlaqə', href: '#contact' },
]

const socials = [
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/6 overflow-hidden">

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">

          {/* LEFT — Brand + Nav + Socials */}
          <div className="flex flex-col gap-8">

            {/* Logo & tagline */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  koda<span className="text-primary"></span>
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-0.5" />
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Sıfırdan başlayanlar üçün real proyektlər üzərində
                Full Stack inkişaf proqramı.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/40 text-sm hover:text-primary transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-white/40 hover:bg-primary/15 hover:border-primary/30 hover:text-primary transition-all duration-300"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                Əlaqə Məlumatları
              </p>
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/8 shrink-0">
                  <MapPin size={12} className="text-primary" />
                </div>
                <p className="text-white/40 text-sm">Caspian Plaza, Bakı, Azərbaycan</p>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/8 shrink-0">
                  <Mail size={12} className="text-primary" />
                </div>
                <Link
                  href="mailto:hello@koda.az"
                  className="text-white/40 text-sm hover:text-primary transition-colors duration-200"
                >
                  info@koda.az
                </Link>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/8 shrink-0">
                  <Phone size={12} className="text-primary" />
                </div>
                <Link
                  href="tel:+994501234567"
                  className="text-white/40 text-sm hover:text-primary transition-colors duration-200"
                >
                  +994 50 703 37 33
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 border-t border-white/6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Koda. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors duration-200">
              Məxfilik Siyasəti
            </Link>
            <span className="text-white/10">·</span>
            <Link href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors duration-200">
              İstifadə Şərtləri
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
