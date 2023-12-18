'use client'
import { Productos } from '../../../../utils/Productos'
import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct/CardProduct'
import { useItemStore } from '../../../../context/ItemContext'
import { Ventas } from '../../../../utils/Ventas'
import Total from '../Total/Total'
const Details = () => {
  const { office, sale, setSale, setTotal, total } = useItemStore()
  const [index, setIndex] = useState()
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState([])
  const [err, setErr] = useState('')

  useEffect(() => {
    products ? setProducts(products) : products
  }, [products])

  useEffect(() => {
    quantity ? setQuantity(quantity) : quantity
  }, [data])
  useEffect(() => {
    setData(data)
    setTotal(
      data
        .map((res) => res.subTotal)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
  }, [data, index, total])
  useEffect(() => {
    setIndex(index)
  }, [index])
  useEffect(() => {
    setSale(sale)
    sale.length === 1 ? Ventas.unshift(sale[0]) : {}
  }, [sale])

  useEffect(() => {}, [Ventas])

  //constante para filtrar los productos por sucursal
  const filterProductsBySucursal = Productos.filter(
    (producto) => producto.sucursal === office
  )
  //Función para filtrar por nombre los productos ya filtrados
  const searchProducts = (e) => {
    const result = filterProductsBySucursal.find(
      (producto) => producto.nombre === e.target.value
    )
    setProducts(result)

    result === undefined
      ? office
        ? setErr('El producto no existe en esta sucursal')
        : (setErr('Debe elegir una sucursal'), (e.target.value = ''))
      : setErr('Producto seleccionado')
  }
  //Funcion para setear la cantidad de unidades de ese producto
  const setQuantityHandler = (e) => {
    e.target.value >= 1 ? setQuantity(parseInt(e.target.value)) : setQuantity(1)
  }

  //Funcion para agregar productos
  const addProducts = (e) => {
    e.preventDefault()
    const infoProd = {
      products,
      quantity,
      subTotal: products ? products.precio * quantity : 0
    }
    infoProd.products && infoProd.quantity && infoProd.subTotal
      ? (setData([...data, infoProd]), setErr(''))
      : setData(data)
  }
  //Funcion para eliminar productos
  const deleteItem = (e) => {
    e.preventDefault()
    index === 0 ? data.shift() : data.splice(index, 1)
    setTotal(
      data
        .map((res) => res.subTotal)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    )
  }
  //Funcion crear venta
  const createSale = () => {
    total > 0 &&
    (sale.cliente || sale ? (sale[0] ? sale[0].cliente : {}) : {}) &&
    (sale.sucursal || sale ? (sale[0] ? sale[0].sucursal : {}) : {})
      ? (setSale([{ ...sale, product: data, total: total }]),
        setErr('Venta guardada!'),
        setData([]),
        setTimeout(() => {
          setSale(sale)
        }, 300))
      : sale
      ? sale.cliente
        ? sale.sucursal
          ? total === 0
            ? setErr('Tienes que agregar un producto')
            : setErr('Faltan campos por completar o son invalidos')
          : setErr('Complete el campo de "Branch office"')
        : setErr('Complete el campo de "Client"')
      : {}
    sale
      ? sale[0]
        ? sale[0].cliente
          ? sale[0].sucursal
            ? setErr('')
            : setErr('Complete el campo de "Branch office"')
          : setErr('Complete el campo de "Client"')
        : setErr('')
      : setErr('')
  }
  return (
    <article className='min-h-[100px]'>
      <h2 className='w-full text-2xl font-bold pb-2 border-b-2 border-DarkGray'>
        Details
      </h2>
      <form action='' onSubmit={deleteItem}>
        <div className='w-full grid grid-cols-details gap-5'>
          <label htmlFor='name' className='col-start-1 col-end-2'>
            <small className='text-DarkGray '>Name</small>
            <input
              className='pl-3 bg-white h-8 w-full outline-none'
              type='text'
              id='name'
              onChange={searchProducts}
            />
          </label>
          <label
            htmlFor='quantity'
            className='col-start-2 col-end-3'
            id='quantity'
          >
            <small className='text-DarkGray'>Quantity</small>
            <input
              value={quantity}
              className='pl-3 bg-white h-8 max-w-96 w-full outline-none'
              type='number'
              id='quantity'
              onChange={setQuantityHandler}
            />
          </label>
          <label htmlFor='price' className='col-start-3 col-end-4'>
            <small className='text-DarkGray'>Price</small>
            <input
              readOnly
              className='pl-3 bg-white h-8 w-full outline-none'
              type='text'
              id='branchOffice'
              placeholder={products ? products.precio : ''}
            />
          </label>
          <label htmlFor='subtotal' className='col-start-4 col-end-5'>
            <small className='text-DarkGray'>Subtotal</small>
            <input
              disabled
              className='pl-3 bg-white h-8 w-full outline-none'
              type='text'
              id='subtotal'
              value={
                products && products.precio ? products.precio * quantity : ''
              }
            />
          </label>
          <span className='pb-1 self-end h-[32px] max-w-[32px] min-w-[32px] w-full text-white bg-transparent' />
        </div>

        {data.map((res) => (
          <CardProduct
            data={res}
            key={res.subTotal}
            arr={data}
            setIndex={setIndex}
          />
        ))}
        <input
          onClick={addProducts}
          type='button'
          value='Add'
          className='cursor-pointer mt-5 px-6 py-2 text-white bg-LightBlue'
        />
      </form>
      <small className='text-red-500 h-[18px]'>{err}</small>
      <Total createSale={createSale} />
    </article>
  )
}

export default Details
