import { useEffect, useState } from 'react'
import { useFormContext, useFormState, useWatch } from 'react-hook-form'
import { FormRow, FormSubtitle } from '@/components/atoms'
import { FormModal, FormSelect } from '@/components/molecules'

export default function CheckoutDetailsForm() {
  const [showModal, setShowModal] = useState(false)
  const { register, getFieldState } = useFormContext<ICheckoutDetailsForm>()
  const { errors } = useFormState<ICheckoutDetailsForm>({ name: 'checkoutDetails' })
  const paymentMethod = useWatch<ICheckoutDetailsForm>({ name: 'checkoutDetails.paymentMethod' })
  const { invalid } = getFieldState('checkoutDetails')

  useEffect(() => {
    if (paymentMethod === 'online') {
      setShowModal(true)
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
      <FormModal handleClose={() => setShowModal(false)} isOpen={showModal} />
    </section>
  )
}
