import { list } from 'postcss'
import React from 'react'
import Error from '../components/Error'
import PedidoBusqueda from '../components/PedidoBusqueda'

const BuscarPedido = () => {

  const [pedidoBusqueda, setPedidoBusqueda] = React.useState('')
  const [pedidos, setPedidos] = React.useState([])
  const [error, setError] = React.useState(null)

  const buscarPedido = async () => {

    if (!pedidoBusqueda.trim()) {

      setError('Por favor, ingresar numero de pedido')
      console.log(error)
      return

    }

    setError(null)

    try {

      const url = 'http://localhost:4000/pedidos'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const listaPedidosModificada = resultado.filter(pedido => pedido.numero == pedidoBusqueda)
      setPedidos(listaPedidosModificada)
      console.log(listaPedidosModificada)
      
    } catch (error) {

      console.log(error)

    }

  }

  return (
    <>
      <div className='w-1/2 mx-auto'>
        <h1 className='font-black text-4xl text-black text-center mb-10'>Buscar Pedidos</h1>
        <input 
          type="text"
          placeholder="Ingrese numero de pedido"
          className='p-3 w-full border-2 border-black'
          value={pedidoBusqueda}
          onChange={(e) => setPedidoBusqueda(e.target.value)}
        />
        <input 
          type="button"
          value="Buscar Pedido"
          className='p-3 bg-black text-white w-full'
          onClick={() => buscarPedido()}
        />
        {
          error ? (
            <Error>
              {error}
            </Error>
          ) : (
            null
          )
        }
      </div>
      <div className='mx-10'>
      {
        pedidos.map(pedido => (
          <PedidoBusqueda
            key={pedido.id}
            pedido={pedido}
          />
        ))
      }
      </div>
    </>
  )
}

export default BuscarPedido