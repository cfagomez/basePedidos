import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-white p-3 text-center font-bold rounded-md mt-3'>
        <p>{children}</p>
    </div>
  )
}

export default Error