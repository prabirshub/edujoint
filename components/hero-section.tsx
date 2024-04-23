import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='space-y-6 py-5 md:py-6 lg:py-10'>
      <div className='container max-w-screen-2xl grid grid-cols-1 gap-x-8 md:grid-cols-2'>
        <div className='flex flex-col justify-center flex-1 mb-6'>
          <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl mb-2 md:mb-4'>
            Explore Hobby classes for Kids
          </h1>
          <p className='font-medium mb-2 md:mb-4 text-muted-foreground'>
            Learn from the worlds best professionals:
          </p>
          <p className='font-medium max-w-xl mb-2 md:mb-4 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur. Semper aliquet orci potenti
            sed cras turpis. Mauris facilisis eget aliquam condimentum sed
            vestibulum eu. Leo porttitor tincidunt ut ornare ornare pulvinar
            luctus. Sem porttitor adipiscing ultrices turpis pulvinar risus.
          </p>
          <div className='flex flex-col gap-6 w-full max-w-xl mt-4'>
            <button className='py-3 w-full border border-border rounded-lg'>
              Email Address
            </button>
            <button className='py-3 w-full bg-primary text-background rounded-lg'>
              Email Address
            </button>
            <p className='font-medium mb-2 md:mb-4 text-muted-foreground'>
              Stay updated about events and new release
            </p>
          </div>
        </div>
        <div className='flex-1 flex gap-2'>
          <div className='w-full h-full'>
            <Image
              src='/assets/images/img1.png'
              alt=''
              width={197}
              height={584}
              className='object-cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image
              src='/assets/images/img2.png'
              alt=''
              width={197}
              height={584}
              className='object-cover'
            />
          </div>
          <div className='w-full h-full'>
            <Image
              src='/assets/images/img3.png'
              alt=''
              width={197}
              height={584}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
