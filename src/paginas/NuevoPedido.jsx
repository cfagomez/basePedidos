import React from 'react'
import Formulario from '../components/Formulario'

const NuevoPedido = ({pedidos}) => {
  return (
      <>
        <div className='text-4xl text-black font-black text-center mb-10'>Nuevo Pedido</div>
        <Formulario 
          pedidos={pedidos}
        />
      </>
  )
}

export default NuevoPedido