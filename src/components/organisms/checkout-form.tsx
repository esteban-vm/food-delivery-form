import { useFormContext, useFormState } from 'react-hook-form'
import { FormRow, FormSubtitle } from '@/components/atoms'
import { FormSelect } from '@/components/molecules'

export default function CheckoutForm() {
  const { register, getFieldState } = useFormContext<ICheckoutDetailsForm>()
  const { errors } = useFormState<ICheckoutDetailsForm>({ name: 'checkoutDetails' })
  const { invalid } = getFieldState('checkoutDetails')

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
