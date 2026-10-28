'use client'

import { useState } from 'react'
import { FaqItem } from '@/components/faq-item'
import { useLanguage } from '@/components/language-provider'

const itemGapClass = 'gap-[clamp(0.75rem,1.11vw,1rem)]'

export function FaqSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="below-fold bg-gray-0 px-4 py-16 lg:px-[4.44%] lg:py-[clamp(4rem,5.56vw,5rem)]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-x-[clamp(1.5rem,4.17vw,3.75rem)] lg:gap-y-0">
        <div className="flex flex-col gap-4 lg:gap-5">
          <p className="flex items-center gap-2 text-1 leading-14 font-semibold text-gray-900 lg:text-2 lg:leading-6">
            <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
            {t.faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="font-bold tracking-0 text-cyan-900 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.2] lg:text-[clamp(1.875rem,2.78vw,2.625rem)] lg:leading-[1.15]"
          >
            {t.faq.heading}
          </h2>
        </div>

        <div className={`flex flex-col ${itemGapClass}`}>
          {t.faq.items.map((item, index) => (
            <FaqItem
              key={`faq-${index}`}
              index={String(index + 1).padStart(2, '0')}
              question={item.question}
              answer={item.answer}
              ctaLabel={item.cta ? t.faq.ctaLabel : undefined}
              open={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
