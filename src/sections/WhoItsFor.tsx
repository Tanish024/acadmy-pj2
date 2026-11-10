import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Briefcase, BriefcaseBusiness } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { WHO_ITS_FOR } from '@/data/content'

const getAudienceIcon = (id: string) => {
  switch (id) {
    case 'students':
      return <GraduationCap size={22} />
    case 'freshers':
      return <Rocket size={22} />
    case 'professionals':
      return <Briefcase size={22} />
    case 'freelancers':
      return <BriefcaseBusiness size={22} />
    default:
      return <GraduationCap size={22} />
  }
}

export const WhoItsFor: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Cohort Demographics"
          title="Who it's for"
          subtitle="Curated curriculum tracks built specifically around the challenges faced at your exact career juncture."
        />

        {/* 4 Cards Grid - 1 line each */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WHO_ITS_FOR.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex"
            >
              <Card
                padding="md"
                className="w-full flex flex-col justify-between hover:border-[var(--primary)]/50 transition-colors duration-200 group text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {getAudienceIcon(item.id)}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-heading text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {item.audience}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      {item.oneLiner}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border)]/60 text-[11px] text-[var(--muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  <span className="line-clamp-1">{item.idealFor}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
