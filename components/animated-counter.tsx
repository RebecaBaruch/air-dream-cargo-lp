"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type AnimatedCounterProps = {
  start: boolean;
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
};

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function AnimatedCounter({
  start,
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  delay = 0,
}: AnimatedCounterProps) {
  const formatted = `${prefix}${value}${suffix}`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animatedDisplay, setAnimatedDisplay] = useState(0);
  const runIdRef = useRef(0);

  const display =
    !start ? 0 : prefersReducedMotion ? value : animatedDisplay;

  useEffect(() => {
    if (!start || prefersReducedMotion) {
      return;
    }

    const runId = ++runIdRef.current;
    let cancelled = false;
    let frame = 0;
    let timeout = 0;

    const begin = () => {
      if (cancelled || runId !== runIdRef.current) {
        return;
      }

      let animationStart: number | null = null;

      const tick = (now: number) => {
        if (cancelled || runId !== runIdRef.current) {
          return;
        }

        if (animationStart === null) {
          animationStart = now;
        }

        const progress = Math.min((now - animationStart) / duration, 1);
        setAnimatedDisplay(Math.round(easeOutCubic(progress) * value));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      setAnimatedDisplay(0);
      frame = requestAnimationFrame(tick);
    };

    timeout = window.setTimeout(begin, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [start, value, duration, delay, prefersReducedMotion]);

  return (
    <span className="relative inline-flex tabular-nums">
      <span className="invisible" aria-hidden>
        {formatted}
      </span>
      <span className="absolute inset-0" aria-hidden>
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">{formatted}</span>
    </span>
  );
}
