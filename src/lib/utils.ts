import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
const getLastKey = (str: string) => str.substring(str.lastIndexOf('.') + 1)
const splitCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2')

export { twClsx as clsx }

export const formatFieldName = (name: FieldName) => {
  let labelText: string

  switch (name) {
    case 'customerDetails':
    case 'checkoutDetails':
    case 'deliveryAddress':
      labelText = splitCamelCase(name)
      break
    case 'orderNumber':
      labelText = 'Order No.'
      break
    case 'customerDetails.name':
    case 'customerDetails.email':
    case 'customerDetails.cellphone':
      labelText = `Your ${getLastKey(name)}`
      break
    case 'checkoutDetails.paymentMethod':
    case 'checkoutDetails.deliveryTime':
      labelText = splitCamelCase(getLastKey(name))
      break
    case 'deliveryAddress.state':
    case 'deliveryAddress.city':
    case 'deliveryAddress.street':
    case 'deliveryAddress.landmark':
      labelText = getLastKey(name)
      break
  }

  labelText += ':'

  return labelText
}
