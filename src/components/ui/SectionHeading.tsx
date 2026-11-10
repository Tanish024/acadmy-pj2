import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from './Badge'

export interface SectionHeadingProps {
  badge?: string
  badgeVariant?: 'neutral' | 'primary' | 'accent' | 'success'
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-3',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text)] font-heading leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}
