import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Error from './Error'

const Formulario = () => {

    const nuevoPedidoSchema = yup.object().shape({
        numero: yup.number().integer('Numero no valido').positive('Numero no valido').required('El numero es requerido'),
        empresa: yup.string().max(20, 'El nombre de la empresa es muy largo').required('El nombre de la empresa es requerido'),
        telefono: yup.number().integer('Numero invalido').positive('Numero invalido').typeError('El numero es requerido'),
        estado: yup.string().required('El estado es requerido'),
        descripcion: yup.string().min(5, 'La descripcion del pedido es muy corta').max(50, 'La descripciond el pedido es muy larga').required('La descripcion del pedido es requerida')
    })

    const nuevoPedido = () => {
        console.log('Nuevo pedido agregado')
    }

  return (
      <>
        <Formik
            initialValues={{
                numero: '',
                fecha: '',
                empresa: '',
                telefono: '',
                taller: '',
                estado: '',
                descripcion: '',
            }}
            onSubmit={(values) => nuevoPedido(values)}
            validationSchema={nuevoPedidoSchema}
        >
            {
                ({errors, touched}) => {

                    return (

                        <Form>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="numero"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Numero
                                </label>
                                <Field
                                    id="numero"
                                    type="number"
                                    name="numero"
                                    className="block w-full p-3"
                                />
                                {
                                    errors.numero && touched.numero ? (
                                        <Error>{errors.numero}</Error>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="fecha"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Fecha
                                </label>
                                <Field
                                    id="fecha"
                                    type="date"
                                    name="fecha"
                                    className="block w-full p-3"
                                />
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="empresa"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Empresa
                                </label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    name="empresa"
                                    className="block w-full p-3"
                                />
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="telefono"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Telefono
                                </label>
                                <Field
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    className="block w-full p-3"
                                />
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="taller"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Taller
                                </label>
                                <Field
                                    id="taller"
                                    type="text"
                                    name="taller"
                                    className="block w-full p-3"
                                />
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="estado"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Estado
                                </label>
                                <Field
                                    id="estado"
                                    type="text"
                                    name="estado"
                                    className="block w-full p-3"
                                />
                            </div>
                            <div className='mt-3'>
                                <label 
                                    htmlFor="descripcion"
                                    className='text-white bg-black w-full block p-1'
                                >
                                    Descripcion
                                </label>
                                <Field
                                    as='textarea'
                                    id="descripcion"
                                    type="text"
                                    name="descripcion"
                                    className="block w-full p-3 h-40"
                                />
                            </div>
                            <input 
                                type="submit" 
                                value="Agregar Pedido"
                                className='mt-5 w-full bg-black p-3 text-white text-lg'
                            />
                        </Form>
                    )
                }
            }
        </Formik>
      </>
  )
}

export default Formulario