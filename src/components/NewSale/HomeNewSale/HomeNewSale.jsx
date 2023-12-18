import Image from 'next/image'
import React from 'react'
import Documets from './Documents_/Documets'
import Details from './Details/Details'

const HomeNewSale = () => {
  return (
    <section className='min-h-screen h-full w-full py-20 pr-20 pl-40'>
      <article className='flex flex-col w-full gap-10'>
        <div className='flex'>
          <Image
            alt='illustration of a sale'
            src={'/homeBox.svg'}
            width={200}
            height={200}
            className='w-[80px]'
          />
          <h1 className='mb-5  w-full text-4xl font-bold pb-2 border-b-2 border-DarkGray'>
            New sale
          </h1>
        </div>
        <Documets />
        <Details />
      </article>
    </section>
  )
}

export default HomeNewSale
