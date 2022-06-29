import React from 'react'
import {useNavigate} from 'react-router-dom'

const PedidoBusqueda = ({pedido, eliminarPedido, modoBusqueda}) => {

    const navigate = useNavigate()

    const {numero, empresa, id} = pedido

  return (
    <div className='border-1 border-black mt-10 bg-white hover:bg-gray-50 flex'>
        <span className='w-3/4 text-lg'>
            <p className='p-5'>Numero de Pedido: {numero}</p>
            <p className='p-5'>Empresa: {empresa}</p>
        </span>
        <div className='w-1/4 p-2'>
          <button 
            className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
            onClick={() => navigate(`/${id}`)}
          >
            Ver
          </button>
          <button 
            className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
            onClick={() => navigate(`/editar/${id}`)}
          >
            Editar
          </button>
          <button 
            className='bg-black block w-full text-white p-2 font-bold text-xs my-3'
            onClick={() => eliminarPedido(id, modoBusqueda)}
          >
            Eliminar
          </button>
        </div>
    </div>
  )
}

export default PedidoBusqueda