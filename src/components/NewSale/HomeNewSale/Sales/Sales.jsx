'use client'
import React from 'react'
import { Ventas } from '../../../../utils/Ventas'

const Sales = () => {
  const data = Ventas.map((res) => res)

  return (
    <section className='flex flex-col gap-5 min-h-screen h-full w-full py-20 pr-20 pl-40'>
      <h1 className='text-3xl font-bold'>Sales</h1>
      {Ventas.length ? (
        data.map((res) => (
          <article key={res.total} className='flex flex-col gap-3'>
            <h2 className='text-2xl'>New sale</h2>
            <h3 className='text-xl border-b-2 border-black'>
              Client information
            </h3>
            <ul key={res.name}>
              <li>Name: {res.cliente.nombre}</li>
              <li>Surname: {res.cliente.apellido}</li>
              <details>
                <summary>Detalle</summary>
                <li>Direction: {res.cliente.direccion}</li>
                <li>Phone: {res.cliente.telefono}</li>
                <li> Branch office: {res.sucursal ? res.sucursal.name : ''}</li>
                <li>Currency: {res.sucursal ? res.sucursal.currency : ''}</li>
              </details>
            </ul>
            <h3 className='text-xl border-b-2 border-black'>
              Products information
            </h3>
            <details>
              <summary>Detalle</summary>
              {res.product.map((res) => (
                <ul>
                  <li>Name: {res.products.nombre}</li>
                  <li>Price unit: {res.products.precio}</li>
                  <li>Stock: {res.products.nombre}</li>
                  <li>Sucursal: {res.products.sucursal}</li>
                  <li>Quantity: {res.quantity}</li>
                  <li>Subtotal: {res.subTotal} </li>
                </ul>
              ))}
            </details>

            <span className='border-t-2 border-black self-end'>
              Total: {res.total} {res.sucursal ? res.sucursal.currency : ''}
            </span>
          </article>
        ))
      ) : (
        <></>
      )}
    </section>
  )
}

export default Sales
