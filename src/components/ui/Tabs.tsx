import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  badge?: string | number
}

export interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (tabId: string) => void
  className?: string
  fullWidth?: boolean
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  fullWidth = false,
}) => {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex p-1 bg-[var(--surface)] border border-[var(--border)] rounded-2xl gap-1',
        fullWidth && 'w-full flex',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors duration-200 focus-ring cursor-pointer select-none',
              fullWidth && 'flex-1',
              isActive
                ? 'text-[var(--primary)] font-semibold'
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  'ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-semibold',
                  isActive
                    ? 'bg-[var(--primary-tint)] text-[var(--primary)]'
                    : 'bg-[var(--surface-hover)] text-[var(--muted)]'
                )}
              >
                {tab.badge}
              </span>
            )}

            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                transition={{ type: 'spring', stiffness: 400, damping: 35, duration: 0.2 }}
                className="absolute inset-0 bg-[var(--primary-tint)] border border-[var(--primary)]/20 rounded-xl -z-10 shadow-sm"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
