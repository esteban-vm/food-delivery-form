import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { FaHashtag } from 'react-icons/fa6'
import { Card } from 'rsc-daisyui'
import { FormButton, FormTitle } from '@/components/atoms'
import { FormInput } from '@/components/molecules'
import { CheckoutDetailsForm, CustomerDetailsForm, DeliveryAddressForm } from '@/components/organisms'

export default function FoodDeliveryForm() {
  const methods = useForm<IFoodDeliveryForm>({
    mode: 'onChange',
    delayError: 2_000,
    defaultValues: {
      orderNumber: new Date().valueOf(),
      customerDetails: {
        name: '',
        email: '',
        cellphone: '',
      },
      checkoutDetails: {
        paymentMethod: '',
        deliveryTime: '',
      },
      deliveryAddress: {
        state: '',
        city: '',
        street: '',
        landmark: '',
      },
    },
  })

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit: SubmitHandler<IFoodDeliveryForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3_000))
    console.log(data)
    reset()
  }

  const onError: SubmitErrorHandler<IFoodDeliveryForm> = (errors) => {
    console.log(errors)
  }

  return (
    <Card
      as='form'
      autoComplete='off'
      className='w-full shadow-2xl md:w-2/3 md:shrink-0'
      spellCheck={false}
      noValidate
      vanilla
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Card.Body as='fieldset'>
        <FormTitle />
        <FormInput
          error={errors.orderNumber}
          isHalf={false}
          start={<FaHashtag />}
          disabled
          {...register('orderNumber', {
            required: 'Order number is required',
          })}
        />
        <FormProvider {...methods}>
          <CustomerDetailsForm />
          <CheckoutDetailsForm />
          <DeliveryAddressForm />
        </FormProvider>
        <FormButton control={control} />
      </Card.Body>
    </Card>
  )
}
