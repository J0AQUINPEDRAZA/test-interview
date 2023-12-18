import React, { useContext } from 'react'
import { itemContext, useItemContext } from '../../../../../context/ItemContext'

const CardProduct = ({ data, arr, setIndex }) => {
  // const setIndex = useItemContext()
  return (
    <div className='w-full grid grid-cols-details gap-5 mt-3'>
      <label htmlFor='name' className='col-start-1 col-end-2'>
        <input
          readOnly
          value={data.products.nombre}
          className='pl-3 bg-white h-8 w-full outline-none'
          type='text'
          id='name'
        />
      </label>
      <label htmlFor='quantity' className='col-start-2 col-end-3' id='quantity'>
        <input
          readOnly
          value={data.quantity}
          className='pl-3 bg-white h-8 max-w-96 w-full outline-none'
          type='number'
          id='quantity'
        />
      </label>
      <label htmlFor='price' className='col-start-3 col-end-4'>
        <input
          readOnly
          value={data.products.precio}
          disabled
          className='pl-3 bg-white h-8 w-full outline-none'
          type='text'
          id='price'
        />
      </label>
      <label htmlFor='subtotal' className='col-start-4 col-end-5'>
        <input
          readOnly
          disabled
          className='pl-3 bg-white h-8 w-full outline-none'
          type='text'
          id='subtotal'
          value={data.subTotal}
        />
      </label>
      <input
        onClick={() => {
          const ind = arr.indexOf(data)
          setIndex(ind)
        }}
        type='submit'
        value='x'
        className='pb-[0.5px] cursor-pointer cursor-pointer self-end h-[32px] max-w-[32px] min-w-[32px] w-full text-white bg-LightBlue'
      />
    </div>
  )
}

export default CardProduct
