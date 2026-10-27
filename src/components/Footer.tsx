import logo from '../assets/logo.png'
import { navLinks } from '../data/site'
import { OpenInNewIcon } from './Icon'

export function Footer() {
  return (
    <footer className="w-full bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-8 pt-16 pb-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <a className="flex items-center gap-3.5" href="#home">
              <div className="flex h-9 w-auto items-center justify-center rounded bg-white p-1">
                <img alt="HAXTAGLAB Logo" className="h-7 w-auto object-contain" src={logo} />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                HAXTAGLAB
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Digital studio crafting websites, custom web applications, and thoughtful user
              interfaces for businesses that value quality and reliability.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-3">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-slate-300 transition-colors hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Live Client Systems
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-cyan-accent"
                href="https://www.dinemark.online/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Dinemark — Table-side Ordering</span>
                <OpenInNewIcon className="h-3 w-3" />
              </a>
              <a
                className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-cyan-accent"
                href="https://madutseylon.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Madu Tseylon Tours — Safari Booking</span>
                <OpenInNewIcon className="h-3 w-3" />
              </a>
              <div className="mt-2 border-t border-white/10 pt-3 text-xs text-slate-400">
                Email:{' '}
                <a
                  className="text-white underline transition-colors hover:text-cyan-accent"
                  href="mailto:contact@haxtaglab.com"
                >
                  contact@haxtaglab.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">
          <div>© 2026 HAXTAGLAB. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="transition-colors hover:text-white" href="#home">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
