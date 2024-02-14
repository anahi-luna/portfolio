
import { useThemesContext } from "../context/ThemeContext";

export const Themes = () => {
  const { contextTheme, handleChangeTheme } = useThemesContext();
  const changeIcon = () => {
    if (contextTheme === 'light') {
      return 'moon'
    } else {
      return 'sun'
    }
  }
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  return (
    <>
      <button className="btn-change-themes" onClick={() => handleChangeTheme()} ><i className={`far fa-${changeIcon()}`}></i></button>
      <button className="btn-change-themes arrow-top" onClick={()=> scrollToTop()} ><i className="fa-regular fa-circle-up"></i></button>
    </>
  )
}
