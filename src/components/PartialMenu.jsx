import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PartialMenu ({ icon, title, path = '*', children }) {
  const location = useLocation()
  const isPath = location.pathname.slice(0, path.length) === path
  const [content, setContent] = useState(isPath)

  return (
    <ul className='text-sm w-full'>
      <button
        onClick={() => setContent(!content)}
        className={`w-full flex items-center hover:bg-background h-10 pl-2 rounded-l-lg my-1 ${isPath && 'bg-background'}`}
      >
        {icon}
        <p>
          {title}
        </p>
      </button>
      <div className={`max-height-animate ease-in-out overflow-hidden transition-all duration-400 ${!content ? 'max-h-[0px]' : 'max-h-[800px]'}`}>
        <div className={`transition-opacity duration-300 ${!content ? 'opacity-0' : 'opacity-100 scale-y-100'}`}>
          {children}
        </div>
      </div>
    </ul>
  )
}
