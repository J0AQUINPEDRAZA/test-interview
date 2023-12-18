import React from 'react'
import { BsImageAlt } from 'react-icons/bs'
const CardContentOne = () => {
  return (
    <div className='flex flex-col items-center w-[192px]'>
      <figure className='bg-LightBlue p-16'>
        <BsImageAlt className='text-white h-16 w-16' />
      </figure>
      <p className='text-gray-400'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        quae cum minima?
      </p>
    </div>
  )
}

export default CardContentOne
