import logo from '../assets/logo.png'
import { navLinks } from '../data/site'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  OpenInNewIcon,
  PhoneIcon,
  TikTokIcon,
} from './Icon'

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://web.facebook.com/HaxtagLab' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://web.facebook.com/HaxtagLab' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://web.facebook.com/HaxtagLab' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://web.facebook.com/HaxtagLab' },
]

export function Footer() {
  return (
    <footer className="w-full bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-8 pt-16 pb-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <a className="flex items-center gap-3.5" href="#home">
              <div className="flex h-9 w-auto items-center justify-center rounded bg-white p-1">
                <img alt="HAXTAGLAB Logo" className="h-7 w-auto object-contain" src={logo} />
              </div>
              <span className="hidden text-[1.25rem] font-bold tracking-tight sm:inline-flex">
                <span className="white">HaxtagLab</span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Digital studio crafting websites, custom web applications, and thoughtful user
              interfaces for businesses that value quality and reliability.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-accent hover:bg-cyan-accent/15 hover:text-cyan-accent hover:shadow-[0_0_12px_rgba(8,200,240,0.3)]"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
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

              <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-4 text-sm">
                <a
                  className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                  href="tel:+94770820853"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-cyan-accent transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-medium tracking-wide">+94 77 082 0853</span>
                </a>
                <a
                  className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                  href="mailto:contact@haxtaglab.com"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-cyan-accent transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-medium">haxtaglab@gmail.com</span>
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
