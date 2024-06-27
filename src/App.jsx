import { useState } from 'react'
import styles from './Style'
import Navbar from "./Components/Navbar"
import Billing from "./Components/Billing"
import Buisness from "./Components/Buisness"
import Clients from "./Components/Clients"
import Footer from "./Components/Footer"
import Stats from "./Components/Stats"
import Testimonials from "./Components/Testimonials"
import Hero from './Components/Hero'
import CTA from './Components/CTA'
import Socials from './Components/Socials'



function App() {
  return (
    <div className=' w-full overflow-hidden'>
      <Navbar />
      <Hero/>
      <Stats/>
      <Buisness/>
      <Billing/>
      <Clients/>
      <CTA/>
      <Footer/>
      <Socials/>
    </div>
    
  )
}

export default App
