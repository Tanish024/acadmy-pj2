import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Code2,
  Hammer,
  MessageSquareCheck,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { LEARNING_STEPS } from '@/data/content'

export interface HowLearningWorksProps {
  onRegisterClick?: () => void
}

const getStepIcon = (index: number) => {
  switch (index) {
    case 0:
      return <BookOpen size={20} />
    case 1:
      return <Code2 size={20} />
    case 2:
      return <Hammer size={20} />
    case 3:
      return <MessageSquareCheck size={20} />
    default:
      return <BookOpen size={20} />
  }
}

export const HowLearningWorks: React.FC<HowLearningWorksProps> = ({
  onRegisterClick,
}) => {
  return (
    <section className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Learning Methodology"
          title="How learning works"
          subtitle="A high-velocity four-stage loop designed around practical execution instead of passive lectures."
        />

        {/* 4 Steps Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {LEARNING_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex"
            >
              <Card
                padding="md"
                className="w-full flex flex-col justify-between hover:border-[var(--primary)]/40 transition-colors duration-200 relative group"
              >
                <div className="space-y-5 text-left">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                      {getStepIcon(index)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-[var(--primary)] bg-[var(--primary-tint)] px-2.5 py-0.5 rounded-full border border-[var(--primary)]/20">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs text-[var(--muted)] dark:text-[#CBD5E1] leading-relaxed pt-1">
                    {step.detail}
                  </p>
                </div>

                {/* Progress link visual indicator */}
                <div className="pt-4 mt-4 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] text-[var(--muted)]">
                  <span>Stage {index + 1} of 4</span>
                  <span className="text-[var(--primary)] font-medium">Verified Loop</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA banner below methodology */}
        <div className="mt-14 max-w-3xl mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold font-heading text-[var(--text)]">
              Experience the method for yourself
            </h4>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Reserve your seat for the next cohort starting November 24.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={onRegisterClick}
            rightIcon={<ArrowRight size={16} />}
            className="shrink-0 w-full sm:w-auto"
          >
            Register Now
          </Button>
        </div>
      </Container>
    </section>
  )
}
