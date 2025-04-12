import React, {useId, forwardRef} from 'react'

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    labelColor="text-black",
    ...props
}, ref){

    const id = useId();

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className={`inline-block mb-1 pl-1 ${labelColor}`}>{label}</label>}
            <input type={type} className={`px-4 py-2 border-green-500 bg-transparent text-gray-300 ${className}`} {...props} ref={ref} id={id} />
        </div>
      )
})

export default Input
