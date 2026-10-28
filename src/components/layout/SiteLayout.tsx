import { useEffect, useRef, useState, type ReactNode } from 'react'
import { profile } from '../../content/profile'
import { SiteFooter } from './SiteFooter'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function SiteLayout({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('#home')
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const updateHeaderHeight = () => {
      const height = Math.ceil(header.getBoundingClientRect().height)
      document.documentElement.style.setProperty(
        '--header-offset',
        `${height + 24}px`,
      )
    }
    updateHeaderHeight()
    const observer = new ResizeObserver(updateHeaderHeight)
    observer.observe(header)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--header-offset')
    }
  }, [])

  useEffect(() => {
    let frame = 0
    const updateActiveSection = () => {
      const headerBottom =
        headerRef.current?.getBoundingClientRect().bottom ?? 96
      const threshold = headerBottom + window.innerHeight * 0.2
      let current = '#home'
      for (const item of navigation) {
        const section = document.querySelector(item.href)
        if (section && section.getBoundingClientRect().top <= threshold) {
          current = item.href
        }
      }
      setActiveSection(current)
      frame = 0
    }
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateActiveSection)
    }
    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header-shell" ref={headerRef}>
        <div className="site-header container-shell">
          <a
            className="wordmark"
            href="#home"
            aria-label={`${profile.displayName}, home`}
          >
            {profile.displayName}
            <span aria-hidden="true">.</span>
          </a>
          <nav aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href ? 'location' : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
