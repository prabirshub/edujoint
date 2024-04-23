import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className='space-y-6 pb-6 pt-4 md:pb-8 md:mt-6 lg:py-16'>
      <div className='container max-w-screen-2xl flex flex-col gap-4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-primary font-bold mb-2 mb:mb-4'>
          Our Services Gallery
        </h2>
        <p className='text-center mb-4 text-muted-foreground'>
          Experience the live 1:1 Classes for your child and stimulate their
          Brains in a Creative manner!!!
        </p>
        <div className='grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 md:mt-8 px-2 mx-auto'>
          <Image
            src='/assets/images/Calli.png'
            alt=''
            width={375}
            height={587}
            className='object-fill'
          />
          <Image
            src='/assets/images/Mic.png'
            alt=''
            width={375}
            height={587}
            className='object-fill'
          />
          <Image
            src='/assets/images/painting.png'
            alt=''
            width={375}
            height={587}
            className='object-fill'
          />
        </div>
      </div>
    </section>
  )
}
