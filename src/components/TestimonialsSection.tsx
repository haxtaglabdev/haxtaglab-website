import { testimonials, testimonialStats } from '../data/site'

function StarRating() {
  return (
    <div className="mb-4 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section
      className="w-full scroll-mt-20 border-b border-border-subtle bg-white"
      id="testimonials"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 py-24 lg:px-16">
        {/* ── Header ── */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
            Trust & Results
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Good Work Builds Trust.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-muted">
            Real digital experiences are built on transparent communication, dependable
            engineering, and measurable business impact. Here is how we deliver for forward-thinking
            businesses.
          </p>
        </div>

        {/* ── Stats bar ── */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-100 bg-surface-base/60 px-4 py-7 shadow-sm sm:px-8">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-border-subtle">
            {testimonialStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center px-4">
                <p className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-bold tracking-tight sm:text-3xl ${stat.accentClass}`}>
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-sm font-medium text-text-muted">{stat.suffix}</span>
                  )}
                </p>
                <p className="mt-2 text-xs font-bold tracking-wide text-navy sm:text-[13px]">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[11px] text-text-muted">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonial cards 3×2 ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-surface-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <StarRating />

              <blockquote className="flex-1 text-[13.5px] leading-relaxed text-text-muted">
                {item.quote}
              </blockquote>

              <footer className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${item.avatarColor}`}
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <cite className="block text-[13px] font-bold not-italic text-primary">
                    {item.name}
                  </cite>
                  <p className="truncate text-[11px] text-text-muted">
                    {item.role}, {item.company}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
