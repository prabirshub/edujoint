'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()
  return (
    <nav className='sm:flex items-center space-x-8 hidden'>
      <Link
        href='/explore-classes'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/explore-classes'
            ? 'text-foreground'
            : 'text-foreground/60'
        )}
      >
        Explore Classes
      </Link>
      <Link
        href='/mentor-details'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/mentor-details'
            ? 'text-foreground'
            : 'text-foreground/60'
        )}
      >
        Mentor Details
      </Link>
      <Link
        href='/login'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === 'login' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Login
      </Link>
    </nav>
  )
}
