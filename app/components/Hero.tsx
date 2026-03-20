'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Trophy, Code2, Star, CheckCircle2, Flame, BookOpen } from 'lucide-react'
import atLesson from '../../assets/atLesson.webp'

const stats = [
  { icon: Users,  target: 140, suffix: '+', label: 'Məzun'        },
  { icon: Trophy, target: 94,  suffix: '%', label: 'Uğur nisbəti' },
  { icon: Code2,  target: 30,  suffix: '+', label: 'Layihə'       },
]

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ icon: Icon, target, suffix, label, active }: {
  icon: React.ElementType; target: number; suffix: string; label: string; active: boolean
}) {
  const count = useCountUp(target, active)
  return (
    <div className="flex flex-col items-center lg:items-star gap-1.5 px-3 sm:px-5 py-4 rounded-2xl bg-white/4 border border-white/8 hover:border-primary/30 hover:bg-white/6 transition-all duration-300 min-w-0 w-full">
      <div className="flex align-center flex-row md:flex-col lg:flex-row items-center gap-1.5 sm:gap-2">
        <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-primary/15 border border-primary/20 shrink-0">
          <Icon size={14} className="text-primary" />
        </div>
        <p className="text-white font-extrabold text-2xl sm:text-3xl md:text-xl lg:text-3xl leading-none tabular-nums">
          {count}{suffix}
        </p>
      </div>
      <p className="text-white/45 text-xs">{label}</p>
    </div>
  )
}

/* Floating card wrapper */
function FloatingCard({ position, delay, visible, children }: {
  position: string; delay: string; visible: boolean; children: React.ReactNode
}) {
  return (
    <div className={`hidden sm:flex absolute ${position} items-center gap-2.5
      bg-[#161616]/90 backdrop-blur-md border border-white/10
      px-3.5 py-2.5 rounded-xl shadow-xl shadow-black/40
      hero-pill ${delay} transition-all duration-700
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
      {children}
    </div>
  )
}

/* Tiny SVG ring progress */
function RingProgress({ pct, size = 44, stroke = 4, color = '#fbd072' }: { pct: number; size?: number; stroke?: number; color?: string }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1.2s ease' }}
      />
    </svg>
  )
}

export default function Hero() {
  const [visible, setVisible]     = useState(false)
  const [animated, setAnimated]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 80)
    const t2 = setTimeout(() => setAnimated(true), 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const cards = [
    {
      position: '-top-5 -left-6', delay: 'delay-0',
      content: (
        <>
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/25">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none">Canlı Dərs</p>
            <p className="text-white/40 text-[10px] mt-0.5 flex items-center gap-1"><Users size={9} /> 24 izləyici</p>
          </div>
        </>
      ),
    },
    {
      position: '-top-5 -right-6', delay: 'delay-200',
      content: (
        <>
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-base leading-none">4.9</span>
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-primary fill-primary" />)}
            </div>
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none">Reytinq</p>
            <p className="text-white/40 text-[10px] mt-0.5">340+ rəy</p>
          </div>
        </>
      ),
    },
    {
      position: '-bottom-5 -right-6', delay: 'delay-300',
      content: (
        <>
          <CheckCircle2 size={20} className="text-[#28c840] shrink-0" />
          <div>
            <p className="text-white text-xs font-semibold leading-none">Dərs tamamlandı</p>
            <p className="text-white/40 text-[10px] mt-0.5 flex items-center gap-1"><BookOpen size={9} /> React Hooks · 45 dəq</p>
          </div>
        </>
      ),
    },
    {
      position: '-bottom-5 -left-6', delay: 'delay-100',
      content: (
        <>
          <div className="relative flex items-center justify-center">
            <RingProgress pct={animated ? 72 : 0} size={40} stroke={3} />
            <Flame size={14} className="text-orange-400 absolute" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none">12 günlük streak</p>
            <p className="text-white/40 text-[10px] mt-0.5">Sabah da davam et!</p>
          </div>
        </>
      ),
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden">

      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 sm:left-1/4 w-60 sm:w-96 lg:w-125 h-60 sm:h-96 lg:h-125 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 sm:w-72 lg:w-87.5 h-48 sm:h-72 lg:h-87.5 rounded-full bg-[#7c6be0]/10 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">

        {/* ── LEFT ── */}
        <div className={`flex flex-col gap-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Qeydiyyat davam edir
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            İlk addımı<br />
            <span className="text-primary">sən atmalısan!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
            Başlamaq üçün bilik, cəsarət lazım deyil. Sadəcə ayağa durub ilk addımı atmalısan. Qalanını biz həll edərik!
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="inline-flex items-center gap-2 bg-primary text-secondary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 group">
              İndi Başla
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="#courses" className="inline-flex items-center gap-2 border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-medium text-sm px-6 py-3 rounded-xl transition-all duration-300">
              Tədris Planı
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} active={animated} />
            ))}
          </div>
        </div>

        {/* ── RIGHT — Lesson Photo + Floating Cards ── */}
        <div className={`relative flex justify-center md:justify-end transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-primary/10 blur-[90px]" />
          </div>

          <div className="relative w-full max-w-sm sm:max-w-lg mx-auto lg:mx-0">

            {/* ── Image ── */}
            <div className="hero-float relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src={atLesson}
                alt="Koda dərsi"
                className="w-full h-auto object-cover"
                priority
              />
              {/* bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-secondary/70 to-transparent" />
            </div>

            {cards.map((card, i) => (
              <FloatingCard key={i} position={card.position} delay={card.delay} visible={visible}>
                {card.content}
              </FloatingCard>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
