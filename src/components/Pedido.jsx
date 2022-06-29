import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pedido = ({pedido, eliminarPedido}) => {

    const navigate = useNavigate()

    const {numero, empresa, descripcion, estado, id} = pedido

  return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3'>{numero}</td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>{descripcion}</td>
        <td className='p-3'>{estado}</td>
        <td className='p-3'>
            <button
                type='button'
                className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
                onClick={() => navigate(`/${id}`)}
            >
                Ver
            </button>
            <button
                type='button'
                className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
                onClick={() => navigate(`/editar/${id}`)}
            >
                Editar
            </button>
            <button
                type='button'
                className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
                onClick={() => eliminarPedido(id)}
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

Pedido.defaultProps = {
    eliminarPedido: ""
}

export default Pedido