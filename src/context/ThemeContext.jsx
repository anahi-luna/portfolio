import { createContext, useContext, useState } from "react";

export const ThemesContext = createContext();

export const ThemesProvider = ({children})=>{
    const [contextTheme, setContextTheme]=useState('light');
    const handleChangeTheme=()=>{
        setContextTheme(state=>(state==='light'?'dark':'light'))
        console.log(setContextTheme);
    }

    return(
        <ThemesContext.Provider value={{contextTheme,handleChangeTheme}} >
            {children}
        </ThemesContext.Provider>
    )
}

export function useThemesContext(){
    return useContext(ThemesContext)
}