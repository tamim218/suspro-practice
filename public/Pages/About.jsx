import React from 'react'
import Container from '../../src/COMPONENTS/Container'

import Navber from '../../src/Layout/Navber'
import Footer from '../../src/Layout/Footer'
import Card from '../../src/Layout/Card'
import Aboutbunner from '../../src/Layout/Aboutbunner'
import Textpart from '../../src/Layout/Textpart'

const About = () => {
  return (
    <div>
        
            <Navber/>
           <Aboutbunner/>
           <Textpart/>
        <Footer/>
    </div>
  )
}

export default About