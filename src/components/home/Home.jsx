import '../../scss/home.scss'
import { AnimateBg } from './AnimateBg'
import LogoHome from "../../assets/images/logo-sin-fondo.png";

export const Home = () => {
  return (
    <section id='home'>
      <AnimateBg />
      <div className='row'>
        <div className='box-titles-icons'>
          <h1 className='title-first'>Hola, soy </h1>
          <h2 className='title-second'>Rebeca Anahi</h2>
          <h3 className='title-three'>Luna Colque</h3>
          <h5 className='box-text-animated'> <div className='custom-div'></div></h5>
          <ul className='list-icons'>
            <li><a href="https://github.com/anahi-luna"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/anahiluna/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="mailto:rebeca.anahi.luna@gmail.com"><i className="fas fa-envelope"></i></a></li>
          </ul>
        </div>
        <div className='animated-text'>
          <img src={LogoHome} alt="logo" />
          <div className='title-logo'></div>
        </div>
      </div>
    </section>
  )
}
