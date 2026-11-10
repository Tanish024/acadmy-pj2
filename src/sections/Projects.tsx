import React from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  Layers,
  Sparkles,
  Bot,
  CheckCircle2,
  GitBranch,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PORTFOLIO_PROJECTS } from '@/data/content'

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'lead-agent':
      return <Bot size={20} />
    case 'ai-knowledge-base':
      return <Cpu size={20} />
    case 'brand-engine':
      return <Layers size={20} />
    case 'ops-orchestrator':
      return <GitBranch size={20} />
    default:
      return <Sparkles size={20} />
  }
}

export const Projects: React.FC = () => {
  return (
    <section id="outcomes" className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Verified Capstones"
          title="Projects you will build and own"
          subtitle="Real systems built for production, not toy classroom examples. Every graduate walks away with four verifiable case studies."
        />

        {/* 4 Portfolio Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="flex"
            >
              <Card
                padding="lg"
                className="w-full flex flex-col justify-between hover:border-[var(--primary)]/50 transition-all duration-200 group"
              >
                <div className="space-y-6 text-left">
                  {/* Card Header: Category & Metrics */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-[var(--border)]/60">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="text-xs font-semibold text-[var(--muted)]">
                        {project.category}
                      </span>
                    </div>
                    <Badge variant="primary" size="sm">
                      {project.impactMetric}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Architecture Diagram / Blueprint Highlights */}
                  <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-xl p-4 space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] block">
                      Production Architecture Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[var(--text)]">
                      {project.architectureHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-[var(--primary)] shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Tool tags & Live Status */}
                <div className="pt-6 mt-4 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg bg-[var(--primary-tint)] text-[var(--primary)] text-xs font-mono border border-[var(--primary)]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-[var(--muted)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                    Portfolio Ready
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
