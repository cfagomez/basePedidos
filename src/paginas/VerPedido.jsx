import React from 'react'
import {useParams} from 'react-router-dom'

const VerPedido = () => {

    const {id} = useParams()

    const [pedido, setPedido] = React.useState({})

    const {numero, empresa, descripcion, estado} = pedido

    React.useEffect(() => {

        const obtenerPedido = async () => {

            try {

                const url = `http://localhost:4000/pedidos/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setPedido(resultado)

            } catch (error) {

                console.log(error)

            }

        }

        obtenerPedido()

    }, [])

  return (
    <div>
        <h1 className='font-black text-4xl text-black'>Ver Pedido</h1>
        <p className='mt-3'>Informacion del Pedido</p>
        <p className='text-4xl mt-10 text-black'>
            <span className='font-bold uppercase text-black'>Pedido: </span>
            {numero}
        </p>
        <p className='text-4xl mt-10 text-black'>
            <span className='font-bold uppercase text-black'>Empresa: </span>
            {empresa}
        </p>
        <p className='text-4xl mt-10 text-black'>
            <span className='font-bold uppercase text-black'>Descripcion: </span>
            {descripcion}
        </p>
        <p className='text-4xl mt-10 text-black'>
            <span className='font-bold uppercase text-black'>Estado: </span>
            {estado}
        </p>
    </div>
  )
}

export default VerPedido