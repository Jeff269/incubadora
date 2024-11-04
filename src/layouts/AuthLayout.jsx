import { Outlet, useNavigate, Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { IconBox, IconChart, IconExit, IconHome, IconMenu, IconWeb } from '../assets/Icons'

export default function AuthLayout () {
  const navigate = useNavigate()
  const onLogOut = () => {
    navigate('/')
  }

  return (
    <div className='flex w-full max-sm:flex-col'>
      <div className='sm:w-[300px] sm:min-h-screen flex flex-col justify-between'>
        <div className='h-12 p-0 flex flex-col items-center sm:my-1'>
          <div className='flex justify-between p-2 w-full h-full'>
            <span />
            <Logo className='h-full p-1' />
            <button className=''>
              <IconMenu className='h-7 hidden max-sm:block text-primary transition-all hover:scale-105 border p-1 aspect-square rounded-md hover:bg-gray-50 hover:shadow' />
            </button>
          </div>
          <section className='text-sm w-full max-sm:hidden pl-4'>
            <h1 className='text-sm font-bold max-sm:hidden text-center text-primary'>
              SISTEMA DE INCUBADORA DE EMPRESAS
            </h1>
            <ul>
              <button className='w-full flex items-center hover:bg-backgroud h-10 pl-2 rounded-l-lg'>
                <IconHome className='h-4 w-4 mx-2' />
                <p>
                  Incubadora de Empresas
                </p>
              </button>
              <Link to='/incubadora/concursos'>
                <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>
                  Concursos
                </li>
              </Link>
              <Link to='/incubadora/equipos'>
                <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Equipos participantes</li>
              </Link>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Integrantes</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Talleres</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Proyectos de emprendimiento</li>
            </ul>
            <ul>
              <button className='w-full flex items-center hover:bg-backgroud h-10 pl-2 rounded-l-lg'>
                <IconChart className='h-4 w-4 mx-2' />
                <p>
                  Desarrollo Empresarial
                </p>
              </button>
              {/* <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Talleres</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Empresas participantes</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Asistencias técnicas</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Ferias y eventos</li> */}
            </ul>
            <ul>
              <button className='w-full flex items-center hover:bg-backgroud h-10 pl-2 rounded-l-lg'>
                <IconWeb className='h-4 w-4 mx-2' />
                <p>
                  Red Incuba Centro
                </p>
              </button>
              {/* <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Red de aliados</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Convenios</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Red de emprendedores</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Red de mentores</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Red de inversores</li>
              <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Red de equipos</li> */}
            </ul>
            <ul>
              <button className='w-full flex items-center hover:bg-backgroud h-10 pl-2 rounded-l-lg'>
                <IconBox className='h-4 w-4 mx-2' />
                <p>
                  Desarrollo de actividades
                </p>
              </button>
              {/* <li className='ml-6 leading-7 pl-4 text-[.85em] h-7 hover:bg-backgroud rounded-l-lg'>Calendario</li> */}
            </ul>
          </section>
        </div>
        <div className='max-sm:hidden px-8 py-2'>
          <div className='flex w-full justify-center items-center'>
            <p className='w-1/5 aspect-square text-center rounded-lg text-2xl bg-black text-white'>
              A
            </p>
            <p className='w-4/5 pl-2 text-sm leading-3'>
              <b>
                Administrador
              </b>
              <br />
              admin@admin.com
            </p>
          </div>
          <button onClick={onLogOut} className='flex w-full items-center hover:bg-backgroud rounded-sm pt-3'>
            <IconExit className='w-8 h-8 pt-1' />
            <p>
              Salir
            </p>
          </button>
        </div>
      </div>
      <div className='p-4 sm:w-full bg-backgroud'>
        <Outlet />
      </div>
    </div>
  )
}
