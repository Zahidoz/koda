'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Send, User, Phone, CheckCircle2, Loader2, MapPin } from 'lucide-react'

function useInView(threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export default function Contact() {
  const { ref, visible } = useInView()

  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  function validate() {
    const e: { name?: string; phone?: string } = {}
    if (!form.name.trim()) e.name = 'Ad tələb olunur'
    if (!form.phone.trim()) e.phone = 'Əlaqə nömrəsi tələb olunur'
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone.trim()))
      e.phone = 'Düzgün nömrə daxil edin'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as 'name' | 'phone']) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-primary/7 blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div
          className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Əlaqə
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Bizimlə
            <br />
            <span className="text-primary">əlaqə saxla</span>
          </h2>

          <p className="text-white/40 text-sm max-w-sm leading-relaxed">
            Adını və nömrəni qoyub göndər — biz səninlə 24 saat
            ərzində əlaqə saxlayacağıq.
          </p>
        </div>

        {/* Form and Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form card */}
        <div
          className={`relative rounded-2xl border border-white/8 bg-white/[0.025] transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent" />

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-5 py-16 px-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 border border-primary/25">
                <CheckCircle2 size={28} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-xl">Müraciətiniz qəbul edildi!</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Tezliklə sizinlə əlaqə saxlayacağıq. Zəhmət olmasa
                  telefonunuzu yaxın saxlayın.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 p-8">

              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  Ad Soyad
                </label>
                <div
                  className={`flex items-center gap-3 rounded-xl border bg-white/4 px-4 py-3.5 transition-all duration-200 ${
                    errors.name
                      ? 'border-red-500/50 focus-within:border-red-500/70'
                      : 'border-white/8 focus-within:border-primary/40 focus-within:bg-primary/5'
                  }`}
                >
                  <User size={15} className="text-white/25 shrink-0" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Zahid Vahabzadə"
                    autoComplete="name"
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/20 outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400/80 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Phone field */}
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  Əlaqə Nömrəsi
                </label>
                <div
                  className={`flex items-center gap-3 rounded-xl border bg-white/4 px-4 py-3.5 transition-all duration-200 ${
                    errors.phone
                      ? 'border-red-500/50 focus-within:border-red-500/70'
                      : 'border-white/8 focus-within:border-primary/40 focus-within:bg-primary/5'
                  }`}
                >
                  <Phone size={15} className="text-white/25 shrink-0" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+994 50 000 00 00"
                    autoComplete="tel"
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/20 outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400/80 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-primary text-secondary font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Göndərilir...
                  </>
                ) : (
                  <>
                    Müraciət et
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>

              <p className="text-center text-white/20 text-xs">
                Məlumatlarınız heç kimlə paylaşılmır
              </p>
            </form>
          )}
        </div>

        {/* Map Section */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-white/3 h-[320px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6!2d49.82047707053659!3d40.37927512249704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9be60052ab%3A0xd7852fa710c6b11a!2sCaspian%20Plaza!5e0!3m2!1sen!2saz!4v1774003866891!5m2!1sen!2saz"
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

      </div>
    </section>
  )
}
