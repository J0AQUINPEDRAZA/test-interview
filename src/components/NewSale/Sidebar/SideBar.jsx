'use client'
import { LinksSidebarNewSale } from '../../../utils/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
  const pathname = usePathname()
  return (
    <header className='bg-LightBlue flex flex-col items-end h-screen fixed pt-16 '>
      <ul className='flex flex-col gap-5'>
        {LinksSidebarNewSale.map((res) => (
          <li
            key={res.label}
            className={` px-6 py-4 text-white ${
              pathname === res.path ? 'bg-DarkBlue' : 'bg-transparent'
            }`}
          >
            <Link href={res.path}>
              <res.icon className='h-6 w-6' />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default SideBar
