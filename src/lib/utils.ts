import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { twClsx as clsx }

export const splitCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
