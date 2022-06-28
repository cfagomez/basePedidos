import React from 'react'

const PedidoBusqueda = ({pedido}) => {

    const {numero, empresa} = pedido

  return (
    <div className='border-2 border-black mt-10 bg-gray-300 p-5 text-2xl font-black'>
        <span>
            <p>Numero de Pedido: {numero}</p>
        </span>
        <span>
            <p>Empresa: {empresa}</p>   
        </span>
    </div>
  )
}

export default PedidoBusqueda