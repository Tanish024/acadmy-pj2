import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Workflow,
  Sparkles,
  Clock,
  Users,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PROGRAMMES, type Programme } from '@/data/content'

export interface ProgrammesProps {
  onSelectProgramme?: (slug: string) => void
  onEnroll?: (programme: Programme) => void
}

const getProgrammeIcon = (id: string) => {
  switch (id) {
    case 'students':
      return <GraduationCap size={22} />
    case 'professionals':
      return <Briefcase size={22} />
    case 'automation':
      return <Workflow size={22} />
    case 'content':
      return <Sparkles size={22} />
    default:
      return <Sparkles size={22} />
  }
}

export const Programmes: React.FC<ProgrammesProps> = ({
  onSelectProgramme,
  onEnroll,
}) => {
  return (
    <section id="programmes" className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Specialized Tracks"
          title="Designed for your exact career stage"
          subtitle="Focused, small-group cohorts taught by senior AI practitioners with weekly hands-on deliverables."
        />

        {/* 4 Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PROGRAMMES.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex"
            >
              <Card
                padding="md"
                className="w-full flex flex-col justify-between hover:border-[var(--primary)]/60 transition-all duration-200 group relative"
              >
                <div className="space-y-5">
                  {/* Icon & Level Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                      {getProgrammeIcon(prog.id)}
                    </div>
                    <Badge variant="primary" size="sm">
                      {prog.level}
                    </Badge>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="text-lg font-bold font-heading text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                      {prog.tagline}
                    </p>
                  </div>

                  {/* Metadata: Duration & Who it is for */}
                  <div className="space-y-2.5 pt-2 border-t border-[var(--border)]/60 text-left text-xs">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <Clock size={14} className="text-[var(--primary)] shrink-0" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[var(--muted)]">
                      <Users size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{prog.whoItIsFor}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1 text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                      What you'll ship:
                    </span>
                    <ul className="space-y-1 text-xs text-[var(--text)]">
                      {prog.highlights.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[var(--primary)] shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="pt-6 mt-4 border-t border-[var(--border)] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xl font-bold font-heading text-[var(--text)]">
                        {prog.price}
                      </span>
                      {prog.originalPrice && (
                        <span className="text-xs text-[var(--muted)] line-through ml-2">
                          {prog.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[var(--muted)] font-mono">Cohort 04</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onSelectProgramme && onSelectProgramme(prog.id)}
                      className="text-xs h-9 rounded-xl font-medium"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => onEnroll && onEnroll(prog)}
                      className="text-xs h-9 rounded-xl font-semibold"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
