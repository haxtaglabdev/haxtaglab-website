import { testimonials } from '../data/site'

export function TestimonialsSection() {
  return (
    <section
      className="w-full scroll-mt-20 border-b border-border-subtle bg-white py-24"
      id="testimonials"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            Client Experiences
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Good Work Builds Trust.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            We believe great digital products start with clear communication, thoughtful design, and
            reliable development. Our goal is to create digital experiences that help businesses
            move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-surface-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <span
                aria-hidden="true"
                className="font-heading mb-4 text-4xl leading-none text-primary"
              >
                “
              </span>
              <blockquote className="flex-1 text-sm leading-relaxed text-text-muted">
                {item.quote}
              </blockquote>
              <footer className="mt-6 border-t border-border-subtle pt-5">
                <cite className="font-heading not-italic text-base font-bold text-navy">
                  {item.name}
                </cite>
                <p className="mt-1 text-xs font-medium tracking-wide text-primary">
                  {item.projectType}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
