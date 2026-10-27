import { useState, type FormEvent } from 'react'
import { projectTypes } from '../data/site'
import { CheckCircleIcon, MailIcon, ScheduleIcon, SendIcon } from './Icon'

type FormValues = {
  fullName: string
  email: string
  projectType: string
  details: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  fullName: '',
  email: '',
  projectType: 'website',
  details: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.details.trim() || values.details.trim().length < 12) {
    errors.details = 'Please describe your project in a little more detail.'
  }
  return errors
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'ready'>('idle')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }
    setStatus('ready')
  }

  const fieldClass =
    'w-full rounded-lg border bg-white px-4 text-sm text-navy outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary'

  return (
    <section className="w-full scroll-mt-20 border-b border-border-subtle bg-white py-24" id="contact">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-8 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold tracking-wider text-primary uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Tell us what you are planning to build. Let’s discuss your goals and find a practical way
            forward.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="rounded-2xl border border-border-subtle bg-surface-base p-8 shadow-sm lg:col-span-7 lg:p-10">
            <form className="flex flex-col gap-6" onSubmit={onSubmit} noValidate>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium tracking-wider text-navy uppercase" htmlFor="full-name">
                  Full Name *
                </label>
                <input
                  className={`${fieldClass} h-12 ${errors.fullName ? 'border-[#E53935] shadow-[0_0_0_3px_rgba(229,57,53,0.1)]' : 'border-border-subtle'}`}
                  id="full-name"
                  name="fullName"
                  placeholder="e.g. David Campbell"
                  type="text"
                  value={values.fullName}
                  onChange={(event) => setValues((prev) => ({ ...prev, fullName: event.target.value }))}
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName ? <p className="text-xs text-[#E53935]">{errors.fullName}</p> : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium tracking-wider text-navy uppercase"
                  htmlFor="email-address"
                >
                  Email Address *
                </label>
                <input
                  className={`${fieldClass} h-12 ${errors.email ? 'border-[#E53935] shadow-[0_0_0_3px_rgba(229,57,53,0.1)]' : 'border-border-subtle'}`}
                  id="email-address"
                  name="email"
                  placeholder="e.g. david@example.com"
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="text-xs text-[#E53935]">{errors.email}</p> : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium tracking-wider text-navy uppercase"
                  htmlFor="project-type"
                >
                  Project Type
                </label>
                <select
                  className={`${fieldClass} h-12 border-border-subtle`}
                  id="project-type"
                  name="projectType"
                  value={values.projectType}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, projectType: event.target.value }))
                  }
                >
                  {projectTypes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium tracking-wider text-navy uppercase"
                  htmlFor="project-details"
                >
                  Project Details *
                </label>
                <textarea
                  className={`${fieldClass} p-4 ${errors.details ? 'border-[#E53935] shadow-[0_0_0_3px_rgba(229,57,53,0.1)]' : 'border-border-subtle'}`}
                  id="project-details"
                  name="details"
                  placeholder="Please describe what you are looking to build, expected timelines, or any current challenges..."
                  required
                  rows={5}
                  value={values.details}
                  onChange={(event) => setValues((prev) => ({ ...prev, details: event.target.value }))}
                  aria-invalid={Boolean(errors.details)}
                />
                {errors.details ? <p className="text-xs text-[#E53935]">{errors.details}</p> : null}
              </div>

              <div>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-px hover:bg-royal hover:shadow focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                  type="submit"
                >
                  <span>Send</span>
                  <SendIcon className="h-4 w-4" />
                </button>
              </div>

              {status === 'ready' ? (
                <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <span>
                    Your details look valid. Email sending is not connected yet — please write to{' '}
                    <a className="font-semibold underline" href="mailto:contact@haxtaglab.com">
                      contact@haxtaglab.com
                    </a>{' '}
                    directly. A backend or email service still needs to be integrated.
                  </span>
                </div>
              ) : null}
            </form>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-6 rounded-2xl bg-navy p-8 text-white shadow-lg lg:p-10">
              <div>
                <span className="mb-2 block text-xs font-semibold tracking-wider text-cyan-accent uppercase">
                  Direct Contact
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Let’s Start a Conversation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Have specific technical questions or want to discuss an initial scope? Send us an
                  email directly, and we will follow up promptly.
                </p>
              </div>
              <div className="space-y-4 border-t border-white/10 pt-2 text-sm">
                <div className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-[18px] w-[18px] text-cyan-accent" />
                  <div>
                    <span className="block text-xs text-slate-400">General Enquiries</span>
                    <a
                      className="font-medium text-white transition-colors hover:text-cyan-accent"
                      href="mailto:contact@haxtaglab.com"
                    >
                      contact@haxtaglab.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ScheduleIcon className="mt-0.5 h-[18px] w-[18px] text-cyan-accent" />
                  <div>
                    <span className="block text-xs text-slate-400">Typical Response Time</span>
                    <span className="font-medium text-white">Within 24 to 48 business hours</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">
                We believe in straightforward communication. You will speak directly with engineers
                and designers who actually build products.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
