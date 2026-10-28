"use client";

import {
  useCallback,
  useLayoutEffect,
  useState,
  type AnimationEvent,
  type CSSProperties,
} from "react";
import { AnimatedCounter } from "@/components/animated-counter";
import { BreakpointImage } from "@/components/breakpoint-image";
import { Button } from "@/components/button";
import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

function revealDelay(ms: number): CSSProperties {
  return { ["--reveal-delay"]: `${ms}ms` } as CSSProperties;
}

type HeroStatId = "countries" | "support" | "punctuality";

export function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [revealReady, setRevealReady] = useState(false);
  const [counterStarted, setCounterStarted] = useState<
    Partial<Record<HeroStatId, boolean>>
  >({});

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => setRevealReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const revealClass = revealReady ? "reveal-up" : "reveal-up-from";

  const handleStatRevealStart = useCallback((statId: HeroStatId, event: AnimationEvent) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    if (event.animationName !== "fade-up") {
      return;
    }

    setCounterStarted((current) =>
      current[statId] ? current : { ...current, [statId]: true },
    );
  }, []);

  const stats = [
    { id: "countries", label: t.hero.statCountries, value: 80, prefix: "+", suffix: "" },
    { id: "support", label: t.hero.statSupport, value: 24, prefix: "", suffix: "/7" },
    { id: "punctuality", label: t.hero.statPunctuality, value: 99, prefix: "", suffix: "%" },
  ] as const;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative bg-gray-0"
    >
      <div className="relative w-full lg:aspect-[1440/700] lg:h-fit">
        <BreakpointImage
          src="/images/hero-image-desktop-hq.webp"
          avif="/images/hero-image-desktop.avif"
          media="(min-width: 1024px)"
          alt=""
          width={1440}
          height={700}
          priority
          className="hidden h-auto w-full object-cover lg:block lg:h-full"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-[6.75rem] px-4 pt-6 pb-16 lg:absolute lg:inset-0 lg:gap-0 lg:px-[4.44%] 2xl:px-0 lg:py-[3.33%]">
        <Navbar />

        <div className="flex flex-col gap-16 lg:w-[min(36rem,40vw)] lg:flex-1 lg:gap-16 lg:pt-[clamp(4rem,6.94vw,6.25rem)] lg:pb-0 2xl:mt-16 2xl:gap-32">
          <div className="flex max-w-full flex-col gap-8">
            <div className="flex flex-col gap-3 lg:gap-2">
              <p
                className={`${revealClass} flex items-center gap-2 text-1 leading-14 font-semibold text-gray-900 lg:text-2 lg:leading-6`}
                style={revealDelay(80)}
              >
                <span aria-hidden className="size-2 shrink-0 bg-gray-900" />
                {t.hero.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className={`${revealClass} max-w-full font-bold tracking-0 text-gray-900 text-[clamp(1.875rem,10.8vw,2.625rem)] leading-[1.24] lg:text-[clamp(2rem,3.2vw,3.375rem)] lg:leading-[1.185] lg:text-cyan-900`}
                style={revealDelay(200)}
              >
                <span className="lg:hidden">
                  {t.hero.titleMobileLine1}{" "}
                  <span className="text-cyan-600">
                    {t.hero.titleMobileHighlight}
                  </span>
                </span>
                <span className="hidden lg:inline">
                  {t.hero.titleDesktopBefore}{" "}
                  <span className="text-cyan-600">
                    {t.hero.titleDesktopHighlight}
                  </span>
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 xl:gap-4">
              <Button
                href="https://wa.me/5511976130335"
                size="lg"
                className={`${revealClass} max-xl:h-[46px]! max-xl:gap-1! max-xl:px-2! max-xl:text-1! max-xl:leading-6!`}
                style={revealDelay(340)}
              >
                {t.hero.ctaQuote}
              </Button>
              <Button
                href="#servicos"
                size="lg"
                variant="outline"
                tone="secondary"
                className={`${revealClass} max-xl:h-[46px]! max-xl:gap-1! max-xl:px-2! max-xl:text-1! max-xl:leading-6!`}
                style={revealDelay(420)}
              >
                {t.hero.ctaServices}
              </Button>
            </div>
          </div>

          <dl className="flex w-full max-w-[543px] items-start justify-between gap-3">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`${revealClass} flex min-w-0 flex-col gap-1.5`}
                style={revealDelay(560 + index * 90)}
                onAnimationStart={(event) => handleStatRevealStart(stat.id, event)}
              >
                <dt className="text-1 leading-4 font-semibold whitespace-nowrap text-gray-700 lg:text-[clamp(1.2rem,1.2vw,1.125rem)] lg:leading-6">
                  {stat.label}
                </dt>
                <dd className="text-6 leading-2 font-medium tracking-1 whitespace-nowrap text-cyan-900 lg:text-[clamp(2rem,2.7vw,2.625rem)] lg:leading-none lg:font-semibold">
                  <AnimatedCounter
                    start={
                      Boolean(counterStarted[stat.id]) ||
                      (revealReady && prefersReducedMotion)
                    }
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div>
        <BreakpointImage
          src="/images/hero-image-mobile.webp"
          avif="/images/hero-image-mobile.avif"
          media="(max-width: 1023px)"
          alt=""
          width={390}
          height={423}
          priority
          className="relative z-0 -mt-[40%] h-auto w-full lg:hidden"
        />
      </div>
    </section>
  );
}
