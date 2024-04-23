'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          href='/'
          onOpenChange={setOpen}
          className='flex items-center'
        >
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <hr className='my-6' />
        <div className='flex flex-col gap-3 my-3'>
          <MobileLink href='/explore-classes' onOpenChange={setOpen}>
            Explore Classes
          </MobileLink>
          <MobileLink href='/mentor-details' onOpenChange={setOpen}>
            Mentor Details
          </MobileLink>
          <MobileLink href='/login' onOpenChange={setOpen}>
            Login
          </MobileLink>
        </div>
        <div className='absolute bottom-5'>
          <SheetFooter className='text-center'>
            This is sheet footer
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
