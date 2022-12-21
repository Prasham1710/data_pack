import React from 'react'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import Analytics from './componets/analytics'
import Notify from './componets/Notify'
import Cards from './componets/Cards'
import Footer from './componets/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Notify />
      <Cards />
      <Footer/>
    </div>
  )
}

export default App