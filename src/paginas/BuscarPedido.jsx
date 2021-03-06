import React from 'react'
import Error from '../components/Error'
import PedidoBusqueda from '../components/PedidoBusqueda'
import Spinner from '../components/Spinner'

const BuscarPedido = ({eliminarPedido, setPedidos, pedidos, cargando, setCargando}) => {

  const [pedidoBusqueda, setPedidoBusqueda] = React.useState('')
  const [error, setError] = React.useState(null)
  const [modoBusqueda, setModoBusqueda] = React.useState(false)

  const buscarPedido = async () => {

    setCargando(true)

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
      setModoBusqueda(true)
      setCargando(false)
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
      <div>
        {
          !cargando ? (

            <div className='mx-10'>
              {
                modoBusqueda ? (
                  <div>
                    {
                      pedidos.map(pedido => (
                        <PedidoBusqueda
                          key={pedido.id}
                          pedido={pedido}
                          eliminarPedido={eliminarPedido}
                          setPedidos={setPedidos}
                        />
                      ))
                    }
                    {
                      pedidos.length === 0 ? (
                        <p className='text-4xl text-center mt-10'>No hay resultados</p>
                      ) : (
                        null
                      )
                    }
                  </div>  
                ) : (
                  null
                )
              }
                  
              </div>
          ) : (
            <Spinner />
          )
        }
      </div>
      
    </>
  )
}

export default BuscarPedido