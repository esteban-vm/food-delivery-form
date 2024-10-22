import { useFormContext } from 'react-hook-form'
import { FormRow } from '@/components/atoms'
import { FormInput } from '@/components/molecules'

export default function DeliveryForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IDeliveryAddressForm>()

  return (
    <>
      <FormRow>
        <FormInput
          $error={errors.deliveryAddress?.state}
          $label='deliveryAddress.state'
          {...register('deliveryAddress.state', {
            required: 'State is required',
          })}
        />
        <FormInput
          $error={errors.deliveryAddress?.city}
          $label='deliveryAddress.city'
          {...register('deliveryAddress.city', {
            required: 'City is required',
          })}
        />
      </FormRow>
      <FormRow>
        <FormInput
          $error={errors.deliveryAddress?.street}
          $label='deliveryAddress.street'
          {...register('deliveryAddress.street', {
            required: 'Street is required',
          })}
        />
        <FormInput
          $error={errors.deliveryAddress?.landmark}
          $label='deliveryAddress.landmark'
          {...register('deliveryAddress.landmark', {
            required: 'Landmark is required',
          })}
        />
      </FormRow>
    </>
  )
}
