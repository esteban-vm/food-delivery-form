import { FormControl } from 'rsc-daisyui'

export default function FormTitle() {
  return (
    <FormControl>
      <legend className='mx-auto font-pacifico text-primary underline decoration-wavy ~text-2xl/3xl'>
        Food Delivery
      </legend>
    </FormControl>
  )
}
