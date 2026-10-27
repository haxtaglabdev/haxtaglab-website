import { useState, type CSSProperties } from 'react'
import { services } from '../data/site'
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CartIcon,
  DesignIcon,
  DesktopIcon,
  HubIcon,
  TuneIcon,
  WebIcon,
} from './Icon'

const icons = {
  web: WebIcon,
  desktop: DesktopIcon,
  design: DesignIcon,
  cart: CartIcon,
  hub: HubIcon,
  tune: TuneIcon,
}

function cardStyle(index: number, current: number, total: number): CSSProperties {
  let offset = index - current
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  if (offset === 0) {
    return {
      transform: 'translateX(0px) translateZ(60px) rotateY(0deg) scale(1)',
      opacity: 1,
      zIndex: 30,
      pointerEvents: 'auto',
      boxShadow: '0 25px 50px -12px rgba(12, 10, 31, 0.5), 0 0 35px rgba(8, 200, 240, 0.25)',
      borderColor: 'rgba(8, 200, 240, 0.4)',
    }
  }
  if (offset === -1) {
    return {
      transform: 'translateX(-280px) translateZ(-80px) rotateY(32deg) scale(0.86)',
      opacity: 0.75,
      zIndex: 20,
      pointerEvents: 'auto',
      boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
    }
  }
  if (offset === 1) {
    return {
      transform: 'translateX(280px) translateZ(-80px) rotateY(-32deg) scale(0.86)',
      opacity: 0.75,
      zIndex: 20,
      pointerEvents: 'auto',
      boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
    }
  }
  if (offset < -1) {
    return {
      transform: 'translateX(-460px) translateZ(-200px) rotateY(45deg) scale(0.72)',
      opacity: 0,
      zIndex: 10,
      pointerEvents: 'none',
      borderColor: 'rgba(255, 255, 255, 0.05)',
    }
  }
  return {
    transform: 'translateX(460px) translateZ(-200px) rotateY(-45deg) scale(0.72)',
    opacity: 0,
    zIndex: 10,
    pointerEvents: 'none',
    borderColor: 'rgba(255, 255, 255, 0.05)',
  }
}

export function ServicesSection() {
  const [current, setCurrent] = useState(0)
  const total = services.length

  return (
    <section
      className="w-full scroll-mt-20 border-b border-border-subtle bg-surface-base py-24"
      id="services"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            Our Services
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Digital Solutions for Real Business Needs.
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-text-muted">
            We provide comprehensive design and engineering services to help your business establish
            a strong online presence and streamline operations.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-6">
          <div className="service-stage relative flex min-h-[580px] w-full items-center justify-center px-4">
            {services.map((service, index) => {
              const Icon = icons[service.icon]
              return (
                <button
                  type="button"
                  key={service.id}
                  className="service-card absolute flex h-[510px] w-[320px] cursor-pointer flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#1b153b] via-[#13102d] to-[#0b091f] p-8 text-left text-white shadow-2xl transition-all duration-500 ease-out select-none sm:w-[380px]"
                  style={cardStyle(index, current, total)}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${service.title}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-accent shadow-inner backdrop-blur-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-cyan-accent/30 bg-cyan-accent/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-accent uppercase">
                      {service.indexLabel}
                    </span>
                  </div>
                  <div className="my-auto py-4">
                    <h3 className="font-heading mb-3 text-2xl leading-snug font-bold tracking-tight text-white sm:text-[26px]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-normal text-slate-300">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-medium text-slate-400">Client Solutions</span>
                    <a
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent transition-colors hover:text-white"
                      href="#contact"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Inquire Now <ArrowForwardIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous Service"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-white text-navy shadow-md transition-all duration-200 hover:border-primary/40 hover:shadow-lg active:scale-95"
              onClick={() => setCurrent((value) => (value - 1 + total) % total)}
            >
              <ArrowBackIcon className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <div className="flex items-center gap-2.5 rounded-full border border-border-subtle bg-white px-4 py-2 shadow-sm">
              {services.map((service, index) => (
                <button
                  type="button"
                  key={service.id}
                  aria-label={`Go to ${service.title}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === current ? 'scale-125 bg-primary' : 'bg-slate-300 hover:bg-slate-400'}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next Service"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-white text-navy shadow-md transition-all duration-200 hover:border-primary/40 hover:shadow-lg active:scale-95"
              onClick={() => setCurrent((value) => (value + 1) % total)}
            >
              <ArrowForwardIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
