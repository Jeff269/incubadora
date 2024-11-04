import { useEffect, useState } from 'react'
import { IconX } from '../assets/Icons'

export default function ModalLateral ({ isOpen = false, title, onClose, children }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    } else {
      // Agrega un pequeño retraso para que se complete la animación de salida antes de desmontar el modal
      const timer = setTimeout(() => setShowModal(false), 300) // 300ms coincide con la duración de la animación
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={`fixed top-0 right-0 h-screen w-full transition-all bg-gray-600/30 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`w-full transition-all duration-300 sm:w-[70vw] bg-white right-0 fixed h-full p-4 ${showModal ? 'translate-x-0 opacity-100' : ' translate-x-24 opacity-0'}`}>
        <div className='flex w-full justify-between items-center'>
          <h1 className='font-bold uppercase'>
            {title || ' '}
          </h1>
          <button
            onClick={() => {
              setShowModal(false)
              const timer = setTimeout(() => { onClose() }, 300) // 300ms coincide con la duración de la animación
              return () => clearTimeout(timer)
            }}
            className='p-1 rounded-full border hover:scale-105 transition-all hover:shadow-md text-gray-700'
          >
            <IconX className='h-5 w-5' />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
