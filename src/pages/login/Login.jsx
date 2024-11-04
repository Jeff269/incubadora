import LoginForm from './LoginForm'

function Login () {
  return (
    <section className='flex justify-center w-screen min-h-screen max-sm:flex-col sm:p-6 bg-gradient-to-t from-sky-900 to-cyan-700'>
      <div className='min-h-full max-sm:h-[100vh] max-sm:px-2 max-sm:py-4 sm:w-2/5 flex flex-col justify-center items-center bg-white'>
        <LoginForm />
        <div className='py-4 px-12 text-center leading-3 text-sm'>
          Copyright © 2024 - Universidad Nacional del Centro del Perú
        </div>
      </div>
      <div className='bg-uncp bg-cover bg-center sm:w-3/5'>
        <div className='w-full h-full bg-black/50 backdrop-blur-sm' />
      </div>
    </section>
  )
}

export default Login
