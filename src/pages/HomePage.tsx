import React, { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/sections/Hero'
import { TrustStrip } from '@/sections/TrustStrip'
import { ProblemOutcome } from '@/sections/ProblemOutcome'
import { WhoItsFor } from '@/sections/WhoItsFor'
import { Programmes } from '@/sections/Programmes'
import { Curriculum } from '@/sections/Curriculum'
import { Projects } from '@/sections/Projects'
import { HowLearningWorks } from '@/sections/HowLearningWorks'
import { Instructor } from '@/sections/Instructor'
import { Testimonials } from '@/sections/Testimonials'
import { Pricing } from '@/sections/Pricing'
import { FAQ } from '@/sections/FAQ'
import { FinalCTA } from '@/sections/FinalCTA'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'
import { type Programme, type PricingPlan } from '@/data/content'

export const HomePage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'register' | 'demo'>('register')
  const [modalSourceCTA, setModalSourceCTA] = useState('Landing Page CTA')
  const [modalProgramme, setModalProgramme] = useState('AI for Students')
  const [selectedCurriculumTrack, setSelectedCurriculumTrack] = useState('students')

  const openRegister = (source = 'Register Now CTA', prog = 'AI for Students') => {
    setModalType('register')
    setModalSourceCTA(source)
    setModalProgramme(prog)
    setModalOpen(true)
  }

  const openDemo = (source = 'Book Free Demo CTA') => {
    setModalType('demo')
    setModalSourceCTA(source)
    setModalOpen(true)
  }

  const handleSelectProgramme = (progId: string) => {
    setSelectedCurriculumTrack(progId)
    const element = document.getElementById('curriculum')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEnrollProgramme = (prog: Programme) => {
    openRegister(`Programmes Card: ${prog.title}`, prog.title)
  }

  const handleSelectPlan = (plan: PricingPlan) => {
    openRegister(`Pricing Plan: ${plan.name}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text)] transition-colors duration-200">
      {/* Sticky Navbar with Blur, Theme Toggle, and Mobile Drawer */}
      <Navbar
        onOpenRegister={() => openRegister('Navbar Register Now')}
        onOpenDemo={() => openDemo('Navbar Book Free Demo')}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 sm:pb-24">
        {/* Hero Section */}
        <Hero
          onRegisterClick={() => openRegister('Hero Register Now')}
          onDemoClick={() => openDemo('Hero Book Free Demo')}
        />

        {/* Trust Strip ("Tools you will master" chips) */}
        <TrustStrip />

        {/* 1. Problem and Outcome */}
        <ProblemOutcome />

        {/* 2. Who It's For (Students, Freshers, Working Professionals, Freelancers - one line each) */}
        <WhoItsFor />

        {/* 3. Programmes (4 cards with level, duration, pricing, and view details) */}
        <Programmes
          onSelectProgramme={handleSelectProgramme}
          onEnroll={handleEnrollProgramme}
        />

        {/* 4. Curriculum (Tabs per programme + Week-by-week accordion 1-6 with mini projects) */}
        <Curriculum initialTrack={selectedCurriculumTrack} />

        {/* 5. Projects You Will Build (4 Portfolio-style Cards) */}
        <Projects />

        {/* 6. How Learning Works (4 Steps: Learn, Practice, Build, Get feedback) */}
        <HowLearningWorks
          onRegisterClick={() => openRegister('How Learning Works CTA')}
        />

        {/* 7. Instructor / Credibility (Clean profile placeholder card + 3 credibility points) */}
        <Instructor />

        {/* 8. Testimonials (3 cards with name, role, quote, no fake logos) */}
        <Testimonials />

        {/* 9. Batches and Pricing (3 plans, upcoming batch dates, limited seats line, recommended plan with peach CTA) */}
        <Pricing
          onRegisterClick={() => openRegister('Pricing Recommended: Live Cohort')}
          onSelectPlan={handleSelectPlan}
        />

        {/* 10. FAQ Accordion (8 real questions) */}
        <FAQ />

        {/* 11. Final CTA Band ("Start your AI journey this month." with peach Register Now + secondary Book Free Demo) */}
        <FinalCTA
          onRegisterClick={() => openRegister('Final CTA Register Now')}
          onDemoClick={() => openDemo('Final CTA Book Free Demo')}
        />
      </main>

      {/* Footer (Links, contact, WhatsApp quick link, social icons) */}
      <Footer />

      {/* Interactive 2-Step Registration / Free Demo Modal */}
      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        sourceCTA={modalSourceCTA}
        initialProgramme={modalProgramme}
      />
    </div>
  )
}
