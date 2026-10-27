import type { ReactNode } from 'react'
import { LockIcon, MoreHorizIcon, RefreshIcon } from './Icon'

type BrowserFrameProps = {
  url: string
  compact?: boolean
  trafficLights?: boolean
  footer?: ReactNode
  children: ReactNode
}

export function BrowserFrame({
  url,
  compact = false,
  trafficLights = false,
  footer,
  children,
}: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
      <div
        className={`flex items-center justify-between border-b border-slate-200 bg-slate-100 ${compact ? 'px-3.5 py-2' : 'px-4 py-2.5'}`}
      >
        <div className={`flex items-center ${compact ? 'gap-1' : 'gap-1.5'}`}>
          {trafficLights ? (
            <>
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-red-400`} />
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-yellow-400`} />
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-green-400`} />
            </>
          ) : (
            <>
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-slate-300`} />
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-slate-300`} />
              <span className={`${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'} rounded-full bg-slate-300`} />
            </>
          )}
        </div>
        <div
          className={`flex items-center gap-1.5 rounded border border-slate-200 bg-white font-sans text-text-muted ${compact ? 'px-3 py-0.5 text-[10px]' : 'px-4 py-0.5 text-[11px]'}`}
        >
          <LockIcon className={`${compact ? 'h-2.5 w-2.5' : 'h-3.5 w-3.5'} text-emerald-600`} />
          <span>{url}</span>
        </div>
        {trafficLights ? (
          <RefreshIcon className="h-3.5 w-3.5 text-text-muted" />
        ) : compact ? (
          <span />
        ) : (
          <MoreHorizIcon className="h-3.5 w-3.5 text-text-muted" />
        )}
      </div>
      {children}
      {footer}
    </div>
  )
}
