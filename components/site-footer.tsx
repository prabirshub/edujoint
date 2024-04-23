import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Button } from './ui/button'
import { Icons } from './icons'

export default function SiteFooter() {
  return (
    <footer className='pt-4 md:pt-6 lg:pt-16 border-t border-border'>
      <div className='container max-w-screen-2xl flex justify-between mb-4 md:mb-6 lg:mb-16'>
        <Link href='/'>
          <span className='font-bold'>{siteConfig.name}</span>
        </Link>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16'>
          <div className='flex flex-col'>
            <h4 className='text-sm md:text-base lg:text-lg font-medium mb-2'>
              Mobile app
            </h4>
            <ul className='flex flex-col gap-1 md:gap-2 lg:gap-3'>
              <li className='text-xs text-muted-foreground'>Features</li>
              <li className='text-xs text-muted-foreground'>Live share</li>
              <li className='text-xs text-muted-foreground'>Video record</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-sm md:text-base lg:text-lg font-medium mb-2'>
              Community
            </h4>
            <ul className='flex flex-col gap-1 md:gap-2 lg:gap-3'>
              <li className='text-xs text-muted-foreground'>Features</li>
              <li className='text-xs text-muted-foreground'>Live share</li>
              <li className='text-xs text-muted-foreground'>Video record</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-sm md:text-base lg:text-lg font-medium mb-2'>
              Company
            </h4>
            <ul className='flex flex-col gap-1 md:gap-2 lg:gap-3'>
              <li className='text-xs text-muted-foreground'>Features</li>
              <li className='text-xs text-muted-foreground'>Live share</li>
              <li className='text-xs text-muted-foreground'>Video record</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <Button size='sm'>Register</Button>
            <Button variant='outline' size='sm'>
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-2xl flex justify-between border-t border-border py-4'>
        <span className='text-xs'>© Neel Singh 2024. Fivexfast</span>
        <div className='flex items-center space-x-2'>
          <p className='text-[10px]'>Follow us:</p>
          <Icons.twitter className='w-2 h-2 cursor-pointer' />
          <Icons.gitHub className='w-2 h-2 cursor-pointer' />
        </div>
      </div>
    </footer>
  )
}
