import { useLocation, Link } from 'react-router-dom'

export default function MenuLink ({ link, title }) {
  const location = useLocation()

  return (
    <Link to={link} className='w-full h-7'>
      <p className={`ml-6 leading-7 pl-4 text-[.85em] h-7 w-full hover:bg-background rounded-l-lg ${location.pathname === link && 'font-bold'}`}>
        {title}
      </p>
    </Link>
  )
}
