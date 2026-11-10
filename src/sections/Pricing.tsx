import React from 'react'
import { motion } from 'framer-motion'
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PRICING_PLANS, UPCOMING_BATCHES, type PricingPlan } from '@/data/content'

export interface PricingProps {
  onRegisterClick?: () => void
  onSelectPlan?: (plan: PricingPlan) => void
}

export const Pricing: React.FC<PricingProps> = ({
  onRegisterClick,
  onSelectPlan,
}) => {
  return (
    <section id="pricing" className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Cohort Investment"
          title="Transparent, career-accelerating pricing"
          subtitle="Choose the format that fits your learning pace. Every plan includes production-ready blueprints and active community access."
        />

        {/* Upcoming Batch Dates Strip */}
        <div className="mt-8 max-w-3xl mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <span className="text-xs font-bold font-heading text-[var(--text)] block">
                  Upcoming Cohort Dates
                </span>
                <span className="text-[11px] text-[var(--muted)]">
                  Live weekend masterclasses • 6 weeks duration
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {UPCOMING_BATCHES.map((batch, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-xs font-mono text-[var(--text)] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  <span>{batch.date}</span>
                  <span className="text-[10px] text-[var(--primary)] font-sans">
                    ({batch.seatsLeft} left)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gentle reminder line */}
          <div className="mt-3 pt-3 border-t border-[var(--border)]/60 text-center text-xs text-[var(--muted)]">
            <span className="font-medium text-[var(--primary)]">Note:</span> Limited seats per batch to preserve direct, 1-on-1 code and architecture reviews.
          </div>
        </div>

        {/* Pricing Cards Grid (3 plans, Recommended highlighted with indigo border & peach button) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const isRec = plan.isRecommended

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex"
              >
                <Card
                  padding="lg"
                  className={`w-full flex flex-col justify-between relative transition-all duration-200 text-left ${
                    isRec
                      ? 'border-2 border-[var(--primary)] bg-[var(--surface)] shadow-[0_8px_30px_rgba(108,122,224,0.12)] -translate-y-1'
                      : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/40'
                  }`}
                >
                  {/* Recommended Ribbon */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[var(--primary)] text-white text-[11px] font-bold tracking-wide shadow-sm uppercase">
                        <Sparkles size={12} />
                        Most Popular • Recommended
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Plan Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-heading text-[var(--text)]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Pricing Display */}
                    <div className="pt-2 pb-1 border-y border-[var(--border)]/60 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-bold font-heading text-[var(--text)]">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-sm text-[var(--muted)] line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--muted)] font-mono">
                        {plan.billingNote}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] block">
                        Included in this plan:
                      </span>
                      <ul className="space-y-2.5 text-xs text-[var(--text)]">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-[var(--primary-tint)] text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={11} strokeWidth={2.5} />
                            </div>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button: ONLY the recommended plan has a peach primary CTA! */}
                  <div className="pt-8 mt-6 border-t border-[var(--border)]/60">
                    {isRec ? (
                      <Button
                        variant="primary"
                        fullWidth
                        size="lg"
                        onClick={onRegisterClick}
                        rightIcon={<ArrowRight size={16} />}
                        className="font-semibold"
                      >
                        {plan.ctaText}
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        fullWidth
                        size="lg"
                        onClick={() => {
                          if (onSelectPlan) onSelectPlan(plan)
                          else if (onRegisterClick) onRegisterClick()
                        }}
                      >
                        {plan.ctaText}
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
