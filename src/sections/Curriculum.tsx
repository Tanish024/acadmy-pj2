import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Workflow,
  Sparkles,
  Check,
  FolderGit2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { Accordion, type AccordionItemData } from '@/components/ui/Accordion'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { CURRICULUM_DATA, PROGRAMMES } from '@/data/content'

export interface CurriculumProps {
  initialTrack?: string
}

export const Curriculum: React.FC<CurriculumProps> = ({
  initialTrack = 'students',
}) => {
  const [activeTab, setActiveTab] = useState(initialTrack)

  // Configure tabs
  const programmeTabs: TabItem[] = [
    {
      id: 'students',
      label: 'AI for Students',
      icon: <GraduationCap size={16} />,
    },
    {
      id: 'professionals',
      label: 'AI for Professionals',
      icon: <Briefcase size={16} />,
    },
    {
      id: 'automation',
      label: 'No-Code Automation',
      icon: <Workflow size={16} />,
    },
    {
      id: 'content',
      label: 'AI Content Creation',
      icon: <Sparkles size={16} />,
    },
  ]

  const currentProgramme = PROGRAMMES.find((p) => p.id === activeTab) || PROGRAMMES[0]
  const currentWeeks = CURRICULUM_DATA[activeTab] || CURRICULUM_DATA.students

  // Convert week data to AccordionItemData format
  const accordionItems: AccordionItemData[] = currentWeeks.map((week) => ({
    id: `week-${week.week}`,
    title: `Week 0${week.week}: ${week.title}`,
    content: (
      <div className="pt-2 pb-1 space-y-4">
        {/* Topics list */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] block mb-2">
            Core Modules Covered:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {week.topics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text)]">
                <div className="w-4 h-4 rounded-full bg-[var(--primary-tint)] text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} strokeWidth={2.5} />
                </div>
                <span className="leading-relaxed">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Mini Project Box */}
        <div className="bg-[var(--primary-tint)]/40 border border-[var(--primary)]/20 rounded-xl p-3.5 sm:p-4 text-left space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <FolderGit2 size={16} className="text-[var(--primary)] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold font-heading text-[var(--text)]">
                Mini Project: {week.miniProject.title}
              </span>
            </div>
            <Badge variant="primary" size="sm">
              Hands-On Build
            </Badge>
          </div>

          <p className="text-xs text-[var(--muted)] dark:text-[#CBD5E1] leading-relaxed">
            {week.miniProject.description}
          </p>

          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-[var(--primary)]">
            <span className="font-semibold uppercase tracking-wider text-[var(--muted)]">
              Deliverable:
            </span>
            <span>{week.miniProject.deliverable}</span>
          </div>
        </div>
      </div>
    ),
  }))

  return (
    <section id="curriculum" className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Structured Roadmap"
          title="6 weeks. Zero fluff. 6 deployed deliverables."
          subtitle="Explore the week-by-week progression for each track. Every single week ends with a portfolio-ready build."
        />

        {/* Programme Selection Tabs */}
        <div className="mt-10 sm:mt-12 flex justify-center overflow-x-auto pb-2">
          <Tabs
            tabs={programmeTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            className="shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          />
        </div>

        {/* Track Overview Card */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card padding="md" className="border-[var(--primary)]/20 bg-[var(--surface)] mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm">
                  {currentProgramme.duration}
                </Badge>
                <span className="text-xs text-[var(--muted)] font-mono">• {currentProgramme.level}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-[var(--text)]">
                {currentProgramme.title} Full Syllabus
              </h3>
              <p className="text-xs text-[var(--muted)] max-w-xl">
                {currentProgramme.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] uppercase font-semibold text-[var(--muted)] mr-1">Tools:</span>
              {currentProgramme.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded-lg bg-[var(--primary-tint)] text-[var(--primary)] text-[11px] font-mono border border-[var(--primary)]/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>

          {/* Week-by-Week Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Accordion
                items={accordionItems}
                defaultOpenId="week-1"
                allowMultiple={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
