import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

declare global {
  interface IFoodDeliveryForm {
    name: string
    email: string
    cellphone: string
    orderNumber: number
    paymentMethod: string
    deliveryTime: number
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type BaseProps<T extends (...args: any) => ReactNode, U extends keyof IFoodDeliveryForm> = Omit<
    Parameters<T>[number],
    'id' | 'className' | 'color' | 'ref'
  > & {
    $label: U
    $error?: FieldError
  }
}

export {}
