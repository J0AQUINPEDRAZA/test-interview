import CardContentTwoBlue from '../Cards/CardContentTwoBlue'
import CardContentTwoWhite from '../Cards/CardContentTwoWhite'
import Image from 'next/image'
import React from 'react'

const ContentTwo = () => {
  return (
    <section
      id='content2'
      className='bg-[#ecf4ff] min-h-screen h-full flex items-center justify-center p-10'
    >
      <article className='flex max-w-[1350px] w-full flex-col justify-between gap-10'>
        <Image
          src={'/clouds.svg'}
          width={500}
          height={500}
          className='self-start relative top-[10vw] left-[10vw]'
        />
        <div className='flex flex-col gap-5 self-end z-[50] top-[50px]'>
          <h2 className='text-4xl self-end font-bold'>Content 2</h2>
          <p className='text-gray-400 md:w-96 w-full self-end text-end'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae dignissimos autem explicabo repellat aliquam, tempore
            quisquam necessitatibus accusamus dicta tenetur, vitae modi. Magni
            omnis excepturi amet
          </p>
        </div>
        <div className='flex gap-5 items-center lg:justify-between justify-center flex-wrap'>
          <CardContentTwoWhite />
          <CardContentTwoBlue />
          <CardContentTwoWhite />
        </div>
      </article>
    </section>
  )
}

export default ContentTwo
