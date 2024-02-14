import { createContext, useState, useContext} from "react";

export const ButtonContext= createContext();

export const ButtonProvider =({children})=>{
    const [activeButton, setActiveButton]= useState('');
    const handleButtonClick = (btnId) =>{
        setActiveButton(btnId);
    }
    return(
            <ButtonContext.Provider value={{activeButton,handleButtonClick}} >
                {children}
            </ButtonContext.Provider>
    )
}
export function useButtonContext(){
    return useContext(ButtonContext)
}
