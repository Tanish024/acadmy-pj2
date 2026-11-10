import React from 'react'
import { motion } from 'framer-motion'
import { TOOLS } from '@/data/tools'
import { Container } from '@/components/ui/Container'
import {
  MessageSquareCode,
  Sparkles,
  Bot,
  Palette,
  Layers,
  Network,
  Cpu,
} from 'lucide-react'

// Helper to provide modern minimalist iconography for each tool
const getToolIcon = (id: string) => {
  switch (id) {
    case 'chatgpt':
      return <MessageSquareCode size={16} className="text-[#10A37F]" />
    case 'claude':
      return <Bot size={16} className="text-[#D97706]" />
    case 'gemini':
      return <Sparkles size={16} className="text-[#4E82EE]" />
    case 'canva':
      return <Palette size={16} className="text-[#00C4CC]" />
    case 'lovable':
      return <Layers size={16} className="text-[#FF4A60]" />
    case 'n8n':
      return <Network size={16} className="text-[#EA4B71]" />
    case 'make':
      return <Cpu size={16} className="text-[#6D3DF5]" />
    default:
      return <Sparkles size={16} className="text-[var(--primary)]" />
  }
}

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-10 border-y border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-xs transition-colors duration-200">
      <Container size="lg">
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[var(--border)]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] select-none">
              Tools you will master
            </p>
            <span className="w-6 h-[1px] bg-[var(--border)]" />
          </div>

          {/* Chips grid / wrap - optimized for 375px+ */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 px-1 max-w-4xl mx-auto">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/40 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-[var(--surface-hover)] group-hover:bg-[var(--primary-tint)]/60 flex items-center justify-center shrink-0 transition-colors duration-200">
                  {getToolIcon(tool.id)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text)] font-heading leading-tight">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-[var(--muted)] hidden sm:inline-block leading-tight">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-[var(--muted)] pt-1">
            Zero theoretical fluff. 100% applied projects using production AI tools.
          </p>
        </div>
      </Container>
    </section>
  )
}
