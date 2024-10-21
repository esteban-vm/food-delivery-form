import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
const splitCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()

export { twClsx as clsx }

export const getLabelText = (label: FormLabel) => {
  let labelText = ''

  switch (label) {
    case 'address':
      break
    case 'deliveryTime':
    case 'paymentMethod':
      labelText = `${splitCamelCase(label)}:`
      break
    case 'orderNumber':
      labelText = 'Order no.'
      break
    case 'cellphone':
    case 'email':
    case 'name':
      labelText = `your ${label}:`
      break
    default:
      labelText = `${label.substring(label.lastIndexOf('.') + 1)}:`
      break
  }

  return labelText
}
