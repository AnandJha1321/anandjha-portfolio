import {Link, Element} from 'react-scroll'
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Technologies from "./sections/Technologies"
import Projects from "./sections/Projects"
import ContactSection from "./sections/Contact"

function App() {  


  return (
    <main className="">
      <Header/>
       <Element name='home'>
           <Hero/>
      </Element>

      <Element name='projects'>
         <Projects/>
      </Element>

      <Technologies/>

      <Element name='contact'>
       <ContactSection/>
      </Element>

      
    </main>
  )
}

export default App
