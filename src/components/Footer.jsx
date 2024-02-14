import '../scss/footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <h2>Rebeca Anahi Luna Colque</h2>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <ul className='list-icons-footer'>
        <li><a href="https://github.com/anahi-luna"><i className="fab fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/anahiluna/"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="mailto:rebeca.anahi.luna@gmail.com"><i className="fas fa-envelope"></i></a></li>
      </ul>
    </div>
  )
}
