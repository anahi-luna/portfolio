import React from 'react'
import Logo from "../../assets/images/logo-sin-fondo.png";
import dataNavbarTop from "../../data/dataNavbarTop.json";
import { useButtonContext } from '../../context/ButtonContext';

export const WrapperDesktop = () => {
    const { handleButtonClick, activeButton } = useButtonContext()
    return (
        <>
            <div className="wrapper-desktop" >
                <div className="box-logo-text">
                    <img src={Logo} alt="logo" />
                    <p>DevCode</p>
                </div>
                <ul className="list-menu">
                    {
                        dataNavbarTop.map(oneTitle =>{
                            return(
                                <li key={oneTitle.id}><a href={oneTitle.link} className={activeButton === oneTitle.link? 'active':''} onClick={()=>handleButtonClick(oneTitle.link)} >{oneTitle.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
