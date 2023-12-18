import Link from 'next/link'
import React from 'react'
import ContentOne from './ContentOne/ContentOne'
import ContentTwo from './ContentTwo/ContentTwo'

const Landing = () => {
  return (
    <main className=' w-full flex min-h-screen h-full flex-col justify-center'>
      <section className='flex w-full min-h-screen lg:items-center w-full bg-[url(/land.jpg)] bg-no-repeat bg-contain bg-right-top max-w-[1550px] self-center'>
        <article className='mr-[70vh] pl-20 pt-16 lg:pt-0 flex h-96 flex-col gap-10'>
          <div className='flex flex-col gap-5 max-w-[250px] w-full'>
            <h1 className='text-4xl font-bold'>
              Lorem, ipsum <br />
              Design
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              velit beatae voluptatum
            </p>
          </div>
          <Link
            href={'/newSale'}
            className='w-28 px-2 py-2 bg-LightBlue text-white text-center'
          >
            Login
          </Link>
        </article>
      </section>
      <ContentOne />
      <ContentTwo />
    </main>
  )
}

export default Landing
