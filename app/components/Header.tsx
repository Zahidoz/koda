'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const navLinks = [
  { label: 'Məzunlar', href: '#mezunlar' },
  { label: 'Tədris', href: '#tedris' },
  { label: 'Haqqımızda', href: '#haqqimizda' },
  { label: 'Əlaqə', href: '#elaqe' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 transition-all duration-700 ease-out ${ visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4' }`}>
      <div
        className={`
          header-container w-full max-w-5xl flex items-center justify-between
          rounded-2xl border border-white/10 px-6 py-3
          transition-all duration-300
          ${scrolled ? 'bg-[#161616]/90 shadow-lg shadow-black/30 backdrop-blur-xl' : 'bg-[#161616]/70 backdrop-blur-md'}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-primary font-bold text-xl tracking-wide">Koda</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link relative text-sm text-white/70 hover:text-white px-3 py-2 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#qosul"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/40 hover:border-primary hover:bg-primary/10 px-5 py-2 rounded-xl transition-all duration-300"
        >
          <span className="tracking-wide">Bizə Qoşul</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform">
            <path d="M3.33 8h9.34M9 4.67 12.67 8 9 11.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.25 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
        </button>
      </div>
    </header>

      {/* Mobile Menu Overlay — outside <header> so parent transform doesn't affect fixed positioning */}
      <div
        className={`
          fixed inset-0 bg-secondary/95 backdrop-blur-xl z-40
          flex flex-col items-center justify-center gap-6
          transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Close menu"
        >
          <X size={28} strokeWidth={2} />
        </button>
        {navLinks.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`
              text-2xl font-medium text-white/80 hover:text-white transition-all duration-300
              ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : '0ms' }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#qosul"
          onClick={() => setMenuOpen(false)}
          className={`
            mt-4 inline-flex items-center gap-2 text-lg font-medium text-primary border border-primary/40
            hover:border-primary hover:bg-primary/10 px-8 py-3 rounded-xl transition-all duration-300
            ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}
          style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 100}ms` : '0ms' }}
        >
          Bizə Qoşul
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M3.33 8h9.34M9 4.67 12.67 8 9 11.33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </>
  )
}
