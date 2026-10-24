"use client";

import { LuFileCheck, LuGlobe, LuHandshake } from "react-icons/lu";
import { useLanguage } from "@/components/language-provider";
import { ServiceCard } from "@/components/service-card";

const serviceIcons = [LuGlobe, LuHandshake, LuFileCheck] as const;

const mediaGapClass = "gap-[clamp(0.5rem,0.56vw,0.75rem)]";
const cardGapClass = "gap-[clamp(0.75rem,0.83vw,1rem)]";

function ServicesMediaGrid({ className }: { className?: string }) {
  return (
    <div
      className={`flex min-h-0 flex-col ${mediaGapClass} lg:col-start-2 lg:row-start-2 ${className ?? ""}`}
    >
      <div className="relative aspect-[883/307] w-full shrink-0 overflow-hidden rounded-sm">
        <img
          src="/images/shipping-01.webp"
          alt=""
          width={883}
          height={307}
          decoding="async"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className={`grid min-h-0 flex-1 grid-cols-2 ${mediaGapClass}`}>
        <div className="relative aspect-[430/307] min-h-0 overflow-hidden rounded-sm lg:aspect-auto lg:h-full">
          <img
            src="/images/shipping-02.webp"
            alt=""
            width={430}
            height={307}
            decoding="async"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative aspect-[430/307] min-h-0 overflow-hidden rounded-sm lg:aspect-auto lg:h-full">
          <img
            src="/images/shipping-03.webp"
            alt=""
            width={430}
            height={307}
            decoding="async"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="bg-gray-0 px-4 py-16 lg:px-[4.44%] lg:py-[clamp(4rem,5.56vw,5rem)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[38.75fr_61.25fr] lg:grid-rows-[auto_minmax(0,auto)] lg:items-scratch lg:gap-x-[clamp(1.5rem,4.17vw,3.75rem)] lg:gap-y-[clamp(1.5rem,2.22vw,2.5rem)]">
        <p className="flex items-start text-1 leading-14 font-semibold text-gray-900 lg:col-start-1 lg:row-start-1 lg:text-2 lg:leading-6">
          <div className="flex items-center gap-2">
            <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
            {t.services.eyebrow}
          </div>
        </p>

        <h2
          id="services-heading"
          className="font-bold tracking-0 text-cyan-900 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.25] lg:col-start-2 lg:row-start-1 lg:text-[clamp(1.75rem,2.22vw,2.25rem)] lg:leading-[1.15]"
        >
          {t.services.heading}
        </h2>

        <ServicesMediaGrid />

        <div
          className={`-mx-4 flex overflow-x-auto px-4 pb-1 ${cardGapClass} [-ms-overflow-style:none] [scrollbar-width:none] lg:col-start-1 lg:row-start-2 lg:mx-0 lg:min-h-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden`}
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? LuGlobe;
            return (
              <ServiceCard
                key={service.title}
                icon={Icon}
                title={service.title}
                description={service.description}
                className="w-[min(85vw,20rem)] shrink-0 snap-start lg:w-full lg:min-h-0 lg:flex-1 lg:shrink"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
