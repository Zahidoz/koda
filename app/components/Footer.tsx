import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Haqqımızda', href: '#haqqimizda' },
  { label: 'Tədris proqramı', href: '#tedris' },
  { label: 'Müəllim', href: '#muellim' },
  { label: 'Qiymətlər', href: '#qiymət' },
  { label: 'Əlaqə', href: '#elaqe' },
]

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer id="elaqe" className="relative border-t border-white/6 overflow-hidden">

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 py-16">

          {/* LEFT — Brand + Info */}
          <div className="flex flex-col gap-8">

            {/* Logo & tagline */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  ko<span className="text-primary">da</span>
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

            {/* Contact info */}
            <div className="flex flex-col gap-3">
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
                  hello@koda.az
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
                  +994 50 123 45 67
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — Google Map */}
          <div className="flex flex-col gap-4">
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
              Ünvanımız
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-white/3 h-[320px] lg:h-full min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6!2d49.8671!3d40.3831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6b4f66f6fd%3A0x2d6b4de06c6c9e5c!2sCaspian%20Plaza!5e0!3m2!1sen!2saz!4v1709900000000!5m2!1sen!2saz"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) brightness(0.75) contrast(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Koda — Caspian Plaza"
              />

              {/* Address overlay chip */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-[#0e0e0e]/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl">
                  <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-primary/20 shrink-0">
                    <MapPin size={11} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Caspian Plaza</p>
                    <p className="text-white/40 text-[10px]">Bakı, Azərbaycan</p>
                  </div>
                </div>
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
