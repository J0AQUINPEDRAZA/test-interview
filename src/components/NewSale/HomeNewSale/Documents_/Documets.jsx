'use client'
import { Sucursales } from '../../../../utils/Sucursales'
import { Clientes } from '../../../../utils/Clientes'
import React, { useEffect, useState } from 'react'
import { useItemStore } from '../../../../context/ItemContext'

const Documets = () => {
  const { office, setOffice, setSale } = useItemStore()
  const [clients, setClients] = useState([{}])
  const [sucursal, setSucursal] = useState()
  const [err, setErr] = useState('')
  const [alertSuccess, setAlertaSuccess] = useState('')
  useEffect(() => {
    clients ? setClients(clients) : clients
    sucursal ? setSucursal(sucursal) : sucursal
    const document = { cliente: clients.result, sucursal: sucursal }
    setSale(document)
    setOffice(sucursal ? sucursal.name : '')
  }, [clients, sucursal])
  useEffect(() => {
    setOffice(office)
  }, [office])

  // Función para agregar cliente que no existe
  const addNewClient = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const validateClient = Clientes.find(
      (cliente) => cliente.nombre === data.nombre
    )
    validateClient === undefined
      ? (Clientes.push(data),
        setErr('Se agrego un nuevo cliente, debe volver a seleccionarlo'))
      : setErr('Este cliente ya existe no lo puede agregar')
  }
  // Funcion de busqueda de clientes
  const searchClient = (e) => {
    const result = Clientes.find((cliente) => cliente.nombre === e.target.value)
    result === undefined
      ? e.target.value
        ? setErr('El cliente no existe desea agregarlo?')
        : setErr('Elija un cliente')
      : office
      ? setErr('Cliente seleccionado')
      : setErr('Cliente seleccionado, elija una sucursal')
    setClients({ ...clients, result })
  }
  //Funcion de busqueda de sucursales
  const searchBranchOffice = (e) => {
    const result = Sucursales.find(
      (sucursal) =>
        sucursal.name.toLowerCase() === e.target.value ||
        sucursal.name === e.target.value
    )
    result
      ? (setSucursal(result), setErr(''))
      : setErr('No se encuentra esta sucursal')
  }
  return (
    <article>
      <h2 className='w-full text-2xl font-bold pb-2 border-b-2 border-DarkGray'>
        Document
      </h2>
      <form
        action=''
        className='grid grid-cols-contact '
        onSubmit={addNewClient}
      >
        <label
          htmlFor='client'
          className='flex flex-col col-start-1 col-end-2 justify-end'
        >
          <small className='block text-DarkGray'>Client</small>
          <span className='flex gap-3 '>
            <input
              required
              name='nombre'
              className='pl-3 bg-white h-8 w-full outline-none'
              type='text'
              id='client'
              onChange={searchClient}
            />
            <input
              type='submit'
              value='+'
              className=' items-center cursor-pointer cursor-pointer self-end h-[32px] max-w-[32px] min-w-[32px] w-full text-white bg-LightBlue'
            />
          </span>
        </label>
        <label htmlFor='branchOffice' className='col-start-3 col-end-4'>
          <small className='text-DarkGray'>Branch office</small>
          <input
            className='pl-3 bg-white h-8 w-full outline-none'
            type='text'
            id='branchOffice'
            onChange={searchBranchOffice}
          />
        </label>
        <label htmlFor='currency' className='col-start-5 col-end-6'>
          <small className='text-DarkGray'>Currency</small>
          <input
            disabled
            className='pl-3 bg-white h-8  w-full outline-none'
            type='text'
            id='currency'
            placeholder={sucursal ? sucursal.currency : ''}
          />
        </label>
      </form>
      <small className='text-red-500 h-[18px]'>{err}</small>
    </article>
  )
}

export default Documets
