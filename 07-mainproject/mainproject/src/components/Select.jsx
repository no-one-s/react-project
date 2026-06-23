import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border-gray-200 w-full duration-200 border ${className}`}>
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default React.forwardRef(Select)
// React.forwardRef is a higher-order component that allows you to pass a ref through a component to one of its children.
//  In this case, it allows the parent component to access the ref of the select element inside the Select component.