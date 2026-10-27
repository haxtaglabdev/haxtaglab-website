import { aboutPrinciples } from '../data/site'
import { ChartIcon, DesktopIcon, RocketIcon, SearchIcon } from './Icon'

const icons = {
  desktop: DesktopIcon,
  rocket: RocketIcon,
  chart: ChartIcon,
  search: SearchIcon,
}

export function AboutSection() {
  return (
    <section className="w-full scroll-mt-20 border-b border-border-subtle bg-white py-24" id="about">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            About Us
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technology Built Around Your Business.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            We partner with founders and established enterprises to craft software and digital
            experiences that address clear commercial challenges, without superfluous complexity or
            technical bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPrinciples.map((item) => {
            const Icon = icons[item.icon]
            return (
              <div className="group relative" key={item.id}>
                <div
                  className={`absolute inset-0 translate-x-2.5 -translate-y-2 rounded-2xl ${item.offset} transition-transform duration-300 group-hover:translate-x-3.5 group-hover:-translate-y-3`}
                />
                <div className="relative flex h-full min-h-[380px] flex-col items-center justify-between rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex w-full flex-col items-center">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center ${item.iconClass}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading mb-3 text-base font-bold tracking-wide text-navy uppercase sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-normal text-text-muted sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-4 ring-white ${item.numberBg}`}
                    >
                      <span>{item.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
