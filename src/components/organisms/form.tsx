import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { FaBasketShopping, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6'
import { Card } from 'rsc-daisyui'
import { FormButton, FormTitle } from '@/components/atoms'
import { FormInput } from '@/components/molecules'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFoodDeliveryForm>({
    mode: 'onChange',
    delayError: 2_000,
    defaultValues: {
      name: '',
      email: '',
      cellphone: '',
      orderNumber: new Date().valueOf(),
      paymentMethod: '',
      deliveryTime: 0,
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
        <FormInput
          $error={errors.name}
          $label='name'
          placeholder='John Doe'
          start={<FaUser />}
          {...register('name', {
            minLength: { value: 3, message: 'Name must be at least 3 letters long' },
            maxLength: { value: 30, message: 'Name must be at most 30 letters long' },
            required: 'Name is required',
          })}
        />
        <FormInput
          $error={errors.email}
          $label='email'
          placeholder='email@example.com'
          start={<FaEnvelope />}
          type='email'
          {...register('email', {
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
        <div className='flex w-full flex-col gap-1 md:flex-row'>
          <FormInput
            $error={errors.cellphone}
            $label='cellphone'
            placeholder='0000-000-000'
            start={<FaPhone />}
            type='tel'
            $isHalf
            {...register('cellphone', {
              required: 'Cellphone is required',
            })}
          />
          <FormInput
            $error={errors.orderNumber}
            $label='orderNumber'
            placeholder='#######'
            start={<FaBasketShopping />}
            $isHalf
            {...register('orderNumber', {
              disabled: true,
              required: 'Order number is required',
            })}
          />
        </div>
        <FormButton />
      </Card.Body>
    </Card>
  )
}
