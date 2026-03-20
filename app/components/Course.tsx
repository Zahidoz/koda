'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Clock, BarChart2, Users,
  CalendarDays, FileCode2, Zap, AppWindow, Server,
  Database, GitBranch, ShieldCheck, Rocket, Sparkles,
} from 'lucide-react'

const modules = [
  {
    icon: FileCode2, label: 'HTML & CSS Əsasları',        weeks: '1–2-ci həftə',
    desc: 'Veb-in əsasları — semantic HTML, Flexbox, Grid və responsive dizayn.',
    color: 'text-orange-400', bg: 'bg-orange-500/15 border-orange-500/25', glow: 'shadow-orange-500/30',
  },
  {
    icon: Zap,       label: 'JavaScript & TypeScript',     weeks: '3–6-cı həftə',
    desc: 'Dinamik proqramlaşdırma, tip sistemi, async/await və müasir ES6+ sintaksis.',
    color: 'text-yellow-400', bg: 'bg-yellow-500/15 border-yellow-500/25', glow: 'shadow-yellow-500/30',
  },
  {
    icon: AppWindow, label: 'React.js & Next.js',          weeks: '7–11-ci həftə',
    desc: 'Component arxitekturası, hooks, context, SSR/SSG və App Router.',
    color: 'text-blue-400',   bg: 'bg-blue-500/15 border-blue-500/25',   glow: 'shadow-blue-500/30',
  },
  {
    icon: Server,    label: 'Node.js & REST API',           weeks: '12–15-ci həftə',
    desc: 'Server, Express.js, middleware, JWT autentifikasiyası və API dizaynı.',
    color: 'text-emerald-400', bg: 'bg-emerald-500/15 border-emerald-500/25', glow: 'shadow-emerald-500/30',
  },
  {
    icon: Database,  label: 'Verilənlər bazası',            weeks: '16–18-ci həftə',
    desc: 'PostgreSQL, MongoDB, Prisma ORM, münasibətlər və sorğu optimizasiyası.',
    color: 'text-violet-400', bg: 'bg-violet-500/15 border-violet-500/25', glow: 'shadow-violet-500/30',
  },
  {
    icon: GitBranch, label: 'Git, CI/CD & Deployment',      weeks: '19–20-ci həftə',
    desc: 'Version control, GitHub Actions, Vercel deployment və Docker əsasları.',
    color: 'text-pink-400',   bg: 'bg-pink-500/15 border-pink-500/25',   glow: 'shadow-pink-500/30',
  },
  {
    icon: ShieldCheck, label: 'Təhlükəsizlik & Auth',       weeks: '21-ci həftə',
    desc: 'OAuth 2.0, HTTPS, XSS/CSRF qorunması, rate limiting və best practices.',
    color: 'text-red-400',    bg: 'bg-red-500/15 border-red-500/25',     glow: 'shadow-red-500/30',
  },
  {
    icon: Rocket,    label: 'Yekun Layihə & Portfolio',     weeks: '22–24-cü həftə',
    desc: 'Real dünya layihəsi, code review, texniki müsahibə hazırlığı və təqdimat.',
    color: 'text-primary',    bg: 'bg-primary/15 border-primary/25',     glow: 'shadow-primary/30',
  },
]

const gains = [
  'Tam funksional veb tətbiqləri sıfırdan qura biləcəksən',
  'React, Next.js, Node.js, PostgreSQL stack-ını mənimsəyəcəksən',
  'GitHub profilin & real portfolio layihələrin hazır olacaq',
  'Müsahibə hazırlığı ilə ilk işini tapacaqsan',
]

function RoadmapItem({ mod, index, isLast }: {
  mod: typeof modules[0]; index: number; isLast: boolean
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.45 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex gap-5 group">

      {/* ── Left: node + connector ── */}
      <div className="flex flex-col items-center shrink-0">
        {/* Icon node */}
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-2xl border
            ${mod.bg} transition-all duration-600 ease-out
            ${visible ? `opacity-100 scale-100 shadow-lg ${mod.glow}` : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: `${index * 90}ms` }}
        >
          {/* Pulse ring on hover */}
          <div className={`absolute inset-0 rounded-2xl ${mod.bg} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`} />
          <mod.icon size={20} className={`relative z-10 ${mod.color}`} />
          {/* Number */}
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center
            rounded-full bg-[#0e0e0e] border border-white/12 text-[9px] font-bold text-white/40 z-20">
            {index + 1}
          </span>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div
            className={`w-px flex-1 mt-2 min-h-10 transition-all duration-700
              ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
              transitionDelay: `${index * 90 + 200}ms`,
            }}
          />
        )}
      </div>

      {/* ── Right: content ── */}
      <div
        className={`pb-9 flex-1 min-w-0 transition-all duration-500 ease-out
          ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
        style={{ transitionDelay: `${index * 90 + 80}ms` }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-sm leading-snug">{mod.label}</h3>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${mod.bg} ${mod.color}`}>
            {mod.weeks}
          </span>
        </div>
        <p className="text-white/35 text-xs leading-relaxed">{mod.desc}</p>
      </div>

    </div>
  )
}

export default function Course() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.3 },
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="courses" className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-20 right-1/3 w-[600px] h-[350px] rounded-full bg-primary/7 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-500/7 blur-[130px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`flex flex-col items-center gap-5 text-center transition-all duration-700
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <Sparkles size={12} />
            Əsas Proqram
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Full Stack<br />
            <span className="text-primary">Development</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-lg">
            Sıfırdan başlayaraq müasir veb tətbiqləri qurmağı öyrən — frontend-dən backend-ə, bazadan deploy-a qədər.
          </p>
        </div>

        {/* ── Main body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* ── Roadmap ── */}
          <div>
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-7 pl-1">Tədris Yolu</p>
            {modules.map((mod, i) => (
              <RoadmapItem key={mod.label} mod={mod} index={i} isLast={i === modules.length - 1} />
            ))}
          </div>

          {/* ── Sticky info card ── */}
          <div className="lg:sticky lg:top-28">
            <div className="relative flex flex-col gap-6 p-6 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
              {/* Inner glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative flex flex-col gap-1">
                <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Kurs</p>
                <h3 className="text-white text-xl font-bold leading-snug mt-1">Full Stack<br /><span className="text-primary">Development</span></h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: Clock,        label: 'Müddət',   value: '6 ay'           },
                  { icon: BarChart2,    label: 'Səviyyə',  value: 'Sıfırdan'       },
                  { icon: CalendarDays, label: 'Format',   value: 'Canlı + Yazılı' },
                  { icon: Users,        label: 'Qrup',     value: 'Maks. 15 nəfər' },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.04] border border-white/7 hover:border-white/12 transition-colors duration-300">
                    <d.icon size={14} className="text-primary/70" />
                    <p className="text-white/30 text-[10px]">{d.label}</p>
                    <p className="text-white text-xs font-semibold leading-snug">{d.value}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/6" />

              <div className="flex flex-col gap-3">
                <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Nə qazanacaqsan?</p>
                <ul className="flex flex-col gap-2.5">
                  {gains.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group"
              >
                Kursa Qeydiyyat
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
