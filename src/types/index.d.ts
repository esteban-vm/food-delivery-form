/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

declare global {
  interface ICustomerDetailsForm {
    customerDetails: {
      name: string
      email: string
      cellphone: string
    }
  }

  interface ICheckoutDetailsForm {
    checkoutDetails: {
      paymentMethod: string
      deliveryTime: string
    }
  }

  interface IDeliveryAddressForm {
    deliveryAddress: {
      state: string
      city: string
      street: string
      landmark: string
    }
  }

  interface IFoodDeliveryForm extends ICustomerDetailsForm, ICheckoutDetailsForm, IDeliveryAddressForm {
    orderNumber: number
  }

  type FormLabel = RecursiveKeys<IFoodDeliveryForm>

  type BaseProps<T extends (...args: any) => ReactNode> = {
    $label: FormLabel
    $error?: FieldError
  } & Omit<Parameters<T>[number], 'id' | 'className' | 'color' | 'ref' | 'size'>
}

export {}

type RecursiveKeys<T> = T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | `${K}.${RecursiveKeys<T[K]>}` : never }[keyof T]
  : never
