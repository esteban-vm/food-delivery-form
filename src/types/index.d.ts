import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

declare global {
  interface IFoodDeliveryForm {
    name: string
    email: string
    cellphone: string
    orderNumber: number
    paymentMethod: string
    deliveryTime: string
  }

  type FormLabel = keyof IFoodDeliveryForm

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type BaseProps<T extends (...args: any) => ReactNode, U extends FormLabel> = {
    $label: U
    $error?: FieldError
  } & Omit<Parameters<T>[number], 'id' | 'className' | 'color' | 'ref'>
}

export {}
