'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  Video,
  UserCheck,
  FolderGit2,
  BadgeCheck,
  Briefcase,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Canlı Dərslər',
    description: 'Hər həftə real vaxt rejimində keçirilən interaktiv dərslər. Suallarını anında ver, cavabını anında al.',
    accent: 'from-red-500/20 to-red-500/5',
    border: 'hover:border-red-500/30',
    iconBg: 'bg-red-500/15 border-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: UserCheck,
    title: 'Fərdi Mentorluq',
    description: 'Hər tələbəyə ayrılmış mentor. Proqresdən başlayaraq karyera planına qədər hər addımda yanındayıq.',
    accent: 'from-primary/20 to-primary/5',
    border: 'hover:border-primary/30',
    iconBg: 'bg-primary/15 border-primary/20',
    iconColor: 'text-primary',
  },
  {
    icon: FolderGit2,
    title: 'Real Layihələr',
    description: 'Nəzəriyyə deyil, praktika. Hər modul real dünya layihəsi ilə tamamlanır, portfolio-n hazır olur.',
    accent: 'from-blue-500/20 to-blue-500/5',
    border: 'hover:border-blue-500/30',
    iconBg: 'bg-blue-500/15 border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: BadgeCheck,
    title: 'Sertifikat',
    description: 'Kursu başa vurduqdan sonra əmək bazarında tanınan rəsmi Koda sertifikatı əldə edirsən.',
    accent: 'from-emerald-500/20 to-emerald-500/5',
    border: 'hover:border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Briefcase,
    title: 'Karyera Dəstəyi',
    description: 'CV hazırlığından tutmuş müsahibə hazırlığına qədər. Məzunlarımızın 94%-i işə düzəlir.',
    accent: 'from-violet-500/20 to-violet-500/5',
    border: 'hover:border-violet-500/30',
    iconBg: 'bg-violet-500/15 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Clock,
    title: 'Çevik Cədvəl',
    description: 'Bütün yazılmış dərslər 24/7 əlçatandır. Öz tempinlə, öz vaxtında öyrən.',
    accent: 'from-orange-500/20 to-orange-500/5',
    border: 'hover:border-orange-500/30',
    iconBg: 'bg-orange-500/15 border-orange-500/20',
    iconColor: 'text-orange-400',
  },
]

function FeatureCard({
  icon: Icon, title, description, accent, border, iconBg, iconColor, visible, index,
}: (typeof features)[0] & { visible: boolean; index: number }) {
  return (
    <div
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/8 ${border}
        transition-all duration-500 overflow-hidden
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* subtle gradient top-left glow */}
      <div className={`pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className={`relative flex items-center justify-center w-11 h-11 rounded-xl border ${iconBg} shrink-0`}>
        <Icon size={20} className={iconColor} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-14">

        {/* Header */}
        <div
          className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Niyə Koda?
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Sadəcə kurs deyil,<br />
            <span className="text-primary">tam bir sistem.</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl">
            Koda-da öyrənmək fərqlidir. Hər detalı tələbənin uğuru üçün düşünülmüşdür.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} visible={visible} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
