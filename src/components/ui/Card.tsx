import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, padding = 'md', children, ...props }, ref) => {
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'bg-[var(--surface)] border border-[var(--border)] rounded-2xl transition-all duration-200 ease-out',
          interactive
            ? 'hover:border-[var(--primary)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] cursor-pointer'
            : 'shadow-[0_1px_3px_rgba(0,0,0,0.03)]',
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
