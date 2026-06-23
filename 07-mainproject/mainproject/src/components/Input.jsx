import React,{useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type="text",
    className ="",
    ...props
}, ref) {
    const id=useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}> //this syntax is most commanly used if label exists then only it will render the label otherwise it will not render the label.
                {label}
            </label>
            }
            <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}//...somthing is used to spread objects or arrays into individual elements.
            id={id}
            />
        </div>
    )
})

export default Input
