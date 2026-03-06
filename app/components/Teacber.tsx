'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Github,
  Linkedin,
  Twitter,
  Star,
  GraduationCap,
  ArrowRight,
  MapPin,
  Building2,
} from 'lucide-react'

import teacherImg from '../../assets/teacher.webp'

const skills = [
  { label: 'React.js', level: 98 },
  { label: 'Next.js', level: 95 },
  { label: 'Node.js', level: 90 },
  { label: 'TypeScript', level: 92 },
  { label: 'PostgreSQL', level: 85 },
  { label: 'Docker', level: 80 },
]

const badges = [
  {
    icon: Star,
    text: '4.9 Reytinq',
    sub: '340+ rəy',
    pos: 'top-6 -right-6',
  },
  {
    icon: GraduationCap,
    text: '500+ Məzun',
    sub: 'Uğurla bitiriblər',
    pos: 'bottom-24 -right-8',
  },
  {
    icon: Building2,
    text: 'Eigen LLC',
    sub: 'London, UK · Remote',
    pos: '-bottom-4 left-8',
  },
]

const experience = [
  {
    company: 'Eigen LLC',
    location: 'London, United Kingdom · Remote',
    role: 'Full Stack Developer',
    period: '2023 — Hal-hazırda',
    current: true,
    desc: 'Neft-qaz şirkətləri üçün enterprise-səviyyəli Dashboard workspace-lər, mürəkkəb hesablama mühərrikləri və analitika platformaları hazırlayıram.',
  },
  {
    company: 'Freelance & Lokal Şirkətlər',
    location: 'Azərbaycan',
    role: 'Full Stack Developer',
    period: '2020 — 2023',
    current: false,
    desc: 'Müxtəlif sektorlar üçün veb tətbiqlər, API inteqrasiyaları və UI/UX həlləri.',
  },
]

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

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

function SkillBar({
  label,
  level,
  visible,
  delay,
}: {
  label: string
  level: number
  visible: boolean
  delay: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-white/60 text-xs font-medium">{label}</span>
        <span className="text-primary text-xs font-bold tabular-nums">
          {level}%
        </span>
      </div>

      <div className="h-1 w-full rounded-full bg-white/6 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Teacher() {
  const { ref, visible } = useInView()

  return (
    <section
      ref={ref}
      id="muellim"
      className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-500/6 blur-[110px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-20">

        {/* Header */}
        <div
          className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Müəllim
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Sənə kim
            <br />
            <span className="text-primary">dərs keçəcək?</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">

          {/* LEFT */}
          <div
            className={`flex flex-col gap-5 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">

              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-violet-500/20 blur-sm" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={teacherImg}
                  alt="Zahid Vahabzadə"
                  className="w-full h-auto object-cover"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-extrabold text-2xl tracking-tight">
                    Zahid Vahabzadə
                  </p>

                  <p className="text-primary text-sm font-medium mt-1.5">
                    Full Stack Developer & Müəllim
                  </p>

                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center justify-center w-4 h-4 rounded-md bg-white/10">
                      <Building2 size={10} className="text-primary" />
                    </div>
                    <span className="text-white/70 text-xs font-medium">Eigen LLC</span>
                    <span className="text-white/25 text-xs">·</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={10} className="text-white/40" />
                      <span className="text-white/50 text-xs">London, UK · Remote</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/8 border border-white/12 text-white/50 hover:bg-primary/15 hover:border-primary/35 hover:text-primary transition-all duration-300"
                      >
                        <Icon size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {badges.map(({ icon: Icon, text, sub, pos }) => (
                <div
                  key={text}
                  className={`hidden sm:flex absolute ${pos} items-center gap-2.5 bg-[#111]/90 backdrop-blur-md border border-white/10 px-3 py-2.5 rounded-xl shadow-xl shadow-black/50`}
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/15 border border-primary/25">
                    <Icon size={13} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-white text-xs font-bold">{text}</p>
                    <p className="text-white/40 text-[10px]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            

            {/* Experience timeline */}
            <div className="flex flex-col gap-3">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">İş Təcrübəsi</p>
              <div className="flex flex-col gap-0">
                {experience.map((exp, i) => (
                  <div key={exp.company} className="flex gap-3 group">
                    {/* Timeline */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-2.5 h-2.5 rounded-full border-2 mt-1 shrink-0 ${
                        exp.current
                          ? 'border-primary bg-primary/30'
                          : 'border-white/20 bg-transparent'
                      }`} />
                      {i < experience.length - 1 && (
                        <div className="w-px flex-1 bg-white/8 mt-1 min-h-6" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-4 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-white text-sm font-semibold">{exp.role}</p>
                      </div>
                      <p className={`text-xs font-medium mt-0.5 ${
                        exp.current ? 'text-primary' : 'text-white/40'
                      }`}>{exp.company}</p>
                      <div className="flex items-center justify-between gap-2 mt-0.5">
                        <div className="flex items-center gap-1">
                          <MapPin size={9} className="text-white/25" />
                          <p className="text-white/30 text-[10px]">{exp.location}</p>
                        </div>
                        <p className="text-white/25 text-[10px] shrink-0">{exp.period}</p>
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed mt-1.5">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3.5 p-5 rounded-2xl bg-white/[0.03] border border-white/7">
              <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                Texniki Bacarıqlar
              </p>

              {skills.map((s, i) => (
                <SkillBar
                  key={s.label}
                  {...s}
                  visible={visible}
                  delay={400 + i * 80}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#qosul"
                className="inline-flex items-center gap-2 bg-primary text-secondary font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 group"
              >
                Zahidlə öyrən
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <Link
                href="#kurs"
                className="inline-flex items-center gap-2 border border-white/12 text-white/60 font-medium text-sm px-6 py-3 rounded-xl hover:border-white/25 hover:text-white transition-all duration-300"
              >
                Tədris planına bax
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}