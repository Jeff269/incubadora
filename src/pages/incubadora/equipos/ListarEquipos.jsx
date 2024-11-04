import Element from '../../../components/Elements'

export default function ListarEquipos ({ equipos }) {
  return (
    <div className='text-center'>
      <ul className='flex justify-between text-sm my-1 font-bold'>
        <li className='w-1/6 sm:w-1/12'>N°</li>
        <li className='w-4/6 sm:w-5/12 text-start'>Nombre</li>
        <li className='w-4/6 sm:w-5/12 text-start max-sm:hidden'>Integrantes</li>
        <li className='w-1/12' />
      </ul>
      {
        equipos.map((equipos, index) =>
          <Element key={index}>
            <p className='w-1/6 sm:w-1/12'>{index + 1}</p>
            <p className='w-4/6 sm:w-5/12 text-start'>{equipos.equipo}</p>
            <p className='w-4/6 sm:w-5/12 text-start max-sm:hidden'>
              {
                equipos.integrantes.map(integrante =>
                  <span key={integrante}>
                    {integrante}
                    <br />
                  </span>
                )
              }
            </p>
            <p className='w-1/12 text-center'>
              <button className='w-6 h-6 aspect-square transition-all hover:bg-gray-200 rounded-full p-1'>...</button>
            </p>
          </Element>
        )
      }
    </div>
  )
}
