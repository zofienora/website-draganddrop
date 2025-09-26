import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import TypoOne from './components/typoone/TypoOne'

function App() {

  return (
    <>  
      <Header />  
      <About />    
      <section>
        <TypoOne baseVelocity={-30}>Framer Motion</TypoOne>
        <TypoOne baseVelocity={30}>Scroll velocity</TypoOne>
      </section>
    </>
  )
}

export default App;
