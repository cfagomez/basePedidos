import React from 'react'
import Formulario from '../components/Formulario'
import {useParams} from 'react-router-dom'

const EditarPedido = () => {

  const {id} = useParams()
  
  const [pedidoEditar, setPedidoEditar] = React.useState({})

  React.useEffect (() => {

    const obtenerPedidoEditar =  async () => {

      try {

        const url = `http://localhost:4000/pedidos/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setPedidoEditar(resultado)

      } catch (error) {

        console.log(error)

      }

    }

    obtenerPedidoEditar()

  }, [])

  return (
    <>
        <div className='text-4xl text-black font-black text-center mb-10'>Edicion de Pedido</div>
        <Formulario 
          pedidoEditar={pedidoEditar}
          id={id}
        />
    </>
  )
}

export default EditarPedido