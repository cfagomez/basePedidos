import { Formik, Form, Field } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import Error from './Error'

const Formulario = ({pedidoEditar, id}) => {

    const navigate = useNavigate()

    const nuevoPedidoSchema = yup.object().shape({
        numero: yup.number().positive('El numero de pedido es invalido').integer('El numero de pedido es invalido').required('El numero de pedido es requerido'),
        empresa: yup.string().max(20, 'El nombre de la empresa es muy largo').required('El nombre de la empresa es requerido'),
        descripcion: yup.string().min(10, 'La descripcion del pedido es muy corta').max(50, 'La descripcion del pedido es muy larga').required('La descripcion del pedido es requerida'),
        telefono: yup.number('El numero de telefono es invalido').positive('El numero de telefono es invalido').integer().typeError('El numero de telefono es invalido'),
        taller: yup.string().min(5,'El nombre es muy corto').max(10, 'El nombre es muy largo'),
        estado: yup.string().min(5, 'El estado del pedido es muy corto').max(10, 'El estado del pedido es muy largo')
    })

    const crearNuevoPedido = async (values) => {
        
        const url = "http://localhost:4000/pedidos"
        const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type':'application/json'
            }
        })
        const resultado = await respuesta.json()
        console.log(resultado)

        navigate('/')

    }

    const editarPedido = async (values) => {

        try {

            const url = `http://localhost:4000/pedidos/${id}`
            const respuesta = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-type':'application/json'
                }
            })
            const resultado = await respuesta.json()
        } catch (error) {
            console.log(error)
        }

        navigate(`/${id}`)

    }

  return (
      <>
        <Formik
            initialValues={{
                numero: pedidoEditar?.numero ?? "",
                fecha: pedidoEditar?.fecha ?? "",
                empresa: pedidoEditar?.empresa ?? "",
                telefono: pedidoEditar?.telefono ?? "",
                taller: pedidoEditar?.taller ?? "",
                estado: pedidoEditar?.estado ?? "",
                descripcion: pedidoEditar?.descripcion ?? "",
            }}
            onSubmit={async(values, {resetForm}) => {

                if (Object.keys(pedidoEditar).length > 0) {

                    await editarPedido(values)

                } else {

                    await crearNuevoPedido(values)

                }

                resetForm()
                
            }}
            validationSchema={nuevoPedidoSchema}
            enableReinitialize={true}
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
                                {
                                    errors.empresa && touched.empresa ? (
                                        <Error>{errors.empresa}</Error>
                                    ) : (
                                        null
                                    )
                                }
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
                                {
                                    errors.telefono && touched.telefono ? (
                                        <Error>{errors.telefono}</Error>
                                    ) : (
                                        null
                                    )
                                }
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
                                {
                                    errors.taller && touched.taller ? (
                                        <Error>{errors.taller}</Error>
                                    ) : (
                                        null
                                    )
                                }
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
                                {
                                    errors.descripcion && touched.descripcion ? (
                                        <Error>{errors.descripcion}</Error>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <input 
                                type="submit" 
                                value={
                                    Object.keys(pedidoEditar).length > 0 ? (
                                        'Editar Pedido'
                                    ) : (
                                        'Agregar Pedido'
                                    )
                                }
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

Formulario.defaultProps = {
    pedidoEditar: {},
    id: {}
}

export default Formulario