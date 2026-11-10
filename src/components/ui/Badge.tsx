import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'primary' | 'accent' | 'success'
  size?: 'sm' | 'md'
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const variants = {
    neutral:
      'bg-[var(--surface-hover)] text-[var(--muted)] border-[var(--border)]',
    primary:
      'bg-[var(--primary-tint)] text-[var(--primary)] border-[var(--primary)]/30',
    accent:
      'bg-[var(--accent-tint)] text-[#B45A28] dark:text-[var(--accent)] border-[var(--accent)]/30',
    success:
      'bg-[var(--success-tint)] text-[#2C7A50] dark:text-[var(--success)] border-[var(--success)]/30',
  }

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs sm:text-sm px-3 py-1 font-medium',
  }

  const dotColors = {
    neutral: 'bg-[var(--muted)]',
    primary: 'bg-[var(--primary)]',
    accent: 'bg-[var(--accent)]',
    success: 'bg-[var(--success)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors duration-200 select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  )
}
