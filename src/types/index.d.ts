/* eslint-disable @typescript-eslint/no-explicit-any */

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
    address: {
      state: string
      city: string
      street: string
      landmark: string
    }
  }

  type FormLabel = RecursiveKeys<IFoodDeliveryForm>

  type BaseProps<T extends (...args: any) => ReactNode, U extends FormLabel> = {
    $label: U
    $error?: FieldError
  } & Omit<Parameters<T>[number], 'id' | 'className' | 'color' | 'ref'>
}

export {}

type RecursiveKeys<T> = T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | `${K}.${RecursiveKeys<T[K]>}` : never }[keyof T]
  : never
