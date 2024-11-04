import { IconPlus } from '../../../assets/Icons'
import Button from '../../../components/Button'
import Search from '../../../components/Search'
import ListarConcursos from './ListarConcursos'

export default function Concursos () {
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
          <Button>
            <IconPlus className='h-5 mr-2' />
            CREAR CONCURSO
          </Button>
        </div>
      </div>
      <div className='p-2'>
        <ListarConcursos />
      </div>
    </main>
  )
}
