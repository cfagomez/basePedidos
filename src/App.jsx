import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import BuscarPedido from "./paginas/BuscarPedido"
import NuevoPedido from "./paginas/NuevoPedido"
import Pedidos from "./paginas/Pedidos"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pedidos />}/>
          <Route path="buscar" element={<BuscarPedido />}/>
          <Route path="nuevo" element={<NuevoPedido />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
