"use client";

import { Button } from "@/components/button";
import { useId } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type FaqItemProps = {
  index: string;
  question: string;
  answer: string;
  ctaLabel?: string;
  open: boolean;
  onToggle: () => void;
};

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function FaqItem({
  index,
  question,
  answer,
  ctaLabel,
  open,
  onToggle,
}: FaqItemProps) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <article
      className={classNames(
        "overflow-hidden rounded-sm border border-gray-200 transition-colors duration-300 ease-out",
        open ? "bg-cyan-100" : "bg-gray-0",
      )}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-start gap-3 px-[clamp(1rem,1.11vw,1.25rem)] py-[clamp(1rem,1.11vw,1.25rem)] text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-700 lg:gap-4 lg:px-[clamp(1.25rem,1.39vw,1.5rem)] lg:py-[clamp(1.25rem,1.39vw,1.5rem)]"
        >
          <span
            aria-hidden
            className="shrink-0 pt-0.5 text-3 leading-5 font-bold tracking-0 text-cyan-900 lg:text-4 lg:leading-4"
          >
            {index}
          </span>

          <span className="min-w-0 flex-1 pt-0.5 text-1 leading-14 font-semibold tracking-1 text-cyan-900 uppercase lg:text-2 lg:leading-6">
            {question}
          </span>

          <span
            aria-hidden
            className="relative mt-0.5 flex size-6 shrink-0 items-center justify-center text-cyan-600"
          >
            <LuPlus
              className={classNames(
                "absolute size-5 transition-all duration-300 ease-out",
                open ? "scale-75 opacity-0" : "scale-100 opacity-100",
              )}
            />
            <LuMinus
              className={classNames(
                "absolute size-5 transition-all duration-300 ease-out",
                open ? "scale-100 opacity-100" : "scale-75 opacity-0",
              )}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className={classNames(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="flex flex-col overflow-hidden">
          <p className="-mt-1 px-[clamp(1rem,1.11vw,1.25rem)] pb-[clamp(1rem,1.11vw,1.25rem)] pl-[calc(clamp(1rem,1.11vw,1.25rem)+2.25rem)] text-1 leading-14 font-normal tracking-2 text-gray-700 lg:-mt-2 lg:px-[clamp(1.25rem,1.39vw,1.5rem)] lg:pb-[clamp(1.25rem,1.39vw,1.5rem)] lg:pl-[calc(clamp(1.25rem,1.39vw,1.5rem)+2.75rem)] lg:text-2 lg:leading-6">
            {answer}
          </p>
          {ctaLabel && (
            <div className="w-fit px-[clamp(1rem,1.11vw,1.25rem)] pb-[clamp(1rem,1.11vw,1.25rem)] pl-[calc(clamp(1rem,1.11vw,1.25rem)+2.25rem)] lg:px-[clamp(1.25rem,1.39vw,1.5rem)] lg:pb-[clamp(1.25rem,1.39vw,1.5rem)] lg:pl-[calc(clamp(1.25rem,1.39vw,1.5rem)+2.75rem)]">
              <Button
                href="https://wa.me/5511976130335"
                size="lg"
                tone="secondary"
                className="max-xl:h-[46px]! max-xl:gap-1! max-xl:px-2! text-0.25 max-xl:text-0.5"
              >
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
