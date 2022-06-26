import React from 'react'

const BuscarPedido = () => {
  return (
    <div>
      <h1 className='font-black text-4xl text-black text-center mb-10'>Buscar Pedidos</h1>
      <input 
        type="text"
        placeholder="Ingrese numero de pedido o nombre de la empresa"
        className='p-3 w-full'
      />
      <input 
        type="button"
        value="Buscar Pedido"
        className='p-3 bg-black text-white w-full'
      />
    </div>
  )
}

export default BuscarPedido