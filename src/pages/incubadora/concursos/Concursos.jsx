import { IconPlus } from '../../../assets/Icons'
import Button from '../../../components/Button'
import Search from '../../../components/Search'
import ListarConcursos from './ListarConcursos'
import useConcurso from '../../../hooks/useConcursos'
import ModalLateral from '../../../components/ModalLateral'
import { useState } from 'react'
import Input from '../../../components/Input'

export default function Concursos () {
  const { concursos: mappedConcursos } = useConcurso()
  const [showCrear, setShowCrear] = useState(false)

  return (
    <main>
      <h1 className='font-bold'>
        CONCURSOS
      </h1>
      <div className='w-full flex max-sm:flex-col'>
        <Search className='w-full sm:w-1/3' />
        <div className='flex w-full sm:w-2/3 text-sm sm:justify-end max-sm:justify-center max-sm:my-2'>
          <Button className='bg-gray-50 border hover:bg-gray-100'>
            IMPRIMIR REPORTE
          </Button>
          <Button onClick={() => setShowCrear(true)}>
            <IconPlus className='h-5 mr-2' />
            CREAR CONCURSO
          </Button>
        </div>
      </div>
      <div className='p-2 pt-3'>
        <ListarConcursos concursos={mappedConcursos} />
      </div>
      <ModalLateral
        isOpen={showCrear}
        title='Crear Concurso'
        onClose={() => { setShowCrear(false) }}
      >
        <div className='flex flex-wrap justify-end'>
          <Input
            className='w-full sm:w-1/2 pr-1'
            label='Nombre del Concurso'
            placeholder='Ingrese el nombre del concurso'
            autoComplete='off'
          />
          <Input
            className='w-full sm:w-1/2 pl-1'
            label='Descripción del Concurso'
            placeholder='Ingrese el descripción del concurso'
            autoComplete='off'
          />
          <Input
            className='w-full sm:w-1/2 pr-1'
            label='Fecha de Inicio'
            type='date'
            autoComplete='off'
          />
          <Input
            className='w-full sm:w-1/2 pl-1'
            label='Fecha Final'
            type='date'
            autoComplete='off'
          />
          <Input
            className='w-full pl-1'
            label='Requisitos'
            placeholder='Ingrese los requisitos'
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
