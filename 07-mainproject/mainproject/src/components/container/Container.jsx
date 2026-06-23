import React from 'react'

function Container({children}) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
    )
}

export default Container

//this component is used to wrap the content of the page and provide a consistent layout. 
// It uses Tailwind CSS classes to set the width, max-width, margin, and padding of the container.
//  The children prop allows any nested components or elements to be rendered inside the container.