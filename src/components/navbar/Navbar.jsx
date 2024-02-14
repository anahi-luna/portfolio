import '../../scss/navbar.scss';
import { useEffect, useState } from "react";
import { ButtonProvider } from '../../context/ButtonContext';
import { WrapperDesktop } from './WrapperDesktop';
import { WrapperMobile } from './WrapperMobile';

const NavBar = () => {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [navbarStyle, setNavbarStyle] = useState(false)
    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollDirection('down');
                setNavbarStyle(true)
            } else {
                setScrollDirection('up');
                setNavbarStyle(false)
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <ButtonProvider>
            <div className={`navbar ${navbarStyle ? 'hidden' : ''}`}>
                <WrapperMobile />
                <WrapperDesktop />
            </div>
        </ButtonProvider>
    )
}
export default NavBar;

