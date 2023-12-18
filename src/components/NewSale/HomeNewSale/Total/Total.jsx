import React from 'react'
import { useItemStore } from '../../../../context/ItemContext'

const Total = ({ createSale }) => {
  const { total } = useItemStore()
  return (
    <article className='flex flex-col gap-5'>
      <label
        htmlFor='total'
        className=' pb-3 border-b-2 border-DarkGray flex justify-end gap-3 pr-[44px]'
      >
        <small className='text-DarkGray'>Total</small>
        <span
          className='pl-3 bg-white h-8 w-total outline-none self-end'
          id='total'
        >
          {total}
        </span>
      </label>
      <input
        onClick={createSale}
        type='button'
        value='Save'
        className='self-end cursor-pointer px-6 py-2 text-white bg-LightBlue'
      />
    </article>
  )
}

export default Total
