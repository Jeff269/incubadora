import { useState } from 'react'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import { useNavigate } from 'react-router-dom'

export default function LoginForm () {
  const [data, setData] = useState({
    t1_email: '',
    t1_password: ''
  })

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.t1_email !== 'admin@admin.com' && data.t1_password !== 'admin') {
      setError('Las credenciales son incorrectas')
      return
    }
    navigate('/incubadora/concursos')
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }} className='flex flex-col justify-center items-center p-4'>
      <h2 className='w-full font-bold text-primary text-center'>¡ Bienvenido !</h2>
      <Logo className='w-1/2 sm:w-1/3' />
      <h2 className='w-full font-bold text-primary text-center py-2'>SISTEMA DE INCUBADORA DE EMPRESAS</h2>
      <Input
        label='Correo Electrónico'
        placeholder='Ingrese su correo electrónico'
        value={data.t1_email}
        type='email'
        autoComplete='off'
        onChange={(e) => {
          setData((data) => {
            return {
              ...data,
              t1_email: e.target.value
            }
          })
        }}
      />
      <Input
        label='Contraseña'
        value={data.t1_password}
        placeholder='Ingrese su contraseña'
        type='password'
        onChange={(e) => {
          setData((data) => {
            return {
              ...data,
              t1_password: e.target.value
            }
          })
        }}
      />
      <button
        className='bg-cyan-950 rounded-md text-white border w-full my-2 h-8 transition-all hover:bg-cyan-950 text-xs'
        type='submit'
      >
        INGRESAR
      </button>
      {
        error !== '' && (
          <p className='text-red-600 text-xs font-bold'>
            Las credenciales son incorrectas
          </p>
        )
      }
    </form>
  )
}
