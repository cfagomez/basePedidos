import React from 'react'
import Pedido from '../components/Pedido'
import Spinner from '../components/Spinner'

const Pedidos = ({eliminarPedido, pedidos, setPedidos, setCargando, cargando}) => {

  React.useEffect(() => {

    setCargando(true)

    const obtenerPedidos = async () => {

      try {

        const url = "http://localhost:4000/pedidos"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setPedidos(resultado)
        setCargando(false)

      } catch (error) {
        console.log (error)
      }

    }

    obtenerPedidos()

  }, [])

  return !cargando ? (
    <>
      <h1 className='font-black text-4xl text-black text-center'>Pedidos</h1>
      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-black text-white'>
          <tr>
            <th className='p-2'>Numero de Pedido</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Descripcion</th>
            <th className='p-2'>Estado</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            pedidos.map((pedido) => (
              <Pedido 
                key={pedido.id}
                pedido={pedido}
                eliminarPedido={eliminarPedido}
              />
            ))
          }
        </tbody>
      </table>
    </>
  ) : (
    <Spinner />
  )
}

export default Pedidos