import { useState } from 'react'
import { IconHome } from '../assets/Icons'

export default function PartialMenu ({ children }) {
  const [content, setContent] = useState(false)

  return (
    <ul className='text-sm px-4 w-full'>
      <button
        onClick={() => setContent(!content)}
        className='w-full flex items-center hover:bg-backgroud h-10 pl-2 rounded-l-lg'
      >
        <IconHome className='h-4 w-4 mx-2' />
        <p>
          Incubadora de Empresas
        </p>
      </button>
      {
        content &&
        { children }
      }
    </ul>
  )
}
