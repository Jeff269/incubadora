export default function Element ({ children, ...props }) {
  return (
    <div {...props} className='w-full flex my-1 bg-white min-h-16 items-center uppercase text-sm leading-3 rounded-md transition-all hover:scale-[101%] hover:shadow-md'>
      {children}
    </div>
  )
}
