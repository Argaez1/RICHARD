import React, {useState, useEffect, createContext}from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [mode, setMode] = useState('light')
    const toogle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }
    useEffect(() => {
        document.body.classList.remove('bg-light', 'bg-dark', 'text-light', 'text-dark');
        if(mode === 'dark') {
            document.body.classList.add('bg-dark', 'text-light');
        } else {
            document.body.classList.add('bg-light', 'text-dark');
        }
    }, [mode]);
return (
    <ThemeContext.Provider value={{mode, toogle}}>
        {children}
    </ThemeContext.Provider>
);
}

//export default ThemeContext