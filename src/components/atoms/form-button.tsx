import { Button, FormControl } from 'rsc-daisyui'

interface FormButtonProps extends Partial<BaseProps<typeof Button>> {}

export default function FormButton({ type = 'button', ...rest }: FormButtonProps) {
  return (
    <FormControl className='pointer-events-none mt-4 inline-block text-center md:w-1/2'>
      <Button
        {...rest}
        className='pointer-events-auto w-3/4 text-base font-semibold uppercase italic'
        color='primary'
        size='sm'
        type={type}
      />
    </FormControl>
  )
}
