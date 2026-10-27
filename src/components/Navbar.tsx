import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../data/site'
import { ArrowForwardIcon, CloseIcon, MenuIcon } from './Icon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const ids = navLinks.map((link) => link.href.slice(1))
      let current = '#home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 120) {
          current = `#${id}`
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full border-b border-border-subtle bg-white/95 backdrop-blur-md transition-all ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-8 lg:px-16">
        <a className="group flex items-center gap-3.5" href="#home">
          <div className="flex h-10 w-auto items-center justify-center">
            <img
              alt="HAXTAGLAB Logo"
              className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              src={logo}
            />
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${active === link.href ? 'text-text-main' : 'text-text-muted'}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-royal hover:shadow focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
            href="#contact"
          >
            <span>Discuss a Project</span>
            <ArrowForwardIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-navy md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border-subtle bg-white px-8 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="py-1 text-sm font-medium text-text-muted hover:text-primary"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
