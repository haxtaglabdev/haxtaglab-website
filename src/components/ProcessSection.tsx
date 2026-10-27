import { processSteps } from '../data/site'

export function ProcessSection() {
  return (
    <section
      className="w-full scroll-mt-20 border-b border-border-subtle bg-surface-base py-24"
      id="process"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            How We Work
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            A Clear Path from Idea to Launch.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            We follow a straightforward, milestone-driven development process so you always know
            what is being built, how it works, and when it will be delivered.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute top-[44px] right-[6%] left-[6%] z-0 hidden h-[2px] bg-gradient-to-r from-primary via-royal to-cyan-accent opacity-60 lg:block" />
          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#075BFF] to-[#1649D8] text-base font-bold text-white shadow-md ring-4 ring-white">
                  <span>{step.number}</span>
                </div>
                <span className="mb-2 block text-[11px] font-bold tracking-wider text-primary uppercase">
                  {step.label}
                </span>
                <h3 className="font-heading mb-3 text-lg leading-snug font-bold text-navy">
                  {step.heading}
                </h3>
                <p className="text-center text-xs leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
