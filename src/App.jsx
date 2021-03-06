import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import BuscarPedido from "./paginas/BuscarPedido"
import EditarPedido from "./paginas/EditarPedido"
import NuevoPedido from "./paginas/NuevoPedido"
import Pedidos from "./paginas/Pedidos"
import VerPedido from "./paginas/VerPedido"
import React from "react"

function App() {

  const [pedidos, setPedidos] = React.useState([])
  const [cargando, setCargando] = React.useState(true)
  
  const eliminarPedido = async (id) => {

    const url = `http://localhost:4000/pedidos/${id}`
    const respuesta = await fetch(url, {
      method: 'DELETE'
    })
    await respuesta.json()

    const listaPedidoModificada = pedidos.filter(pedido => pedido.id !== id)
    setPedidos(listaPedidoModificada)

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pedidos eliminarPedido={eliminarPedido} pedidos={pedidos} setPedidos={setPedidos} setCargando={setCargando} cargando={cargando}/>}/>
          <Route path=":id" element={<VerPedido />}/>
          <Route path="buscar" element={<BuscarPedido eliminarPedido={eliminarPedido} setPedidos={setPedidos} pedidos={pedidos} setCargando={setCargando} cargando={cargando}/>}/>
          <Route path="nuevo" element={<NuevoPedido pedidos={pedidos}/>}/>
          <Route path="editar/:id" element={<EditarPedido cargando={cargando}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
