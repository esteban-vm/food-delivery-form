/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ReactNode } from 'react'
import type { FieldError, FieldPath } from 'react-hook-form'

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

  interface PropsWithError {
    error?: FieldError
  }

  type FieldName = FieldPath<IFoodDeliveryForm>

  type BaseProps<T extends (...args: any) => ReactNode> = { name: FieldName } & PropsWithError &
    Omit<Parameters<T>[number], 'id' | 'className' | 'color' | 'ref' | 'size'>
}

export {}
