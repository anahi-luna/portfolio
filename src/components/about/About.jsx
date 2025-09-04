import Perfil from "../../assets/images/perfil-anahi.jpeg";
import '../../scss/about.scss';
import CV from '../../assets/static/cv-Rebeca-luna.pdf';

export const About = () => {
  const birthDate = new Date(2001, 2, 26); 
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }
  return (
    <section id='about'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="container-cv-text">
        <h2 className="fist-title">Sobre Mi</h2>
        <div className="box-img-text-btn">
          <img src={Perfil} alt="perfil" />
          <div className="container-text-icons">
            <h5>Desde que ingresé al mundo de la programación, he encontrado un profundo interés en el desarrollo web, el cual ha ido en aumento a medida que he avanzado en mis estudios. A lo largo del tiempo, he creado diversos proyectos para poner en práctica mis conocimientos adquiridos, lo que me ha permitido descubrir una pasión por programar y abordar nuevos desafíos. Me siento cómodo colaborando en equipos multidisciplinarios y estoy ansioso por seguir ampliando mis habilidades en tecnologías adicionales. Constantemente busco enfrentar nuevos proyectos y contribuir con mis capacidades en este emocionante campo de la tecnología de la información.</h5>
            <div className="box-old-location">
              <h4><i className="fa-solid fa-user"></i> {age} Años</h4>
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