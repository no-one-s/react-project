import React, { useState, useEffect } from 'react'
import ToggleThemeContext from './ToggleThemeContext'

const ToggleThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        console.log('ToggleThemeContextProvider mounted/updated — theme:', theme)
    }, [theme])
    return (
        <ToggleThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ToggleThemeContext.Provider>
    )
}

export default ToggleThemeContextProvider;