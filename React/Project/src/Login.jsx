import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from './Slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoggedIn, isAdmin } = useSelector((state) => state.Auth)

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(form)) // 🔥 only dispatch
  }

  // ✅ Navigate only if login success
  useEffect(() => {
    if (isLoggedIn && isAdmin) {
      navigate("/")
    }
  }, [isLoggedIn, isAdmin, navigate])

  return (
    <div className='Login'>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login