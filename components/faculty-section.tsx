import Image from 'next/image'

export default function FacultySection() {
  return (
    <section className='space-y-6 pb-6 pt-4 md:pb-8 md:mt-6 lg:py-16'>
      <div className='container max-w-screen-2xl flex flex-col gap-4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-primary font-bold mb-2 mb:mb-4'>
          Our Faculties
        </h2>
        <p className='text-center mb-4 text-muted-foreground'>
          We only hire country’s best faculties who are result driven in nature.
          This Makes us the go to choice for parents
        </p>
        <div className='grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4 mx-auto md:mt-8'>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse2.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Andy William</h3>
            <p className='text-sm text-center -mt-2 text-muted-foreground'>
              Physics
            </p>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse3.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Suzan Kotters</h3>
            <p className='text-sm text-center -mt-2 text-muted-foreground'>
              Chemistry
            </p>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse4.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Genny Dimson</h3>
            <p className='text-sm text-center -mt-2 text-muted-foreground'>
              Maths
            </p>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse5.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Andrew Bond</h3>
            <p className='text-sm text-center -mt-2 text-muted-foreground'>
              Painting
            </p>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse1.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Jamey Third</h3>
            <p className='text-sm text-center -mt-2  text-muted-foreground'>
              Public Speaking
            </p>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <Image
              src='/assets/images/Ellipse6.png'
              alt=''
              height={150}
              width={150}
              className='object-cover rounded-full mx-auto'
            />
            <h3 className='font-semibold text-center mb-0'>Prakash Singh</h3>
            <p className='text-sm text-center -mt-2 text-muted-foreground'>
              Calligraphy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
