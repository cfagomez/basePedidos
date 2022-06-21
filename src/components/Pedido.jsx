import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Pedido = ({pedido}) => {

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
            >
                Editar
            </button>
            <button
                type='button'
                className='bg-black block w-full text-white p-2 font-bold text-xs mt-3'
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Pedido