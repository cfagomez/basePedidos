import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import BuscarPedido from "./paginas/BuscarPedido"
import EditarPedido from "./paginas/EditarPedido"
import NuevoPedido from "./paginas/NuevoPedido"
import Pedidos from "./paginas/Pedidos"
import VerPedido from "./paginas/VerPedido"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pedidos />}/>
          <Route path=":id" element={<VerPedido />}/>
          <Route path="buscar" element={<BuscarPedido />}/>
          <Route path="nuevo" element={<NuevoPedido />}/>
          <Route path="editar/:id" element={<EditarPedido />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
