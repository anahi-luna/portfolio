import Perfil from "../../assets/images/FotoDePerfil-2.png";
import '../../scss/about.scss';
import CV from '../../assets/static/cv-anahi-luna.pdf';

export const About = () => {
  return (
    <section id='about'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"  d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="container-cv-text">
        <h2 className="fist-title">Sobre Mi</h2>
        <div className="box-img-text-btn">
          <img src={Perfil} alt="perfil" />
          <div className="container-text-icons">
            <h5>Desde que comencé a explorar el mundo de la programación, me fascinó el
              desarrollo web, y conforme estudiaba, mi interés creció aún más. Empecé a crear proyectos para
              poner en práctica lo aprendido y descubrí que me apasiona programar y enfrentar nuevos desafíos.
              Me siento cómodo trabajando en equipos y estoy ansioso por aprender más lenguajes para ampliar
              mi conocimiento en el mundo de la tecnología. Siempre estoy emocionado de enfrentar nuevos
              proyectos y contribuir con mis habilidades en este apasionante campo de IT.</h5>
            <div className="box-old-location">
              <h4><i className="fa-solid fa-user"></i> 22 Años</h4>
              <h4><i className="fa-solid fa-location-dot"></i> Buenos Aires - Argentina</h4>
            </div>
            <a href={CV}>
              <button>Ver Curriculum</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}