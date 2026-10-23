'use client'

import { BsArrowRightShort } from 'react-icons/bs'
import { Button } from '@/components/button'
import { useLanguage } from '@/components/language-provider'

function AboutImage({ className }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[578/342] w-full overflow-hidden rounded-sm ${className ?? ''}`}
    >
      <img
        src="/workers.svg"
        alt=""
        width={578}
        height={342}
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="quem-somos"
      aria-labelledby="about-heading"
      className="bg-cyan-100 px-4 py-16 lg:px-[4.44%] lg:py-[clamp(4rem,5.56vw,5rem)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,36.125rem)] lg:items-center lg:gap-x-[clamp(1.5rem,4.17vw,3.75rem)] lg:gap-y-0">
        <div className="flex flex-col gap-4 lg:gap-6">
          <p className="flex w-full items-center justify-center gap-2 self-center text-1 leading-14 font-semibold text-gray-900 lg:w-auto lg:justify-start lg:self-auto lg:text-2 lg:leading-6">
            <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
            {t.about.eyebrow}
          </p>

          <h2
            id="about-heading"
            className="text-center font-bold tracking-0 text-cyan-900 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.2] lg:text-left lg:text-[clamp(1.75rem,2.22vw,2.25rem)] lg:leading-[1.15]"
          >
            <span className="lg:hidden">{t.about.headingMobile}</span>
            <span className="hidden lg:inline">{t.about.headingDesktop}</span>
          </h2>

          <AboutImage className="lg:hidden" />

          <div className="flex flex-col items-start gap-3 lg:gap-4">
            <h3 className="text-3 leading-5 font-semibold tracking-0 text-cyan-900 lg:text-4 lg:leading-4">
              {t.about.subheading}
            </h3>
            <p className="text-1 leading-14 font-normal tracking-2 text-gray-700 lg:text-2 lg:leading-6">
              {t.about.body}
            </p>
            <Button
              href="#contato"
              variant="link"
              tone="secondary"
              size="md"
              icon={BsArrowRightShort}
              iconSize={16}
              className="px-0!"
            >
              {t.about.cta}
            </Button>
          </div>
        </div>

        <AboutImage className="hidden lg:block" />
      </div>
    </section>
  )
}
