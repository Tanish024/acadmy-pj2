import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options?: SelectOption[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, children, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full h-11 pl-4 pr-10 text-sm bg-[var(--surface)] text-[var(--text)] border rounded-2xl appearance-none cursor-pointer transition-all duration-200 focus-ring',
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-[var(--border)] focus:border-[var(--primary)]',
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3.5 pointer-events-none text-[var(--muted)]"
            aria-hidden="true"
          />
        </div>
        {error ? (
          <p className="text-xs text-red-500 font-medium pl-1">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-[var(--muted)] pl-1">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

Select.displayName = 'Select'
