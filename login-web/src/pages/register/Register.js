import React from 'react'
import Logo from '../../images/logo.jpeg'
import Dani from '../dani/dani'
import { Link } from 'react-router-dom'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <div className="Pagina">
            <header className="Header">
                <img src={Logo} className="App-logo" alt="logo" />
            </header>
            <div className="Pagina-form">
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Login">
                        <div className="Login-Group">
                            <p>Nome:</p>
                            <Field
                                name="nome"
                                className="Login-Field"
                            />
                        </div>
                        <div className="Login-Group">
                            <p>E-mail:</p>
                            <Field
                                name="email"
                                className="Login-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name="email"
                                className="Login-Error"
                            />
                        </div>
                        <div className="Login-Group">
                            <p>Senha:</p>
                            <Field
                                name="password"
                                type="password"
                                className="Login-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="Login-Error"
                            />
                        </div>
                        <button className="button" value="Entrar"><Link className="link" exact to="/dani">Cadastrar</Link></button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Register
