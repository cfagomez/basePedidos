import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 px-5 py-10 border-black border-r-2'>
            <h2 className='text-4xl font-black text-center text-black'>Base de Pedidos</h2>
            <nav className='mt-10'>
                <Link
                    to="/buscar"
                    className='text-black text-2xl block mt-2'
                >
                    Buscar Pedido
                </Link>
                <Link
                    to="/nuevo"
                    className='text-black text-2xl block mt-2'
                >
                    Nuevo Pedido
                </Link>
                <Link
                    to="/"
                    className='text-black text-2xl block mt-2'
                >
                    Pedidos
                </Link>
            </nav>
        </div>
        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </div>
      </div>
    
  )
}

export default Layout