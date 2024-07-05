import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

type locale = Window & typeof globalThis & { context: { locale: string } }

// 'es-ES'
const dateFormatter = new Intl.DateTimeFormat((window as locale).context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
