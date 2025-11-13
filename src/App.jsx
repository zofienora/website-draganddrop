import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import TypoOne from './components/typoone/TypoOne'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>  
      <Header />  
      <About />    
      <section>
        <TypoOne baseVelocity={-5}>CURRENT WORKS   ... </TypoOne>
      </section>
      <Projects />
      <Contact />
    </>
  )
}

export default App;
