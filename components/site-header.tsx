import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { MainNav } from './main-nav'

export default function SiteHeader() {
  return (
    <header className='sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='flex items-center space-x-4 lg:space-x-6'>
          <Link href='/' className='mr-6 flex items-center space-x-2'>
            <span className='font-bold'>{siteConfig.name}</span>
          </Link>
        </div>
        {/* mainnav */}
        <MainNav />
      </div>
    </header>
  )
}
