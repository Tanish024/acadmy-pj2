import React from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion, type AccordionItemData } from '@/components/ui/Accordion'
import { FAQ_QUESTIONS } from '@/data/content'

export const FAQ: React.FC = () => {
  const accordionItems: AccordionItemData[] = FAQ_QUESTIONS.map((faq) => ({
    id: faq.id,
    title: faq.title,
    content: <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed pt-1">{faq.content}</p>,
  }))

  return (
    <section id="faq" className="py-12 sm:py-20 border-b border-[var(--border)] transition-colors duration-200">
      <Container size="md">
        {/* Section Heading */}
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything you need to know"
          subtitle="Honest, comprehensive answers regarding prerequisites, schedule flexibility, refunds, and career outcomes."
        />

        {/* 8 Real Questions Accordion */}
        <div className="mt-10 sm:mt-14">
          <Accordion
            items={accordionItems}
            defaultOpenId="faq-prerequisites"
            allowMultiple={false}
          />
        </div>
      </Container>
    </section>
  )
}
