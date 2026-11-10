import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Menu, X, ArrowRight, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Container } from '@/components/ui/Container'

export interface NavbarProps {
  onOpenRegister?: () => void
  onOpenDemo?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleRegisterClick = () => {
    closeMobileMenu()
    if (onOpenRegister) {
      onOpenRegister()
    } else {
      const el = document.getElementById('register-cta')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDemoClick = () => {
    closeMobileMenu()
    if (onOpenDemo) {
      onOpenDemo()
    } else {
      const el = document.getElementById('demo-cta')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-200">
        <Container size="lg">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus-ring rounded-xl p-1 -ml-1 transition-opacity"
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] group-hover:scale-105 transition-transform duration-200">
                <Sparkles size={20} className="stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[var(--text)] leading-none">
                  AI Academy
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[var(--muted)] mt-1">
                  Career Ready
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)] rounded-xl transition-colors duration-200 focus-ring"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/admin/leads"
                className="px-3.5 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] hover:bg-[var(--primary-tint)] rounded-xl transition-colors duration-200 focus-ring ml-1"
                title="View captured leads"
              >
                Leads
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="primary"
                size="md"
                onClick={handleRegisterClick}
                rightIcon={<ArrowRight size={16} />}
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Actions (Theme Toggle + Hamburger) */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="p-2 rounded-xl text-[var(--text)] hover:bg-[var(--surface-hover)] border border-[var(--border)] focus-ring transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full bg-[var(--surface)] border-t border-[var(--border)] rounded-t-3xl p-6 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary-tint)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                    <Sparkles size={18} />
                  </div>
                  <span className="font-heading font-bold text-base text-[var(--text)]">
                    AI Academy
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close drawer"
                  className="p-2 rounded-xl text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)] focus-ring"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-[var(--muted)] text-sm">→</span>
                  </a>
                ))}
                <Link
                  to="/admin/leads"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[var(--primary)] bg-[var(--primary-tint)]/40 hover:bg-[var(--primary-tint)] transition-colors mt-2"
                >
                  <span>Admin Leads Dashboard</span>
                  <span className="text-[var(--primary)] text-sm">→</span>
                </Link>
              </div>

              {/* Action Buttons in Drawer */}
              <div className="pt-2 space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={handleRegisterClick}
                  rightIcon={<ArrowRight size={16} />}
                >
                  Register Now
                </Button>
                <Button
                  variant="secondary"
                  fullWidth
                  size="md"
                  onClick={handleDemoClick}
                  leftIcon={<PhoneCall size={16} />}
                >
                  Book Free Demo
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sticky Bottom CTA Bar on Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--surface)]/95 backdrop-blur-md border-t border-[var(--border)] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 text-xs sm:text-sm font-medium h-10 rounded-xl"
            onClick={handleDemoClick}
          >
            Book Free Demo
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-1 text-xs sm:text-sm font-semibold h-10 rounded-xl"
            onClick={handleRegisterClick}
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  )
}
