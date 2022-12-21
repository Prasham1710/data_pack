import React from 'react'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import Analytics from './componets/analytics'
import Notify from './componets/Notify'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Notify />
    </div>
  )
}

export default App