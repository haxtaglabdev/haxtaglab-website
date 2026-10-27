import { projects } from '../data/site'
import { BrowserFrame } from './BrowserFrame'
import { OpenInNewIcon } from './Icon'

export function ProjectsSection() {
  return (
    <section className="w-full scroll-mt-20 border-b border-border-subtle bg-white py-24" id="projects">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Selected Work, Built for Real Needs.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Explore recent production systems deployed for active businesses, engineered to simplify
            customer interaction and streamline back-office operations.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-base px-4 py-2 text-xs font-medium text-text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Live Production Systems</span>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project) => {
            const preview = (
              <div
                className={`flex items-center justify-center p-6 lg:col-span-7 lg:p-10 ${project.panelClass} ${project.layout === 'image-right' ? 'order-1 lg:order-2' : ''}`}
              >
                <div className="w-full overflow-hidden rounded-xl border border-white/20 shadow-xl">
                  <BrowserFrame url={project.urlLabel} trafficLights>
                    <div className="h-80 w-full overflow-hidden bg-slate-900">
                      <img
                        alt={project.imageAlt}
                        className="h-full w-full object-cover object-top"
                        src={project.image}
                      />
                    </div>
                  </BrowserFrame>
                </div>
              </div>
            )

            const details = (
              <div
                className={`flex flex-col justify-between bg-white p-8 lg:col-span-5 lg:p-12 ${project.layout === 'image-right' ? 'order-2 lg:order-1' : ''}`}
              >
                <div>
                  <span
                    className={`mb-4 inline-block rounded px-3 py-1 text-xs font-semibold tracking-wider uppercase ${project.badgeClass}`}
                  >
                    {project.badge}
                  </span>
                  <h3 className="font-heading text-2xl leading-snug font-bold text-navy lg:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.description}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border-subtle pt-6">
                    <div>
                      <span className="block text-xs text-text-muted">{project.benefitLabel}</span>
                      <span className="font-heading mt-1 block text-sm font-semibold text-navy">
                        {project.benefit}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-text-muted">{project.experienceLabel}</span>
                      <span className="font-heading mt-1 block text-sm font-semibold text-navy">
                        {project.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-border-subtle pt-6">
                  <a
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-royal focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Visit Live Website</span>
                    <OpenInNewIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border-subtle bg-surface-base shadow-sm transition-shadow hover:shadow-md lg:grid-cols-12"
              >
                {project.layout === 'image-left' ? (
                  <>
                    {preview}
                    {details}
                  </>
                ) : (
                  <>
                    {details}
                    {preview}
                  </>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
