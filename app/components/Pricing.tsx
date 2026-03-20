'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Sparkles, BadgePercent, Clock } from 'lucide-react'

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

const features = [
  'Bütün canlı dərslər (12 ay)',
  'Həftəlik mentor sessiyaları',
  'Real layihələr & code review',
  'Discord icması girişi',
  'CV hazırlanması & icmal',
  'Mock müsahibə sessiyaları',
  'Karyera dəstəyi & tövsiyə məktubu',
  'Tamamlanma sertifikatı',
  'Yazılı materiallar & resurslar',
  'İş ilanları priority girişi',
]

const plans = {
  monthly: {
    label: 'Aylıq',
    price: 350,
    unit: 'ay',
    total: '₼350 × 12 = ₼4 200',
    saving: null as string | null,
    badge: null as string | null,
  },
  quarterly: {
    label: '3 Aylıq',
    price: 900,
    unit: '3 ay',
    total: '₼900 × 4 = ₼3 600',
    saving: '₼600 qənaət' as string | null,
    badge: '14% Endirim' as string | null,
  },
}

export default function Pricing() {
  const { ref, visible } = useInView()
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly')

  const plan = plans[billing]

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/6 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div
          className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <Sparkles size={12} />
            Qiymətlər
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Bir plan.
            <br />
            <span className="text-primary">Ödəniş növünü seç.</span>
          </h2>

          <p className="text-white/40 text-sm max-w-sm leading-relaxed">
            12 aylıq tam proqram. Aylıq və ya 3 aylıq ödəniş seçimini et.
          </p>
        </div>

        {/* Toggle */}
        <div
          className={`flex justify-center transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1">
            {(['monthly', 'quarterly'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billing === key
                    ? 'bg-primary text-secondary shadow-md shadow-primary/20'
                    : 'text-white/45 hover:text-white/70'
                }`}
              >
                {plans[key].label}
                {plans[key].badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                      billing === key
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-primary/15 text-primary'
                    }`}
                  >
                    {plans[key].badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          className={`relative flex flex-col rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/7 to-transparent transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Duration pill */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/50 text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              <Clock size={10} />
              12 aylıq tam proqram
            </span>
          </div>

          <div className="flex flex-col gap-8 p-8 pt-10">

            {/* Price */}
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-1.5">
                  <span className="text-white/30 text-xl font-medium self-start mt-2">₼</span>
                  <span
                    key={billing}
                    className="text-6xl font-extrabold text-white tracking-tight leading-none"
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/35 text-sm mb-1.5">/ {plan.unit}</span>
                </div>
                <p className="text-white/25 text-xs">{plan.total}</p>
              </div>

              {plan.saving && (
                <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-2 rounded-xl shrink-0">
                  <BadgePercent size={13} />
                  {plan.saving}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-primary/12" />

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/20 shrink-0 mt-0.5">
                    <Check size={10} className="text-primary" />
                  </div>
                  <span className="text-white/60 text-sm leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-secondary font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group"
            >
              İndi qeydiyyatdan keç
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            <p className="text-center text-white/20 text-xs">
              7 günlük pulsuz sınaq · Kredit kartı tələb olunmur
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
