export default function Button ({ className, children, ...props }) {
  return (
    <button {...props} className={`text-uppercase px-4 h-8 leading-3 mx-1 rounded-md text-sm flex justify-center items-center transition-all ${className || 'text-white bg-cyan-900 hover:bg-cyan-950'}`}>
      {children}
    </button>
  )
}
