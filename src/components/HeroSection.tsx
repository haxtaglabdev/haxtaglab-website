import dinemarkImg from '../assets/dinemark.png'
import maduImg from '../assets/madu-tseylon.png'
import { ArrowForwardIcon } from './Icon'
import { BrowserFrame } from './BrowserFrame'

export function HeroSection() {
  return (
    <section
      className="relative w-full scroll-mt-20 border-b border-border-subtle bg-gradient-to-b from-[#F9FBFE] via-surface-base to-white py-20 lg:py-28"
      id="home"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="reveal flex flex-col items-start lg:col-span-6">
            <span className="mb-6 inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
              Digital Studio & Engineering
            </span>
            <h1 className="font-heading text-4xl leading-[1.2] font-bold tracking-tight text-navy sm:text-5xl lg:text-[54px]">
              Building Digital Products That Move Businesses Forward.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed font-normal text-text-muted sm:text-lg">
              HAXTAGLAB helps businesses turn ideas into practical digital solutions through modern
              web development, custom software, and thoughtfully designed user experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:bg-royal hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none sm:text-base"
                href="#contact"
              >
                <span>Discuss Your Project</span>
                <ArrowForwardIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-subtle bg-white px-6 py-3.5 text-sm font-medium text-navy shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-primary/40 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none sm:text-base"
                href="#projects"
              >
                <span>Explore Our Work</span>
              </a>
            </div>
            <div className="mt-12 grid w-full grid-cols-2 gap-8 border-t border-border-subtle/80 pt-8">
              <div>
                <span className="font-heading block text-2xl font-bold text-navy">Client-Owned</span>
                <span className="mt-1 block text-xs text-text-muted">
                  Transparent codebases & full IP ownership
                </span>
              </div>
              <div>
                <span className="font-heading block text-2xl font-bold text-navy">
                  Production-Ready
                </span>
                <span className="mt-1 block text-xs text-text-muted">
                  Built for stability, usability, and speed
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px] pb-16 lg:ml-auto">
              <div className="relative z-20">
                <BrowserFrame url="dinemark.online">
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      alt="Dinemark Platform Live Preview"
                      className="h-full w-full object-cover object-top"
                      src={dinemarkImg}
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 bg-white p-3.5">
                    <span className="text-xs font-semibold text-navy">
                      Dinemark Ordering Platform
                    </span>
                  </div>
                </BrowserFrame>
              </div>
              <div className="absolute -right-4 -bottom-10 z-10 hidden w-[85%] opacity-95 sm:block">
                <BrowserFrame url="madutseylon.com" compact>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      alt="Madu Tseylon Tours Live Preview"
                      className="h-full w-full object-cover object-top"
                      src={maduImg}
                    />
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
