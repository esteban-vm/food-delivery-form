import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { FaBasketShopping, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6'
import { Card } from 'rsc-daisyui'
import { FormButton, FormRow, FormTitle } from '@/components/atoms'
import { FormInput, FormSelect } from '@/components/molecules'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFoodDeliveryForm>({
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

  const onSubmit: SubmitHandler<IFoodDeliveryForm> = (data) => {
    console.log(data)
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

        <>
          <FormInput
            $error={errors.customerDetails?.name}
            $isHalf={false}
            $label='customerDetails.name'
            start={<FaUser />}
            {...register('customerDetails.name', {
              minLength: { value: 3, message: 'Name must be at least 3 letters long' },
              maxLength: { value: 50, message: 'Name must be at most 50 letters long' },
              required: 'Name is required',
            })}
          />

          <FormInput
            $error={errors.customerDetails?.email}
            $isHalf={false}
            $label='customerDetails.email'
            placeholder='email@example.com'
            start={<FaEnvelope />}
            type='email'
            {...register('customerDetails.email', {
              pattern: {
                value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                message: 'Incorrect email format',
              },
              validate: {
                notFake: (value) => value !== 'email@email.com' || 'This email address is blocked',
                notBlackListed: (value) => !value.endsWith('example.com') || 'This domain is not supported',
              },
              required: 'Email is required',
            })}
          />
        </>

        <FormRow>
          <FormInput
            $error={errors.customerDetails?.cellphone}
            $label='customerDetails.cellphone'
            start={<FaPhone />}
            type='tel'
            {...register('customerDetails.cellphone', {
              required: 'Cellphone is required',
            })}
          />

          <FormInput
            $error={errors.orderNumber}
            $label='orderNumber'
            start={<FaBasketShopping />}
            {...register('orderNumber', {
              disabled: true,
              required: 'Order number is required',
            })}
          />
        </FormRow>

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

        <FormButton />
      </Card.Body>
    </Card>
  )
}
