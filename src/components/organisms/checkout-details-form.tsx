import { useEffect } from 'react'
import { useFormContext, useFormState, useWatch } from 'react-hook-form'
import { FormRow, FormSubtitle } from '@/components/atoms'
import { FormSelect } from '@/components/molecules'

export default function CheckoutDetailsForm() {
  const { register, getFieldState } = useFormContext<ICheckoutDetailsForm>()
  const { errors } = useFormState<ICheckoutDetailsForm>({ name: 'checkoutDetails' })
  const paymentMethod = useWatch<ICheckoutDetailsForm>({ name: 'checkoutDetails.paymentMethod' })
  const { invalid } = getFieldState('checkoutDetails')

  useEffect(() => {
    if (paymentMethod === 'online') {
      alert('Please verify the transaction')
    }
  }, [paymentMethod])

  return (
    <section>
      <FormSubtitle isInvalid={invalid} text='checkoutDetails' />
      <FormRow>
        <FormSelect
          error={errors.checkoutDetails?.paymentMethod}
          options={['', 'on delivery', 'online']}
          {...register('checkoutDetails.paymentMethod', {
            required: 'Payment Method is required',
          })}
        />
        <FormSelect
          error={errors.checkoutDetails?.deliveryTime}
          options={['', 'Half an Hour', '1 Hour', '2 Hours', '3 Hours']}
          {...register('checkoutDetails.deliveryTime', {
            required: 'Delivery Time is required',
          })}
        />
      </FormRow>
    </section>
  )
}
