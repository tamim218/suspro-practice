import React from 'react'
import Navber from './Layout/Navber'
import Bunner from './Layout/Bunner'
import Rating from './Layout/Rating'
import Heading from './COMPONENTS/Heading'
import Card from './Layout/Card'
import Textpart from './Layout/Textpart'
import Engagepart from './Layout/Engagepart'
import Proudect from './Layout/Proudect'

const App = () => {
  return (
    <div>
  <Navber/>
  <Bunner/>
  <Rating/>
  <Heading className='text-center! pt-20 pb-10' text='Industries in focus'></Heading>
  <Card/>
  <Textpart/>
  <Engagepart/>
<Proudect/>
    </div>
  )
}

export default App
