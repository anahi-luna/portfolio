import NavBar from './navbar/Navbar';
import { Home } from './home/Home';
import { About } from './about/About';
import { Skill } from './skill/Skill';
import { Proyect } from './proyect/Proyect';
import { Contact } from './contact/Contact';
import { Themes } from './Themes';
import { Footer } from './Footer';

export const ContainerRow = () => {
  return (
    <>
      <NavBar />
      <Themes/>
      <Home />
      <About />
      <Skill />
      <Proyect />
      <Contact />
      <Footer/>
    </>
  )
}
