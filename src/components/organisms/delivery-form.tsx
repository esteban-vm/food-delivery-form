import { useFormContext, useFormState } from 'react-hook-form'
import { FormRow, FormSubtitle } from '@/components/atoms'
import { FormInput } from '@/components/molecules'

export default function DeliveryForm() {
  const { register, getFieldState } = useFormContext<IDeliveryAddressForm>()
  const { errors } = useFormState<IDeliveryAddressForm>({ name: 'deliveryAddress' })

  return (
    <section>
      <FormSubtitle hasError={getFieldState('deliveryAddress').invalid} text='deliveryAddress' />
      <FormRow>
        <FormInput
          error={errors.deliveryAddress?.state}
          {...register('deliveryAddress.state', {
            required: 'State is required',
          })}
        />
        <FormInput
          error={errors.deliveryAddress?.city}
          {...register('deliveryAddress.city', {
            required: 'City is required',
          })}
        />
      </FormRow>
      <FormRow>
        <FormInput
          error={errors.deliveryAddress?.street}
          {...register('deliveryAddress.street', {
            required: 'Street is required',
          })}
        />
        <FormInput
          error={errors.deliveryAddress?.landmark}
          {...register('deliveryAddress.landmark', {
            required: 'Landmark is required',
          })}
        />
      </FormRow>
    </section>
  )
}
