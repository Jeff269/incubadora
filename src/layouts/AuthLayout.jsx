import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { IconBox, IconChart, IconExit, IconHome, IconMenu, IconWeb } from '../assets/Icons'
import PartialMenu from '../components/PartialMenu'
import MenuLink from '../components/MenuLink'

export default function AuthLayout () {
  const navigate = useNavigate()
  const onLogOut = () => {
    navigate('/')
  }

  return (
    <div className='flex w-full max-sm:flex-col bg-background '>
      <div className='sm:w-[300px] sm:h-screen flex flex-col justify-between bg-white rounded-br-2xl overflow-hidden'>
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
            <PartialMenu
              title='Incubadora de Empresas'
              icon={<IconHome className='h-4 w-4 mx-2' />}
              path='/incubadora'
            >
              <MenuLink link='/incubadora/concursos' title='Concursos' />
              <MenuLink link='/incubadora/equipos' title='Equipos Participantes' />
              <MenuLink link='/incubadora/integrantes' title='Integrantes' />
              <MenuLink link='/incubadora/talleres' title='Talleres' />
              <MenuLink link='/incubadora/proyectos' title='Proyectos de emprendimiento' />
            </PartialMenu>
            <PartialMenu
              title='Desarrollo Empresarial'
              icon={<IconChart className='h-4 w-4 mx-2' />}
            >
              <MenuLink link='/desarrollo/talleres' title='Talleres' />
              <MenuLink link='/desarrollo/empresas' title='Empresas Participantes' />
              <MenuLink link='/desarrollo/asistencias' title='Asistencias Técnicas' />
              <MenuLink link='/desarrollo/ferias' title='Ferias y eventos' />
            </PartialMenu>
            <PartialMenu
              title='Red Incuba Centro'
              icon={<IconWeb className='h-4 w-4 mx-2' />}
            >
              <MenuLink link='/red/aliados' title='Red de Aliados' />
              <MenuLink link='/red/convenios' title='Convenios' />
              <MenuLink link='/red/emprendedores' title='Red de Emprendedores' />
              <MenuLink link='/red/mentores' title='Red de Mentores' />
              <MenuLink link='/red/inversores' title='Red de Inversores' />
              <MenuLink link='/red/equipos' title='Red de Equipos' />
            </PartialMenu>
            <PartialMenu
              title='Desarrollo de Actividades'
              icon={<IconBox className='h-4 w-4 mx-2' />}
            >
              <MenuLink link='/actividades' title='Calendario' />
            </PartialMenu>
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
          <button onClick={onLogOut} className='flex w-full items-center hover:bg-background rounded-sm pt-3'>
            <IconExit className='w-8 h-8 pt-1' />
            <p>
              Salir
            </p>
          </button>
        </div>
      </div>
      <div className='p-4 sm:w-full bg-background'>
        <Outlet />
      </div>
    </div>
  )
}
