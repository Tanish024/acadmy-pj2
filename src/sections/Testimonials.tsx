import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS } from '@/data/content'

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Alumni"
          title="Built and shipped by alumni"
          subtitle="Real projects, real workflow automations, and measurable career outcomes from recent cohort graduates."
        />

        {/* 3 Testimonial Cards Grid (No fake logos) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex"
            >
              <Card
                padding="lg"
                className="w-full flex flex-col justify-between hover:border-[var(--primary)]/40 transition-colors duration-200 text-left"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center">
                    <Quote size={16} />
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text)] leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                {/* Candidate Info */}
                <div className="pt-6 mt-6 border-t border-[var(--border)]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--primary)] font-heading font-bold text-xs flex items-center justify-center shrink-0">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[var(--text)]">
                      {test.name}
                    </h4>
                    <p className="text-xs text-[var(--muted)]">{test.role}</p>
                    <span className="text-[10px] text-[var(--primary)] font-mono block mt-0.5">
                      {test.cohort}
                    </span>
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
