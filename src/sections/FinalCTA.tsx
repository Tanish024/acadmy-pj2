import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export interface FinalCTAProps {
  onRegisterClick?: () => void
  onDemoClick?: () => void
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onRegisterClick,
  onDemoClick,
}) => {
  return (
    <section className="py-12 sm:py-20 bg-[var(--background)] transition-colors duration-200">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        >
          {/* Subtle ambient glow in indigo tint */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--primary-tint)]/70 rounded-full blur-3xl pointer-events-none -z-10"
          />

          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="primary" dot size="md">
              Next Cohort Starting November 24
            </Badge>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[var(--text)] tracking-tight max-w-2xl mx-auto leading-tight">
            Start your AI journey this month.
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Gain the practical skills, live automated workflows, and verified capstone portfolio to thrive in an AI-accelerated economy. Limited to 30 seats per cohort.
          </p>

          {/* CTAs: exactly ONE peach CTA (Register Now) + secondary indigo outline (Book Free Demo) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onRegisterClick}
              rightIcon={<ArrowRight size={18} />}
              className="sm:w-auto px-7"
            >
              Register Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={onDemoClick}
              leftIcon={<PhoneCall size={18} />}
              className="sm:w-auto px-6"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Proof checkmarks */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[var(--success)]" /> 7-day money-back guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[var(--success)]" /> Direct mentor feedback
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[var(--success)]" /> Tamper-proof digital certificate
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
