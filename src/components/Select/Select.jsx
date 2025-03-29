import React, {forwardRef, useId} from 'react'

function Select({
    label = null,
    options,
    className = "",
    ...props
}, ref) {

    const id = useId();

  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
        <select id={id} className={`px-4 py-2 bg-green-600 text-white rounded-xl ${className}`}  {...props} ref={ref}>
            {
                options?.map((option) => (
                    <option key={option} value={option}>${option}</option>
                ))
            }
        </select>
    </div>
  )
}

export default forwardRef(Select)