import React from 'react'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Notify from './componets/Notify'
import Cards from './componets/Cards'
import Footer from './componets/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter > 
      <Routes>
        <Route path='/about' element= {<About/>}/>
        <Route path='/' element= {<Hero/>}/>
        <Route path='/help' element= {<Notify/>}/>
        <Route path='/packages' element= {<Cards/>}/>
        <Route path='/contact' element= {<Footer/>}/>
      </Routes>
      </BrowserRouter>
      
      
     
    </div>
  )
}

export default App