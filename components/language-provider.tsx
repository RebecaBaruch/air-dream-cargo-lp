'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { messages, type Messages } from '@/lib/i18n/messages'
import {
  isLanguage,
  localeByLanguage,
  type Language,
} from '@/lib/i18n/types'

const STORAGE_KEY = 'adc-language'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Messages
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('PT')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && isLanguage(stored)) {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = localeByLanguage[language]
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: messages[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
