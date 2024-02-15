import '../../scss/contact.scss';
import DataContact from '../../data/dataContact.json';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3wx48oq', 'template_vz4t6pq', form.current, {
        publicKey: 'E8WaOQVsFs5lxvA8d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h2 className='fist-title' >Contacto</h2>
      <div className='container-links-msgs'>
        <div className='container-send-link'>
          {
            DataContact.map(oneLink => {
              return (
                <div className='box-icons-mgs' key={oneLink.id}>
                  <a href={oneLink.link}>
                    <i className={oneLink.icon}></i>
                    <h4>{oneLink.name}</h4>
                    <h5>{oneLink.info}</h5>
                    <h5>Enviar Mensaje</h5>
                  </a>
                </div>
              )
            })
          }
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu Nombre Completo' required />
          <input type="email" name='email' placeholder='Tu Email' required />
          <textarea name="message" placeholder='Tu Mensaje' rows="7" required></textarea>
          <button type='submit'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}
