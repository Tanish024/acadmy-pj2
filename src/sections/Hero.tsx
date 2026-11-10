import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Bot,
  GitBranch,
  BarChart3,
  Check,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export interface HeroProps {
  onRegisterClick?: () => void
  onDemoClick?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onDemoClick }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Subtle background ambient soft tint */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[var(--primary-tint)]/60 rounded-full blur-3xl pointer-events-none opacity-60 dark:opacity-20"
      />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Cohort status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="primary" dot size="md">
                Next Cohort Starts Nov 24 • Limited to 30 Seats
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] font-heading leading-[1.12]">
                Learn practical AI skills.{' '}
                <span className="text-[var(--primary)]">Build real projects.</span>{' '}
                Get career-ready.
              </h1>
              {/* One-line subtext for students and young professionals */}
              <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed pt-2 max-w-2xl font-normal">
                Master prompt engineering, autonomous agents, and modern AI workflows built for ambitious students and young professionals.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onRegisterClick}
                rightIcon={<ArrowRight size={18} />}
                className="w-full sm:w-auto"
              >
                Register Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onDemoClick}
                leftIcon={<PhoneCall size={18} />}
                className="w-full sm:w-auto"
              >
                Book Free Demo
              </Button>
            </motion.div>

            {/* Three small proof points */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs sm:text-sm font-medium text-[var(--muted)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[var(--success-tint)] text-[var(--success)] flex items-center justify-center border border-[var(--success)]/20">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span className="text-[var(--text)]">Live projects</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[var(--success-tint)] text-[var(--success)] flex items-center justify-center border border-[var(--success)]/20">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span className="text-[var(--text)]">Beginner friendly</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[var(--success-tint)] text-[var(--success)] flex items-center justify-center border border-[var(--success)]/20">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span className="text-[var(--text)]">Industry Certificate</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract visual built with CSS/SVG */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="relative w-full max-w-md space-y-4"
            >
              {/* Decorative soft glow behind stack */}
              <div className="absolute inset-0 bg-[var(--primary-tint)]/40 rounded-3xl blur-2xl -z-10" />

              {/* CARD 1: Chat Prompt Card */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)]/60">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[var(--primary-tint)] text-[var(--primary)] flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text)] font-heading">
                      AI Project Assistant
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--success)] bg-[var(--success-tint)] px-2 py-0.5 rounded-full border border-[var(--success)]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                    Claude 3.7 Active
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  {/* User query pill */}
                  <div className="bg-[var(--surface-hover)] rounded-xl p-2.5 text-[var(--text)] text-xs border border-[var(--border)]/50">
                    <span className="text-[var(--muted)] font-medium text-[11px] block mb-0.5">Prompt:</span>
                    Build a multi-agent workflow to automate customer lead qualification and trigger calendar booking.
                  </div>

                  {/* AI Response pill in soft indigo tint */}
                  <div className="bg-[var(--primary-tint)]/60 rounded-xl p-2.5 text-[var(--text)] border border-[var(--primary)]/20">
                    <div className="flex items-center gap-1.5 text-[var(--primary)] font-semibold text-[11px] mb-0.5">
                      <Sparkles size={12} />
                      Solution Architecture Generated:
                    </div>
                    <p className="text-[var(--muted)] dark:text-[var(--text)] text-[11px] leading-relaxed">
                      Deployed 3 autonomous stages: Input parsing (Gemini) ➔ Qualification score (n8n) ➔ Instant invite link.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2: Workflow Node Card */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] relative -mt-1 sm:-mt-2 sm:ml-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[var(--primary-tint)] text-[var(--primary)] flex items-center justify-center">
                      <GitBranch size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text)] font-heading">
                      Live Agent Pipeline
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--primary)] bg-[var(--primary-tint)] px-2 py-0.5 rounded-full">
                    Latency: 180ms
                  </span>
                </div>

                {/* Workflow nodes diagram */}
                <div className="flex items-center justify-between gap-1 text-[11px] py-1">
                  {/* Node 1 */}
                  <div className="flex-1 bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-2 text-center">
                    <div className="font-semibold text-[var(--text)] text-[10px] sm:text-[11px]">Webhook</div>
                    <div className="text-[9px] text-[var(--muted)]">New Lead</div>
                  </div>

                  {/* Connector 1 */}
                  <div className="flex items-center text-[var(--primary)] shrink-0 px-1">
                    <div className="w-3 sm:w-5 h-[1.5px] bg-[var(--primary)]" />
                    <span className="text-[10px]">▶</span>
                  </div>

                  {/* Node 2 (Highlighted) */}
                  <div className="flex-1 bg-[var(--primary-tint)] border border-[var(--primary)]/40 rounded-xl p-2 text-center shadow-xs">
                    <div className="font-semibold text-[var(--primary)] text-[10px] sm:text-[11px]">AI Agent</div>
                    <div className="text-[9px] text-[var(--primary)]/80">n8n + LLM</div>
                  </div>

                  {/* Connector 2 */}
                  <div className="flex items-center text-[var(--primary)] shrink-0 px-1">
                    <div className="w-3 sm:w-5 h-[1.5px] bg-[var(--primary)]" />
                    <span className="text-[10px]">▶</span>
                  </div>

                  {/* Node 3 */}
                  <div className="flex-1 bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-2 text-center">
                    <div className="font-semibold text-[var(--text)] text-[10px] sm:text-[11px]">CRM Sync</div>
                    <div className="text-[9px] text-[var(--muted)]">Notion / DB</div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Mini Dashboard Card */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] relative -mt-1 sm:-mt-2 sm:-ml-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[var(--success-tint)] text-[var(--success)] flex items-center justify-center">
                      <BarChart3 size={14} />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text)] font-heading">
                      Student Capstone Progress
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[var(--text)] font-heading">
                    4 of 4 Done
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-[var(--surface-hover)] h-2 rounded-full overflow-hidden border border-[var(--border)]">
                    <div className="bg-[var(--primary)] h-full w-[94%] rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--muted)] pt-0.5">
                    <span>Portfolio Verification</span>
                    <span className="text-[var(--success)] font-medium flex items-center gap-1">
                      <CheckCircle2 size={12} /> Ready for Placement
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
