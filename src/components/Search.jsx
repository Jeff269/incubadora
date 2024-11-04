import { IconSearch } from '../assets/Icons'

export default function Search ({ className }) {
  return (
    <div className={`relative ${className}`}>
      <input type='text' className='w-full h-8 rounded-lg pl-8 text-gray-700 placeholder:text-gray-700 text-sm focus:outline-none focus:shadow-md transition-shadow' placeholder='Buscar...' />
      <IconSearch className='w-5 aspect-square absolute top-1.5 left-1.5 text-gray-700' />
    </div>
  )
}
