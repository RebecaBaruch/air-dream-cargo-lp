'use client'

import { useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/navbar'

function classNames(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

const SCROLL_DELTA = 8
const INLINE_NAV_THRESHOLD = 48

export function ScrollNavbar() {
  const [revealed, setRevealed] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    function updateVisibility() {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current
      const inlineActive = currentScrollY < INLINE_NAV_THRESHOLD

      if (inlineActive) {
        setRevealed(false)
      } else if (delta < -SCROLL_DELTA) {
        setRevealed(true)
      } else if (delta > SCROLL_DELTA) {
        setRevealed(false)
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(updateVisibility)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!revealed}
      className={classNames(
        'fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-gray-0/95 backdrop-blur-md transition-transform duration-300 ease-out motion-reduce:transition-none',
        revealed ? 'translate-y-0' : 'pointer-events-none -translate-y-full',
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-[4.44%]">
        <Navbar />
      </div>
    </div>
  )
}
