import { LinksHeaderLanding } from '../../../utils/Links'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-20 w-full  flex  bg-transparent absolute justify-center pt-10'>
      <ul className='pr-10 flex  max-w-[1500px] w-full list-none gap-5 flex-wrap justify-end'>
        {LinksHeaderLanding.map((res) => (
          <li
            key={res.label}
            className={`font-bold ${
              res.label === 'Login' ? 'text-LightBlue' : 'text-black'
            }`}
          >
            <Link href={res.path}>{res.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
