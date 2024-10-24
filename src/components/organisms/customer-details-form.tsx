import { useFormContext, useFormState } from 'react-hook-form'
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6'
import { FormRow, FormSubtitle } from '@/components/atoms'
import { FormInput } from '@/components/molecules'

export default function CustomerDetailsForm() {
  const { register, getFieldState } = useFormContext<ICustomerDetailsForm>()
  const { errors } = useFormState<ICustomerDetailsForm>({ name: 'customerDetails' })
  const { invalid } = getFieldState('customerDetails')

  return (
    <section>
      <FormSubtitle isInvalid={invalid} text='customerDetails' />
      <FormInput
        error={errors.customerDetails?.name}
        isHalf={false}
        start={<FaUser />}
        {...register('customerDetails.name', {
          minLength: { value: 3, message: 'Name must be at least 3 letters long' },
          maxLength: { value: 50, message: 'Name must be at most 50 letters long' },
          required: 'Name is required',
        })}
      />
      <FormRow>
        <FormInput
          error={errors.customerDetails?.email}
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
        <FormInput
          error={errors.customerDetails?.cellphone}
          start={<FaPhone />}
          type='tel'
          {...register('customerDetails.cellphone', {
            required: 'Cellphone is required',
          })}
        />
      </FormRow>
    </section>
  )
}
