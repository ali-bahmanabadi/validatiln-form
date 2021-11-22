import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Input from '../components/Input/Input'
import { validate } from '../components/validation/validate'
import { notify } from '../components/toast/toast'
import Checkbox from '../components/Checkbox/Checkbox'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import FormContainer from '../components/FormContainer/FormContainer'

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    setErrors(validate(data, 'signUp'))
  }, [data, touched])

  const changeHandler = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({
        ...data,
        [event.target.name]: event.target.checked,
      })
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      })
    }
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
      notify('You signed up successfully', 'success')
    } else {
      notify('Invalid data', 'error')
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      })
    }
  }

  return (
    <FormContainer>
      <Form submit={submitHandler} log="Sign Up">
        <Input
          label="Name"
          inputType="text"
          inputName="name"
          inputValue={data.name}
          change={changeHandler}
          focus={focusHandler}
          errors={errors.name}
          touched={touched.name}
          errorText={errors.name && touched.name && <span>{errors.name}</span>}
        />
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
        <Input
          label="Confirm Password"
          inputType="text"
          inputName="confirmPassword"
          inputValue={data.confirmPassword}
          change={changeHandler}
          focus={focusHandler}
          errors={errors.confirmPassword}
          touched={touched.confirmPassword}
          errorText={
            errors.confirmPassword &&
            touched.confirmPassword && <span>{errors.confirmPassword}</span>
          }
        />
        <Checkbox
          label="I Accept Terms Of Privacy Policy"
          inputType="checkbox"
          inputName="isAccepted"
          inputValue={data.isAccepted}
          change={changeHandler}
          focus={focusHandler}
          errors={errors.isAccepted}
          touched={touched.isAccepted}
          errorText={
            errors.isAccepted &&
            touched.isAccepted && <span>{errors.isAccepted}</span>
          }
        />
        <Button anker="Login" buttonName="Sign Up" to="/login" />
      </Form>
      <ToastContainer />
    </FormContainer>
  )
}

export default SignUp
