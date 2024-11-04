import { useId } from 'react'

export default function Input ({
  value = '',
  label,
  placeholder = '',
  onChange,
  className = '',
  required = false,
  type = 'text',
  autoComplete = '',
  error = ''
}) {
  const inputId = useId()
  return (

    <div className={`my-1.5 relative ${className || 'w-full'}`}>
      <label
        htmlFor={inputId}
        className='left-2 -top-3.5 text-gray-800 text-sm transition-all'
      >
        {label}
        {required && <span className='text-red-600 font-bold inline-block mx-1'>*</span>}
        {error && <span className='text-red-600 font-bold inline-block ml-1'>{error}</span>}
      </label>
      <input
        id={inputId}
        value={value}
        onChange={onChange}
        required={required}
        type={type}
        autoComplete={autoComplete}
        className='peer w-full px-2 h-8 border rounded-md text-sm text-gray-900 focus:outline-none invalid:border-red-200'
        placeholder={placeholder}
      />
    </div>
  )
}
