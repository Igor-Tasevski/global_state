import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

//this creates the global state
export const ThemeContext = createContext()



const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')


    const toggleTheme = () => {

        setTheme(() => (theme === "light" ? "dark" : "light"))

    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider