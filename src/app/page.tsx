import Image from 'next/image'
import { Hero } from 'rsc-daisyui'
import { Form } from '@/components'
import backgroundImg from '@/images/background.jpg'
import formImg from '@/images/form.jpg'

export default function Home() {
  return (
    <Hero className='relative min-h-full w-screen'>
      <Image alt='' className='object-cover' src={backgroundImg} fill />
      <Hero.Overlay className='z-10 bg-neutral/90' />
      <Hero.Content className='z-20 flex-col md:flex-row'>
        <Image
          alt='food'
          className='w-3/4 rounded-box grayscale transition-all delay-500 duration-200 hover:grayscale-0 md:w-1/3'
          src={formImg}
        />
        <Form />
      </Hero.Content>
    </Hero>
  )
}
