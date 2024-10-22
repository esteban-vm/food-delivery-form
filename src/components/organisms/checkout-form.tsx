import { useFormContext } from 'react-hook-form'
import { FormRow } from '@/components/atoms'
import { FormSelect } from '@/components/molecules'

export default function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ICheckoutDetailsForm>()

  return (
    <FormRow>
      <FormSelect
        $error={errors.checkoutDetails?.paymentMethod}
        $label='checkoutDetails.paymentMethod'
        $options={['', 'on delivery', 'online']}
        {...register('checkoutDetails.paymentMethod', {
          required: 'Payment Method is required',
        })}
      />
      <FormSelect
        $error={errors.checkoutDetails?.deliveryTime}
        $label='checkoutDetails.deliveryTime'
        $options={['', 'Half an Hour', '1 Hour', '2 Hours', '3 Hours']}
        {...register('checkoutDetails.deliveryTime', {
          required: 'Delivery Time is required',
        })}
      />
    </FormRow>
  )
}
