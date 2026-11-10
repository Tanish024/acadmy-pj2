import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-200 ease-out focus-ring select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer'

    // Variants:
    // primary = peach (#F2A57C light / #F0A97F dark) with dark text for high contrast (ONLY for main CTAs)
    // secondary = indigo outline with primary color and tint on hover
    // ghost = transparent with soft surface hover
    const variants = {
      primary:
        'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#151A21] font-semibold border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(242,165,124,0.25)]',
      secondary:
        'bg-transparent border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-tint)] hover:border-[var(--primary-hover)]',
      ghost:
        'bg-transparent border border-transparent text-[var(--text)] hover:bg-[var(--surface-hover)] hover:text-[var(--primary)]',
    }

    const sizes = {
      sm: 'text-xs h-9 px-3.5 gap-1.5',
      md: 'text-sm h-11 px-5 gap-2',
      lg: 'text-base h-13 px-6 gap-2.5',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
