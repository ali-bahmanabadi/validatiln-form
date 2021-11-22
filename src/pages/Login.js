import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Input from '../components/Input/Input'
import { validate } from '../components/validation/validate'
import { notify } from '../components/toast/toast'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import FormContainer from '../components/FormContainer/FormContainer'


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    setErrors(validate(data))
  }, [data, touched])

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const focusHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!Object.keys(errors).length) {
      notify('You login successfully', 'success')
    } else {
      notify('Invalid data', 'error')
      setTouched({
        email: true,
        password: true,
      })
    }
  }



  return (
    <FormContainer>
      <Form submit={submitHandler} log="Login">
        <Input
          label="Email"
          inputType="text"
          inputName="email"
          inputValue={data.email}
          change={changeHandler}
          focus={focusHandler}
          errors={errors.email}
          touched={touched.email}
          errorText={
            errors.email && touched.email && <span>{errors.email}</span>
          }
        />
        <Input
          label="Password"
          inputType="text"
          inputName="password"
          inputValue={data.password}
          change={changeHandler}
          focus={focusHandler}
          errors={errors.password}
          touched={touched.password}
          errorText={
            errors.password &&
            touched.password && <span>{errors.password}</span>
          }
        />
        <Button anker="Sign Up" buttonName="Login" to="/sign-up" />
      </Form>
      <ToastContainer />
    </FormContainer>
  )
}

export default Login
