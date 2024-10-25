import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { FaHashtag } from 'react-icons/fa6'
import { Card } from 'rsc-daisyui'
import { FormTitle } from '@/components/atoms'
import { FormInput } from '@/components/molecules'
import { CheckoutDetailsForm, CustomerDetailsForm, DeliveryAddressForm, ButtonGroup } from '@/components/organisms'
import { defaultValues } from '@/lib/constants'

export default function FoodDeliveryForm() {
  const methods = useForm<IFoodDeliveryForm>({
    mode: 'onChange',
    delayError: 2_000,
    defaultValues,
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
    onReset()
  }

  const onError: SubmitErrorHandler<IFoodDeliveryForm> = (errors) => {
    console.log(errors)
  }

  const onReset = () => {
    reset(defaultValues)
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
        <ButtonGroup control={control} onReset={onReset} />
      </Card.Body>
    </Card>
  )
}
