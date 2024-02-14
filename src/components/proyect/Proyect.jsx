import '../../scss/proyect.scss';
import { Cards } from './Cards';
import dataCard from '../../data/CardsList.json';

export const Proyect = () => {
  return (
    <section id='proyect'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"  d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <h2 className='fist-title' >Proyect</h2>
      <div className='container-cards'>
        {
          dataCard.map(oneCard => < Cards key={oneCard.id} card={oneCard} />)
        }
      </div>
    </section>
  )
}
