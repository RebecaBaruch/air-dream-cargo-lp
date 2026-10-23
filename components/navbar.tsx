'use client'

import { useEffect, useMemo, useState } from 'react'
import { BiMenuAltLeft, BiX } from 'react-icons/bi'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/components/language-provider'
import { languages, type Language } from '@/lib/i18n/types'

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function LanguageSwitcher({
  value,
  onChange,
  className,
  ariaLabel,
}: {
  value: Language
  onChange: (language: Language) => void
  className?: string
  ariaLabel: string
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={classNames('items-center gap-3', className)}
    >
      {languages.map((language) => {
        const active = value === language

        return (
          <button
            key={language}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(language)}
            className={classNames(
              'inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-1 leading-14 transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700',
              active
                ? 'border border-cyan-800 bg-cyan-100 font-bold text-cyan-900'
                : 'bg-gray-100 font-normal text-gray-900 hover:bg-gray-200',
            )}
          >
            {language}
          </button>
        )
      })}
    </div>
  )
}

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = useMemo(
    () =>
      [
        { href: '#servicos', label: t.nav.services },
        { href: '#diferenciais', label: t.nav.differentials },
        { href: '#quem-somos', label: t.nav.about },
        { href: '#contato', label: t.nav.contact },
      ] as const,
    [t.nav],
  )

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    function onChange() {
      if (media.matches) setOpen(false)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="relative z-30">
      <div className="flex items-center justify-between gap-6">
        <a
          href="#inicio"
          aria-label={t.nav.brand}
          className="shrink-0 rounded-sm"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.nav.ariaMain}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-1 leading-14 font-medium text-gray-900 transition-colors hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher
          value={language}
          onChange={setLanguage}
          ariaLabel={t.nav.ariaLanguage}
          className="hidden lg:flex"
        />

        <button
          type="button"
          className="inline-flex size-[30px] cursor-pointer items-center justify-center text-gray-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <BiX aria-hidden className="size-7" />
          ) : (
            <BiMenuAltLeft aria-hidden className="size-[30px]" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute top-full right-0 left-0 z-30 mt-4 border border-gray-200 bg-gray-0 p-4 shadow-[0_16px_40px_rgba(0,36,63,0.12)] lg:hidden"
      >
        <nav className="flex flex-col" aria-label={t.nav.ariaMain}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-gray-100 py-3 text-3 leading-5 font-semibold text-gray-900 transition-colors last:border-b-0 hover:text-cyan-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher
          value={language}
          onChange={setLanguage}
          ariaLabel={t.nav.ariaLanguage}
          className="mt-4 flex"
        />
      </div>
    </header>
  )
}
