import CardContentOne from '../Cards/CardContentOne'
import React from 'react'

const ContentOne = () => {
  return (
    <section
      id='content1'
      className='flex flex-wrap min-h-[50vw] h-full items-center justify-center p-8'
    >
      <article className='flex flex-col w-full gap-10 max-w-[1350px]'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-4xl font-bold'>Content 1</h2>
          <p className='text-gray-400 md:w-96 w-full'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae dignissimos autem explicabo repellat aliquam, tempore
            quisquam necessitatibus accusamus dicta tenetur, vitae modi. Magni
            omnis excepturi amet atque quae odit officia.
          </p>
        </div>
        <div className='flex gap-5 items-center md:justify-between justify-center flex-wrap'>
          <CardContentOne />
          <CardContentOne />
          <CardContentOne />
          <CardContentOne />
        </div>
      </article>
    </section>
  )
}

export default ContentOne
