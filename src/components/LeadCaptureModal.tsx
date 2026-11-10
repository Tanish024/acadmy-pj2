import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  User,
  Building2,
  MessageCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { saveLead, type LeadRecord } from '@/lib/leads'

export interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  type?: 'register' | 'demo'
  sourceCTA?: string
  initialProgramme?: string
  onLeadSaved?: (lead: LeadRecord) => void
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  type = 'register',
  sourceCTA = 'Landing Page CTA',
  initialProgramme = 'AI for Students',
  onLeadSaved,
}) => {
  // Step state (1 or 2 or 3 for success)
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Step 1 Fields
  const [fullName, setFullName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')

  // Step 2 Fields
  const [currentStatus, setCurrentStatus] = useState<'student' | 'professional' | 'freelancer'>('student')
  const [organization, setOrganization] = useState('')
  const [programme, setProgramme] = useState(initialProgramme)
  const [preferredBatch, setPreferredBatch] = useState('Nov 24, 2026')
  const [referralSource, setReferralSource] = useState('LinkedIn')
  const [consent, setConsent] = useState(true)

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Validation functions
  const validateFullName = (val: string) => {
    if (!val.trim()) return 'Full name is required'
    if (val.trim().length < 2) return 'Please enter at least 2 characters'
    return ''
  }

  const validateWhatsapp = (val: string) => {
    const clean = val.replace(/\D/g, '')
    if (!clean) return 'WhatsApp number is required'
    if (clean.length !== 10) return 'Please enter a valid 10-digit number (e.g. 9876543210)'
    if (!/^[6-9]\d{9}$/.test(clean)) return 'Must begin with 6, 7, 8, or 9'
    return ''
  }

  const validateEmail = (val: string) => {
    if (!val.trim()) return 'Email address is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(val.trim())) return 'Please enter a valid email address (e.g. name@domain.com)'
    return ''
  }

  const validateOrganization = (val: string) => {
    if (!val.trim()) return 'Please enter your college or company'
    return ''
  }

  // Check Step 1 validity
  const isStep1Valid =
    !validateFullName(fullName) &&
    !validateWhatsapp(whatsapp) &&
    !validateEmail(email) &&
    fullName.trim().length > 0 &&
    whatsapp.replace(/\D/g, '').length === 10 &&
    email.trim().length > 0

  // Check Step 2 validity
  const isStep2Valid =
    !validateOrganization(organization) &&
    organization.trim().length > 0 &&
    Boolean(programme) &&
    Boolean(preferredBatch) &&
    consent

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ fullName: true, whatsapp: true, email: true })

    const errName = validateFullName(fullName)
    const errWhatsapp = validateWhatsapp(whatsapp)
    const errEmail = validateEmail(email)

    if (errName || errWhatsapp || errEmail) {
      setErrors({
        fullName: errName,
        whatsapp: errWhatsapp,
        email: errEmail,
      })
      return
    }

    setErrors({})
    setStep(2)
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched((prev) => ({ ...prev, organization: true }))

    const errOrg = validateOrganization(organization)
    if (errOrg || !consent) {
      setErrors((prev) => ({
        ...prev,
        organization: errOrg,
        consent: !consent ? 'Please consent to receive admission updates' : '',
      }))
      return
    }

    setIsSubmitting(true)

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 600))

    const newRecord = saveLead({
      fullName: fullName.trim(),
      whatsapp: whatsapp.replace(/\D/g, ''),
      email: email.trim().toLowerCase(),
      currentStatus,
      organization: organization.trim(),
      programme,
      preferredBatch,
      referralSource,
      sourceCTA,
      status: type === 'demo' ? 'Call Scheduled' : 'New',
    })

    if (onLeadSaved) {
      onLeadSaved(newRecord)
    }

    setIsSubmitting(false)
    setStep(3)
  }

  const handleResetAndClose = () => {
    setStep(1)
    setFullName('')
    setWhatsapp('')
    setEmail('')
    setOrganization('')
    setErrors({})
    setTouched({})
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      maxWidth="md"
      title={
        step === 3
          ? "You're in!"
          : type === 'demo'
          ? 'Book a Free 1-on-1 AI Demo'
          : 'Reserve Your Cohort Seat'
      }
      description={
        step === 3
          ? "We'll WhatsApp you within 24 hours."
          : `Step ${step} of 2 • Cohort Admissions`
      }
    >
      <div className="space-y-6">
        {/* Progress Bar (Visible during Steps 1 & 2) */}
        {step !== 3 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className={step >= 1 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}>
                1. Contact Details
              </span>
              <span className={step >= 2 ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}>
                2. Track & Background
              </span>
            </div>
            <div className="w-full bg-[var(--surface-hover)] h-1.5 rounded-full overflow-hidden border border-[var(--border)]">
              <motion.div
                className="h-full bg-[var(--primary)] rounded-full"
                initial={{ width: '50%' }}
                animate={{ width: step === 1 ? '50%' : '100%' }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Full name, WhatsApp, Email */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-4">
            <div className="space-y-1">
              <Input
                label="Full Name"
                placeholder="e.g. Aarav Mehta"
                value={fullName}
                leftIcon={<User size={16} />}
                onChange={(e) => {
                  setFullName(e.target.value)
                  if (touched.fullName) {
                    setErrors((prev) => ({ ...prev, fullName: validateFullName(e.target.value) }))
                  }
                }}
                onBlur={() => {
                  setTouched((prev) => ({ ...prev, fullName: true }))
                  setErrors((prev) => ({ ...prev, fullName: validateFullName(fullName) }))
                }}
                error={touched.fullName ? errors.fullName : undefined}
                required
              />
            </div>

            <div className="space-y-1">
              <Input
                label="WhatsApp Number (10 digits)"
                placeholder="e.g. 9876543210"
                type="tel"
                value={whatsapp}
                leftIcon={<Phone size={16} />}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 10)
                  setWhatsapp(val)
                  if (touched.whatsapp) {
                    setErrors((prev) => ({ ...prev, whatsapp: validateWhatsapp(val) }))
                  }
                }}
                onBlur={() => {
                  setTouched((prev) => ({ ...prev, whatsapp: true }))
                  setErrors((prev) => ({ ...prev, whatsapp: validateWhatsapp(whatsapp) }))
                }}
                helperText="We'll send your cohort onboarding link here"
                error={touched.whatsapp ? errors.whatsapp : undefined}
                required
              />
            </div>

            <div className="space-y-1">
              <Input
                label="Email Address"
                placeholder="e.g. aarav@example.com"
                type="email"
                value={email}
                leftIcon={<Mail size={16} />}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (touched.email) {
                    setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }))
                  }
                }}
                onBlur={() => {
                  setTouched((prev) => ({ ...prev, email: true }))
                  setErrors((prev) => ({ ...prev, email: validateEmail(email) }))
                }}
                error={touched.email ? errors.email : undefined}
                required
              />
            </div>

            <div className="pt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={!isStep1Valid}
                rightIcon={<ArrowRight size={18} />}
              >
                Continue to Track Selection
              </Button>
            </div>
          </form>
        )}

        {/* STEP 2: Current status, College/Company, Programme, Batch, Referral, Consent */}
        {step === 2 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4 text-left">
            {/* Status Radio Pills */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Current Profile
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['student', 'professional', 'freelancer'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setCurrentStatus(st)}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium capitalize transition-all focus-ring text-center ${
                      currentStatus === st
                        ? 'bg-[var(--primary-tint)] border-[var(--primary)] text-[var(--primary)] font-semibold shadow-xs'
                        : 'bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)]'
                    }`}
                  >
                    {st === 'student' ? 'Student' : st === 'professional' ? 'Professional' : 'Freelancer'}
                  </button>
                ))}
              </div>
            </div>

            {/* College or Company Input */}
            <Input
              label={currentStatus === 'student' ? 'College / University & Year' : 'Company & Current Role'}
              placeholder={currentStatus === 'student' ? 'e.g. IIT Delhi, 3rd Year' : 'e.g. Razorpay, Product Analyst'}
              value={organization}
              leftIcon={<Building2 size={16} />}
              onChange={(e) => {
                setOrganization(e.target.value)
                if (touched.organization) {
                  setErrors((prev) => ({ ...prev, organization: validateOrganization(e.target.value) }))
                }
              }}
              onBlur={() => {
                setTouched((prev) => ({ ...prev, organization: true }))
                setErrors((prev) => ({ ...prev, organization: validateOrganization(organization) }))
              }}
              error={touched.organization ? errors.organization : undefined}
              required
            />

            {/* Programme Selection */}
            <Select
              label="Programme of Interest"
              value={programme}
              onChange={(e) => setProgramme(e.target.value)}
              options={[
                { value: 'AI for Students', label: 'AI for Students (6 Weeks • Beginner to Inter.)' },
                { value: 'AI for Working Professionals', label: 'AI for Working Professionals (6 Weeks • Intermediate)' },
                { value: 'No-Code Automation', label: 'No-Code Automation (6 Weeks • n8n, Make, APIs)' },
                { value: 'AI Content Creation', label: 'AI Content Creation (6 Weeks • Multimodal, Canva, Midjourney)' },
              ]}
            />

            {/* Preferred Batch */}
            <Select
              label="Preferred Batch"
              value={preferredBatch}
              onChange={(e) => setPreferredBatch(e.target.value)}
              options={[
                { value: 'Nov 24, 2026', label: 'Nov 24, 2026 (7 seats left)' },
                { value: 'Dec 15, 2026', label: 'Dec 15, 2026 (18 seats left)' },
                { value: 'Jan 12, 2027', label: 'Jan 12, 2027 (Early Bird Open)' },
              ]}
            />

            {/* Referral Source */}
            <Select
              label="How did you hear about us?"
              value={referralSource}
              onChange={(e) => setReferralSource(e.target.value)}
              options={[
                { value: 'LinkedIn', label: 'LinkedIn' },
                { value: 'Twitter/X', label: 'Twitter/X' },
                { value: 'Instagram', label: 'Instagram' },
                { value: 'Friend/Colleague', label: 'Friend or Colleague recommendation' },
                { value: 'Google Search', label: 'Google Search' },
                { value: 'Other', label: 'Other' },
              ]}
            />

            {/* Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer"
                />
                <span className="text-xs text-[var(--muted)] leading-relaxed">
                  I consent to receive cohort admission details, syllabus updates, and 1-on-1 advisor counselling via WhatsApp and email.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-500 font-medium pt-1">{errors.consent}</p>
              )}
            </div>

            {/* Actions: Back & Submit with loading state */}
            <div className="pt-3 flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={() => setStep(1)}
                leftIcon={<ArrowLeft size={16} />}
                className="w-1/3"
                disabled={isSubmitting}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="flex-1 font-semibold"
                disabled={!isStep2Valid || isSubmitting}
                rightIcon={
                  isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <CheckCircle2 size={18} />
                  )
                }
              >
                {isSubmitting
                  ? 'Submitting Application...'
                  : type === 'demo'
                  ? 'Confirm Free Demo'
                  : 'Submit Registration'}
              </Button>
            </div>
          </form>
        )}

        {/* STEP 3: Success Screen */}
        {step === 3 && (
          <div className="py-2 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-[var(--success-tint)] text-[var(--success)] flex items-center justify-center border border-[var(--success)]/20 shadow-xs">
              <CheckCircle2 size={36} strokeWidth={2.2} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold font-heading text-[var(--text)]">
                You're in! We'll WhatsApp you within 24 hours.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] max-w-sm mx-auto leading-relaxed">
                Your application for <span className="font-semibold text-[var(--text)]">{programme}</span> ({preferredBatch}) has been recorded.
              </p>
            </div>

            {/* 3 Next Steps */}
            <div className="bg-[var(--surface-hover)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 text-left space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--muted)] block">
                Next Steps for Your Cohort:
              </span>

              <div className="space-y-3 text-xs">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary-tint)] text-[var(--primary)] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-[var(--text)]">
                      Instant Confirmation Message
                    </h5>
                    <p className="text-[var(--muted)] text-[11px] leading-relaxed">
                      Syllabus PDF and cohort schedule dispatched to +91 {whatsapp} & {email}.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary-tint)] text-[var(--primary)] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-[var(--text)]">
                      10-Minute Counselling Call
                    </h5>
                    <p className="text-[var(--muted)] text-[11px] leading-relaxed">
                      An AI advisor will verify your project goals and lock your seat for the batch.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary-tint)] text-[var(--primary)] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-[var(--text)]">
                      Batch Onboarding & Access
                    </h5>
                    <p className="text-[var(--muted)] text-[11px] leading-relaxed">
                      Receive your private Discord community invite, starter repos, and sandbox keys.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Community CTA button */}
            <div className="space-y-3 pt-1">
              <a
                href="https://chat.whatsapp.com/sample-ai-academy-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20BE5A] text-white font-semibold text-sm transition-all shadow-[0_2px_8px_rgba(37,211,102,0.25)] focus-ring"
              >
                <MessageCircle size={18} />
                <span>Join WhatsApp Community</span>
                <ExternalLink size={14} className="opacity-80" />
              </a>

              <Button
                variant="ghost"
                fullWidth
                size="md"
                onClick={handleResetAndClose}
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
