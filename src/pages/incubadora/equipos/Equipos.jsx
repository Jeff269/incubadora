import { IconPlus } from '../../../assets/Icons'
import Button from '../../../components/Button'
import Search from '../../../components/Search'
import ModalLateral from '../../../components/ModalLateral'
import { useState } from 'react'
import Input from '../../../components/Input'
import ListarEquipos from './ListarEquipos'
import useEquipos from '../../../hooks/useEquipos'

export default function Equipos () {
  const [showCrear, setShowCrear] = useState(false)

  const { equipos: mappedEquipos } = useEquipos()

  return (
    <main>
      <h1 className='font-bold'>
        EQUIPOS PARTICIPANTES
      </h1>
      <div className='w-full flex max-sm:flex-col'>
        <Search className='w-full sm:w-1/3' />
        <div className='flex w-full sm:w-2/3 text-sm sm:justify-end max-sm:justify-center max-sm:my-2'>
          <Button className='bg-gray-50 border hover:bg-gray-100'>
            IMPRIMIR REPORTE
          </Button>
          <Button onClick={() => setShowCrear(true)}>
            <IconPlus className='h-5 mr-2' />
            CREAR EQUIPO
          </Button>
        </div>
      </div>
      <div className='p-2 pt-3'>
        <ListarEquipos equipos={mappedEquipos} />
      </div>
      <ModalLateral
        isOpen={showCrear}
        title='Crear Equipo'
        onClose={() => { setShowCrear(false) }}
      >
        <div className='flex flex-wrap justify-end'>
          <Input
            className='w-full sm:w-1/2 pr-1'
            label='Nombre del Equipo'
            placeholder='Ingrese el nombre del Equipo'
            autoComplete='off'
          />
          <Input
            className='w-full sm:w-1/2 pl-1'
            label='Descripción del Equipo'
            placeholder='Ingrese el descripción del Equipo'
            autoComplete='off'
          />
          <Input
            className='w-full pl-1'
            label='Proyecto'
            placeholder='Ingrese el nombre Proyecto'
            autoComplete='off'
          />
          <Input
            className='w-full pl-1'
            label='Integrantes del Equipo'
            placeholder='Ingrese el Integrantes del Equipo'
            autoComplete='off'
          />
          <Button>
            Registrar
          </Button>
        </div>
      </ModalLateral>
    </main>
  )
}
