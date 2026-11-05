import React from 'react'
import Navber from '../../src/Layout/Navber'
import Bunner from '../../src/Layout/Bunner'
import Rating from '../../src/Layout/Rating'
import Heading from '../../src/COMPONENTS/Heading'
import Card from '../../src/Layout/Card'
import Textpart from '../../src/Layout/Textpart'
import Engagepart from '../../src/Layout/Engagepart'
import Proudect from '../../src/Layout/Proudect'
import Prisingpart from '../../src/Layout/Prisingpart'
import Footer from '../../src/Layout/Footer'

const Home = () => {
  return (
    <div>
        <Navber/> 
          <Bunner/>
          <Rating/>
          <Heading className='text-center! pt-30 ' text='Industries in focus'></Heading>
          <Card/>
          <Textpart/>
          <Engagepart/>
        <Proudect/>
        <Prisingpart/>
        <Footer/>
    </div>
  )
}

export default Home