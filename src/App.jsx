import React from 'react'
import Navber from './Layout/Navber'
import Bunner from './Layout/Bunner'
import Rating from './Layout/Rating'
import Heading from './COMPONENTS/Heading'
import Card from './Layout/Card'

const App = () => {
  return (
    <div>
  <Navber/>
  <Bunner/>
  <Rating/>

  <Heading className='text-center! pt-20 pb-10' text='Industries in focus'></Heading>

  <Card/>
    </div>
  )
}

export default App
