import { FaPaperPlane } from 'react-icons/fa6'
import { Button, FormControl } from 'rsc-daisyui'

export default function FormButton() {
  return (
    <FormControl className='mt-4'>
      <Button className='font-pacifico font-extralight text-white ~text-base/lg' color='primary' type='submit'>
        <FaPaperPlane className='~text-xl/2xl' />
        Order Now!
      </Button>
    </FormControl>
  )
}
