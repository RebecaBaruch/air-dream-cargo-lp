'use client'

import { FaWhatsapp } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'
import { Button } from '@/components/button'

const mobileButtonClass =
  'h-[46px]! w-full justify-center gap-2! px-2! text-2! leading-6!'

function ContactEyebrow() {
  return (
    <p className="flex items-center gap-2 text-1 leading-14 font-semibold text-gray-0 lg:text-2 lg:leading-6">
      <span aria-hidden className="size-2 shrink-0 bg-gray-0" />
      ENTRE EM CONTATO
    </p>
  )
}

function ContactHeading() {
  return (
    <h2
      id="contact-heading"
      className="text-left font-bold tracking-0 text-gray-0 text-[clamp(1.75rem,7.2vw,2rem)] leading-[1.2] lg:text-[clamp(1.875rem,2.78vw,2.625rem)] lg:leading-[1.15]"
    >
      Pronto para otimizar a logística aérea da sua empresa?
    </h2>
  )
}

function ContactDescription() {
  return (
    <p className="text-left text-1 leading-14 font-normal tracking-2 text-gray-0 lg:max-w-[28rem] lg:text-2 lg:leading-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum.
    </p>
  )
}

function ContactActions() {
  return (
    <div className="grid w-full grid-cols-2 gap-2 lg:flex lg:w-auto lg:gap-4">
      <Button
        href="https://wa.me/5500000000000"
        size="lg"
        variant="filled"
        tone="secondary"
        icon={FaWhatsapp}
        iconSize={20}
        className={`${mobileButtonClass} lg:h-[56px]! lg:w-auto lg:px-4! lg:text-3! lg:leading-5!`}
      >
        WhatsApp
      </Button>
      <Button
        href="mailto:contato@airdreancargo.com.br"
        size="lg"
        variant="filled"
        tone="primary"
        icon={LuMail}
        iconSize={20}
        className={`${mobileButtonClass} bg-gray-0! text-gray-800! hover:bg-gray-100! lg:h-[56px]! lg:w-auto lg:px-4! lg:text-3! lg:leading-5!`}
      >
        E-mail
      </Button>
    </div>
  )
}

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden bg-gray-100"
    >
      <div className="relative w-full">
        <img
          src="/contact-image-mobile.svg"
          alt=""
          width={390}
          height={590}
          className="block h-auto w-full max-w-full lg:hidden"
        />
        <img
          src="/contact-image-desktop.svg"
          alt=""
          width={1440}
          height={590}
          className="hidden h-auto w-full max-w-full lg:block"
        />

        <div className="absolute inset-0 mx-auto flex max-w-[1440px] flex-col justify-start px-4 pt-[clamp(3rem,12.3vw,4.625rem)] lg:justify-center lg:px-[4.44%] lg:py-[clamp(3rem,5.56vw,5rem)]">
          <div className="flex w-full flex-col gap-6 lg:max-w-[min(36rem,42vw)] lg:gap-8">
            <div className="flex flex-col gap-3 lg:gap-4">
              <ContactEyebrow />
              <ContactHeading />
              <ContactDescription />
            </div>
            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  )
}
