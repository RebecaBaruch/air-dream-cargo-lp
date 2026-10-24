'use client'

import {
  LuAward,
  LuCompass,
  LuMessageCircle,
  LuShieldCheck,
} from 'react-icons/lu'
import { BreakpointImage } from '@/components/breakpoint-image'
import { useLanguage } from '@/components/language-provider'
import { ServiceCard } from '@/components/service-card'

const cardGapClass = 'gap-[clamp(0.75rem,1.11vw,1rem)]'
const differentiatorIcons = [LuAward, LuShieldCheck, LuMessageCircle, LuCompass] as const

export function DifferentialsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-heading"
      className="bg-gray-0 px-4 py-16 lg:px-0 lg:py-[clamp(4rem,5.56vw,5rem)]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 lg:gap-[clamp(2rem,2.78vw,2.5rem)]">
        <div className="flex w-full flex-col items-center gap-4 text-center lg:gap-5">
          <p className="flex items-center justify-center gap-2 text-1 leading-14 font-semibold text-gray-900 lg:text-2 lg:leading-6">
            <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
            {t.differentials.eyebrow}
          </p>

          <h2
            id="differentials-heading"
            className="font-bold tracking-0 text-cyan-900 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.2] lg:text-center lg:text-[clamp(1.875rem,2.78vw,2.625rem)] lg:leading-[1.15]"
          >
            <span className="lg:hidden">
              <span className="block">{t.differentials.headingMobileLine1}</span>
              <span className="block text-cyan-600">
                {t.differentials.headingMobileLine2}
              </span>
            </span>
            <span className="hidden lg:inline">
              {t.differentials.headingDesktopBefore}{' '}
              <span className="text-cyan-600">
                {t.differentials.headingDesktopHighlight}
              </span>
            </span>
          </h2>

          <p className="max-w-[22rem] text-1 leading-14 font-normal tracking-2 text-gray-700 lg:hidden">
            {t.differentials.introMobile}
          </p>
          <p className="hidden max-w-[40rem] text-2 leading-6 font-normal tracking-2 text-gray-700 lg:block">
            {t.differentials.introDesktop}
          </p>
        </div>

        <div className="relative aspect-[358/425] w-full overflow-hidden rounded-sm lg:hidden">
          <BreakpointImage
            src="/images/airplane-diff.webp"
            media="(max-width: 1023px)"
            alt=""
            width={358}
            height={425}
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col divide-y divide-gray-200 overflow-hidden rounded-sm border border-gray-200 lg:hidden">
          {t.differentials.items.map((item, index) => {
            const Icon = differentiatorIcons[index] ?? LuAward
            return (
              <ServiceCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
                layout="horizontal"
                iconBackground="cyan"
                bordered={false}
                className="w-full rounded-none"
              />
            )
          })}
        </div>

        <div
          className={`hidden w-full lg:grid lg:grid-cols-2 ${cardGapClass}`}
        >
          {t.differentials.items.map((item, index) => {
            const Icon = differentiatorIcons[index] ?? LuAward
            return (
              <ServiceCard
                key={item.title}
                icon={Icon}
                title={item.title}
                description={item.description}
                layout="horizontal"
                iconBackground="cyan"
                className="w-full"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
