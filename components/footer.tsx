import type { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const tagline =
  'Soluções em agenciamento aéreo e assessoria operacional para embarques internacionais e nacionais.'

const contactEmail = 'example@email.com.br'
const contactPhone = '+55 011 1234-5678'

const address =
  'Avenida Profa Ida Kolb 225, Apt 153, Jardim das Laranjeiras, São Paulo SP 02518-000'

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5500000000000',
    icon: FaWhatsapp,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: FaLinkedin,
  },
] as const

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="text-3 leading-5 font-semibold tracking-1 text-cyan-900 uppercase lg:text-4 lg:leading-4">
      {children}
    </h2>
  )
}

function SocialLinks() {
  return (
    <nav aria-label="Redes sociais" className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </nav>
  )
}

function SocialLink({
  label,
  href,
  icon: Icon,
}: {
  label: string
  href: string
  icon: IconType
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex size-10 items-center justify-center rounded-sm bg-cyan-100 text-cyan-900 transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
    >
      <Icon aria-hidden size={20} className="shrink-0" />
    </a>
  )
}

function FooterTagline({ className }: { className?: string }) {
  return (
    <p
      className={`font-bold tracking-1 text-cyan-900 uppercase text-[clamp(1.25rem,1.39vw,1.5rem)] leading-[1.25] lg:leading-[1.2] ${className ?? ''}`}
    >
      {tagline}
    </p>
  )
}

function FooterContactBlock() {
  return (
    <div className="flex flex-col gap-3">
      <FooterHeading>Entre em contato</FooterHeading>
      <div className="flex flex-col gap-2 text-1 leading-14 font-normal tracking-2 text-gray-700 lg:text-2 lg:leading-6">
        <a
          href={`mailto:${contactEmail}`}
          className="w-fit transition-colors hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          {contactEmail}
        </a>
        <a
          href={`tel:${contactPhone.replace(/\s/g, '')}`}
          className="w-fit transition-colors hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
        >
          {contactPhone}
        </a>
      </div>
    </div>
  )
}

function FooterLocationBlock() {
  return (
    <div className="flex flex-col gap-3">
      <FooterHeading>Onde estamos</FooterHeading>
      <p className="max-w-[22rem] text-1 leading-14 font-normal tracking-2 text-gray-700 lg:max-w-[26rem] lg:text-2 lg:leading-6">
        {address}
      </p>
    </div>
  )
}

function FooterBrand() {
  return (
    <a
      href="#inicio"
      aria-label="Air Dream Cargo"
      className="inline-flex w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
    >
      <img
        src="/adc-logo.svg"
        alt=""
        width={254}
        height={36}
        className="h-[clamp(2.5rem,10.25vw,2.75rem)] w-auto max-w-none"
      />
    </a>
  )
}

function FooterLegalBar() {
  return (
    <div className="bg-cyan-900 px-4 py-4 lg:px-[4.44%] lg:py-5">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-0 leading-18 font-normal tracking-2 text-gray-0 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:text-1 lg:leading-14">
        <p>© 2026 Air Dream Cargo. All rights reserved.</p>
        <a
          href="#"
          className="w-fit transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-0"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  )
}

function FooterMobile() {
  return (
    <div className="flex flex-col px-4 py-16 lg:hidden">
      <div className="border-b border-gray-200 pb-8">
        <SocialLinks />
      </div>

      <div className="flex flex-col gap-8 pt-8">
        <FooterContactBlock />
        <FooterLocationBlock />
        <FooterTagline />
        <div className="border-t border-gray-200 pt-8">
          <FooterBrand />
        </div>
      </div>
    </div>
  )
}

function FooterDesktop() {
  return (
    <div className="hidden px-[4.44%] py-[clamp(4rem,5.56vw,5rem)] lg:grid lg:grid-cols-2 lg:gap-x-[clamp(1.5rem,4.17vw,3.75rem)] lg:gap-y-10">
      <div className="flex min-h-[17.5rem] flex-col justify-between gap-10">
        <div className="flex flex-col gap-8">
          <FooterTagline className="max-w-[34rem]" />
          <SocialLinks />
        </div>
        <FooterBrand />
      </div>

      <div className="flex flex-col gap-10 lg:pt-1">
        <FooterContactBlock />
        <FooterLocationBlock />
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-0">
      <div className="border-y border-gray-200">
        <div className="mx-auto max-w-[1440px]">
          <FooterMobile />
          <FooterDesktop />
        </div>
      </div>
      <FooterLegalBar />
    </footer>
  )
}
