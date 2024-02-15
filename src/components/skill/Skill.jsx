import '../../scss/skill.scss';
import Slider from 'react-slick';
import { CardItem } from './CardItem';
import dataFrond from '../../data/itemListFrond.json';
import dataBack from '../../data/itemListBack.json';
import ImgPostman from '../../assets/images/postman.svg';
import ImgScrum from '../../assets/images/scrum.svg';

export const Skill = () => {
  
  const settings = {
    className: "center",
    infinite: true,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "10px",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ],
  }
  return (
    <section id='skill'>
      <div className='container-slider-tools'>
        <h2 className='fist-title' >Habilidades</h2>
        <div className="content-carousel-items-title">
          <h3 className='title-skills-items'><i className="fas fa-file-code"></i>Frontend</h3>
          <div className='content-carousel'>
            <Slider {...settings}>
              {
                dataFrond.map(oneItem => <CardItem key={oneItem.id} item={oneItem} />)
              }
            </Slider>
          </div>
        </div>
        <div className="content-carousel-items-title">
          <h3 className='title-skills-items'><i className="fas fa-server"></i>Backend</h3>
          <div className='content-carousel'>
            <Slider {...settings}>
              {
                dataBack.map(oneItem => < CardItem key={oneItem.id} item={oneItem} />)
              }
            </Slider>
          </div>
        </div>
        <div className="content-carousel-items-title">
          <h3 className='title-skills-items'><i className="fas fa-toolbox"></i>Herramientas</h3>
          <div className="content-tools">
            <p><img src={ImgPostman} alt="logooo" />Postman</p>
            <p><img src={ImgScrum} alt="logooo" />Scrum</p>
            <p><i className="fa-brands fa-git-alt"></i>Git</p>
            <p><i className="fa-brands fa-figma"></i>Figma</p>
          </div>
        </div>
      </div>
    </section>
  )
}
