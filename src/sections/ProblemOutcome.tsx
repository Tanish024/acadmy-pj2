import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { PROBLEM_POINTS, OUTCOME_POINTS } from '@/data/content'

export const ProblemOutcome: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="The AI Gap"
          title="From casual prompter to capable AI builder"
          subtitle="The difference between watching AI hype on social media and shipping real automated systems that deliver measurable value."
        />

        {/* Side-by-side comparison cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Why most people struggle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <Card
              padding="lg"
              className="h-full flex flex-col justify-between border-[var(--border)] bg-[var(--surface)] relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--muted)] flex items-center justify-center shrink-0">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text)]">
                      Why most people struggle with AI
                    </h3>
                    <p className="text-xs text-[var(--muted)]">Common traps that stall learning</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {PROBLEM_POINTS.map((item, index) => (
                    <div key={item.id} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--muted)] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold font-heading text-[var(--text)]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)]/60 text-xs text-[var(--muted)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--muted)]/50" />
                Result: Feeling left behind as technology moves faster every month.
              </div>
            </Card>
          </motion.div>

          {/* Right Column: What you will be able to do */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <Card
              padding="lg"
              className="h-full flex flex-col justify-between border-[var(--primary)]/30 bg-[var(--primary-tint)]/25 dark:bg-[var(--surface)] relative overflow-hidden shadow-[0_4px_20px_rgba(108,122,224,0.06)]"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[var(--border)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text)]">
                      What you will be able to do
                    </h3>
                    <p className="text-xs text-[var(--primary)] font-medium">
                      Proven skills after 6 structured weeks
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {OUTCOME_POINTS.map((item) => (
                    <div key={item.id} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary-tint)] border border-[var(--primary)]/40 text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={14} strokeWidth={2.5} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold font-heading text-[var(--text)]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--muted)] dark:text-[#CBD5E1] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border)]/60 text-xs text-[var(--primary)] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Result: A verified GitHub portfolio and real-world AI capabilities.
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
