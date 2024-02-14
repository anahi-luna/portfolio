import React from 'react'
import dataIcons from "../../data/dataIcons.json"; 
import { useButtonContext } from '../../context/ButtonContext';

const datos = dataIcons;

export const WrapperMobile = () => {
    const { handleButtonClick, activeButton }= useButtonContext();
    return (
        <>
            <ul className="wrapper-mobile">
                {
                    datos.map(oneIcon => {
                        return(
                            <li key={oneIcon.id}><a className={activeButton === oneIcon.link? 'active':''} href={oneIcon.link} onClick={()=> handleButtonClick(oneIcon.link)} ><i className={`fa-solid fa-${oneIcon.icon}`}></i></a></li>
                        )
                    })
                }
            </ul>
        </>
    )
}
