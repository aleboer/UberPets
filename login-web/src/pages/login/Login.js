import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.jpeg'
import './Login.css'

const Login = () => {
    //a partir daqui começa a validar o login
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                
                }
            })
    }

    //define campos obrigatorios e senha de 8 caracteres
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
                            <p>Login:</p>
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
                                type="password"
                                className="Login-Error"
                            />
                        </div>
                        <button className="button" value="Entrar"><Link className="link" exact to="/Home">Entrar</Link></button>
                        <p>Ainda não possui cadastro?</p>
                        <button className="button" value="Registrar" id="registrar"><Link className="link" exact to="/Register">Cadastre-se</Link></button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login
