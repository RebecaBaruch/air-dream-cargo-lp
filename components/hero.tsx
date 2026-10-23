'use client'

import { Button } from '@/components/button'
import { useLanguage } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { label: t.hero.statCountries, value: '+26' },
    { label: t.hero.statSupport, value: '24/7' },
    { label: t.hero.statPunctuality, value: '99%' },
  ] as const

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative bg-gray-0"
    >
      <img
        src="/hero-image-desktop.svg"
        alt=""
        width={1440}
        height={700}
        className="hidden h-auto w-full lg:block"
      />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-[6.75rem] px-4 pt-6 lg:absolute lg:inset-0 lg:gap-0 lg:px-[4.44%] lg:py-[3.33%]">
        <Navbar />

        <div className="flex flex-col gap-16 lg:w-[min(36rem,40vw)] lg:flex-1 lg:gap-16 lg:pt-[clamp(4rem,6.94vw,6.25rem)] lg:pb-0 2xl:mt-16 2xl:gap-32">
          <div className="flex max-w-full flex-col gap-8">
            <div className="flex flex-col gap-3 lg:gap-2">
              <p className="flex items-center gap-2 text-1 leading-14 font-semibold text-gray-900 lg:text-2 lg:leading-6">
                <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
                {t.hero.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="max-w-full font-bold tracking-0 text-gray-900 text-[clamp(1.875rem,10.8vw,2.625rem)] leading-[1.24] lg:text-[clamp(2.25rem,3.75vw,3.375rem)] lg:leading-[1.185] lg:text-cyan-900"
              >
                <span className="lg:hidden">
                  {t.hero.titleMobileLine1}{' '}
                  <span className="text-cyan-600">{t.hero.titleMobileHighlight}</span>
                </span>
                <span className="hidden lg:inline">
                  {t.hero.titleDesktopBefore}{' '}
                  <span className="text-cyan-600">{t.hero.titleDesktopHighlight}</span>
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 xl:gap-4">
              <Button
                href="#contato"
                size="lg"
                className="max-xl:h-[46px]! max-xl:gap-1! max-xl:px-2! max-xl:text-2! max-xl:leading-6!"
              >
                {t.hero.ctaQuote}
              </Button>
              <Button
                href="#servicos"
                size="lg"
                variant="outline"
                tone="secondary"
                className="max-xl:h-[46px]! max-xl:gap-1! max-xl:px-2! max-xl:text-2! max-xl:leading-6!"
              >
                {t.hero.ctaServices}
              </Button>
            </div>
          </div>

          <dl className="flex w-full max-w-[543px] items-start justify-between gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex min-w-0 flex-col gap-1.5">
                <dt className="text-1 leading-14 font-semibold whitespace-nowrap text-gray-700 lg:text-[clamp(0.875rem,1.25vw,1.125rem)] lg:leading-6">
                  {stat.label}
                </dt>
                <dd className="text-6 leading-3 font-medium tracking-1 whitespace-nowrap text-cyan-900 lg:text-[clamp(1.75rem,2.92vw,2.625rem)] lg:leading-none lg:font-semibold">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <img
        src="/hero-image-mobile.svg"
        alt=""
        width={390}
        height={423}
        className="relative z-0 -mt-[25%] h-auto w-full lg:hidden"
      />
    </section>
  )
}
