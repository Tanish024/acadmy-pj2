import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] pt-14 pb-12 transition-colors duration-200">
      <Container size="lg">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border)]/60 text-left">
          {/* Brand & Mission (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[var(--primary-tint)] border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                <Sparkles size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-[var(--text)] leading-none">
                  AI Academy
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[var(--muted)] mt-1">
                  Practical AI Systems
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-sm">
              An applied AI learning institute for ambitious students, operators, and builders. Master autonomous agents, multimodal systems, and modern workflows.
            </p>

            {/* Quick WhatsApp Support Trigger */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20AI%20Academy%2C%20I%20have%20a%20question%20about%20the%20upcoming%20cohort"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--surface-hover)] hover:bg-[var(--success-tint)] border border-[var(--border)] hover:border-[var(--success)]/40 text-[var(--text)] hover:text-[#2C7A50] dark:hover:text-[var(--success)] text-xs font-medium transition-all duration-200 focus-ring"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Chat with Admissions on WhatsApp</span>
                <ArrowUpRight size={13} className="text-[var(--muted)]" />
              </a>
            </div>
          </div>

          {/* Column 1: Programmes */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] font-heading">
              Programmes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#curriculum" className="hover:text-[var(--text)] transition-colors">
                  AI for Students
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[var(--text)] transition-colors">
                  AI for Professionals
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[var(--text)] transition-colors">
                  No-Code Automation
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-[var(--text)] transition-colors">
                  AI Content Creation
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[var(--primary)] hover:underline">
                  Cohort Pricing & Dates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] font-heading">
              Academy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#programmes" className="hover:text-[var(--text)] transition-colors">
                  Specializations
                </a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-[var(--text)] transition-colors">
                  Student Capstones
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--text)] transition-colors">
                  FAQ & Policies
                </a>
              </li>
              <li>
                <Link to="/admin/leads" className="text-[var(--primary)] hover:underline flex items-center gap-1">
                  <span>Admissions Portal</span>
                  <span className="text-[10px] bg-[var(--primary-tint)] px-1.5 py-0.2 rounded-full font-mono">
                    Admin
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--primary)] shrink-0" />
                <a
                  href="mailto:admissions@aiacademy.edu"
                  className="hover:text-[var(--text)] transition-colors"
                >
                  admissions@aiacademy.edu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--primary)] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[var(--text)] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                <span>Bengaluru, India (Live Global Cohorts)</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] block mb-2">
                Follow Updates:
              </span>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow AI Academy on X / Twitter"
                  className="w-8 h-8 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center hover:text-[var(--text)] hover:border-[var(--primary)] transition-colors focus-ring"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with AI Academy on LinkedIn"
                  className="w-8 h-8 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center hover:text-[var(--text)] hover:border-[var(--primary)] transition-colors focus-ring"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore AI Academy repositories on GitHub"
                  className="w-8 h-8 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center hover:text-[var(--text)] hover:border-[var(--primary)] transition-colors focus-ring"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch AI Academy tutorials on YouTube"
                  className="w-8 h-8 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] flex items-center justify-center hover:text-[var(--text)] hover:border-[var(--primary)] transition-colors focus-ring"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and required Prototype Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <span>© 2026 AI Academy. All rights reserved.</span>
            <span className="hidden sm:inline-block text-[var(--border)]">•</span>
            <span className="font-medium text-[var(--primary)]">
              Prototype built for assignment purposes
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-[var(--text)] transition-colors">
              Terms & Conditions
            </a>
            <a href="#faq" className="hover:text-[var(--text)] transition-colors">
              Privacy Policy
            </a>
            <a href="#faq" className="hover:text-[var(--text)] transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
