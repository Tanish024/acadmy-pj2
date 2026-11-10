import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { INSTRUCTOR_DATA } from '@/data/content'

const getCredibilityIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Award size={20} />
    case 1:
      return <Users size={20} />
    case 2:
      return <ShieldCheck size={20} />
    default:
      return <Award size={20} />
  }
}

export const Instructor: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Mentorship"
          title="Learn from active practitioners, not theorists"
          subtitle="Taught by senior AI architects who build, test, and maintain high-volume autonomous systems daily."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Clean Placeholder Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <Card
              padding="lg"
              className="w-full max-w-sm text-center space-y-5 border-[var(--primary)]/30 bg-[var(--surface)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              {/* Monogram stylized avatar */}
              <div className="relative mx-auto w-24 h-24 rounded-3xl bg-[var(--primary-tint)] border-2 border-[var(--primary)]/40 flex items-center justify-center text-[var(--primary)] text-2xl font-bold font-heading shadow-inner">
                <span>{INSTRUCTOR_DATA.initials}</span>
                <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)]">
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-heading text-[var(--text)]">
                  {INSTRUCTOR_DATA.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--primary)]">
                  {INSTRUCTOR_DATA.role}
                </p>
                <div className="pt-1 flex items-center justify-center gap-1.5 flex-wrap">
                  <Badge variant="primary" size="sm">
                    40+ Cohorts Led
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    AI Architect
                  </Badge>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] leading-relaxed text-left pt-2 border-t border-[var(--border)]/60">
                {INSTRUCTOR_DATA.bio}
              </p>
            </Card>
          </motion.div>

          {/* Right: 3 Credibility Points */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            {INSTRUCTOR_DATA.credibilityPoints.map((point, idx) => (
              <Card
                key={idx}
                padding="md"
                className="hover:border-[var(--primary)]/40 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                    {getCredibilityIcon(idx)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold font-heading text-[var(--text)]">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
