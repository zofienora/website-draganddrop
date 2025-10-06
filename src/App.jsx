import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import TypoOne from './components/typoone/TypoOne'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>  
      <Header />  
      <About />    
      <section>
        <TypoOne baseVelocity={-5}>Framer Motion</TypoOne>
        <TypoOne baseVelocity={5}>Framer Motion</TypoOne>
      </section>
      <Projects />
    </>
  )
}

export default App;
