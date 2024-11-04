import Element from '../../../components/Elements'
import useConcurso from '../../../hooks/useConcursos'

export default function ListarConcursos ({ concursos }) {
  const { concursos: mappedConcursos } = useConcurso()

  const keys = Object.keys(mappedConcursos[0])
  console.log(keys)

  return (
    <div className='text-center'>
      <ul className='flex justify-between text-sm my-1 font-bold'>
        <li className='w-1/6 sm:w-1/12'>N°</li>
        <li className='w-4/6 sm:w-3/12 text-start'>Nombre</li>
        <li className='sm:w-2/12 max-sm:hidden'>Fechas</li>
        <li className='sm:w-2/12 max-sm:hidden'>N° Participantes</li>
        <li className='sm:w-2/12 max-sm:hidden'>Estado</li>
        <li className='sm:w-2/12' />
      </ul>
      {
        mappedConcursos.map((concurso, index) =>
          <Element key={index}>
            <p className='w-1/6 sm:w-1/12'>{index + 1}</p>
            <p className='w-4/6 sm:w-3/12 text-start'>{concurso.nombre}</p>
            <p className='sm:w-2/12 max-sm:hidden'>{concurso.fecha_fin}</p>
            <p className='sm:w-2/12 max-sm:hidden'>{concurso.participantes.length}</p>
            <p className='sm:w-2/12 max-sm:hidden text-xs p-1'>
              {
                concurso.estado === 'finalizado' && (
                  <b className='text-[0.95em] text-red-600 font-bold p-1 border bg-red-200 px-2 rounded-md'>
                    {concurso.estado}
                  </b>
                )
              }
              {
                concurso.estado === 'publicado' && (
                  <b className='text-[0.95em] text-blue-600 font-bold p-1 border bg-blue-200 px-2 rounded-md'>
                    {concurso.estado}
                  </b>
                )
              }
              {
                concurso.estado === 'visible' && (
                  <b className='text-[0.95em] text-green-600 font-bold p-1 border bg-green-200 px-2 rounded-md'>
                    {concurso.estado}
                  </b>
                )
              }
            </p>
            <p className='sm:w-2/12'>...</p>
          </Element>
        )
      }
    </div>
  )
}
