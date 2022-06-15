import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-white p-3 text-center mt-3 text-lg shadow-md'>
        <p>{children}</p>
    </div>
  )
}

export default Error