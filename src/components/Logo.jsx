export default function Logo ({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src='/images/logo.webp'
        alt='Logo Uncp'
        className='w-full my-4 max-w-[120px]'
      />
    </div>
  )
}
