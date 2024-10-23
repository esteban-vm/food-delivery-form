import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
const splitCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2')
const getLastKey = (str: string) => str.substring(str.lastIndexOf('.') + 1)

export { twClsx as clsx }

export const getLabelText = (str: FormLabel) => {
  let labelText = ''

  switch (str) {
    case 'customerDetails':
    case 'checkoutDetails':
    case 'deliveryAddress':
      break
    case 'orderNumber':
      labelText = 'Order No.'
      break
    case 'customerDetails.name':
    case 'customerDetails.email':
    case 'customerDetails.cellphone':
      labelText = `Your ${getLastKey(str)}`
      break
    case 'checkoutDetails.paymentMethod':
    case 'checkoutDetails.deliveryTime':
      labelText = splitCamelCase(getLastKey(str))
      break
    case 'deliveryAddress.state':
    case 'deliveryAddress.city':
    case 'deliveryAddress.street':
    case 'deliveryAddress.landmark':
      labelText = getLastKey(str)
      break
  }

  labelText += ':'

  return labelText
}
