import React from 'react'
import Container from '../COMPONENTS/Container'
import Flex from '../COMPONENTS/Flex'
import Image from '../COMPONENTS/Image'
import Listitem from '../COMPONENTS/Listitem'
import Button from '../COMPONENTS/Button'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <section className='pt-10 pb-10 py-5 bg-red-400 items-center' >
        <Container>
            <Flex >
                <div className='w-1/3 '>
                <Link to="/"><Image src="/logo.png"/></Link>
                
                </div>
            <div className='w-2/3 '>
            <Flex className="gap-9 list-none text-[#FFFFFF]">
<Link to="/"> <Listitem  text='Home'/></Link>
  <Link to="/About"> <Listitem text='About'/></Link>
  <Link to="/contact"> <Listitem text='Contact'/></Link>
            <Listitem text='Service'/>
            <Listitem text='Blog'/>
            <Listitem text='About us'/>

             <Button className="" text="Let's talk"/>
            </Flex>

           
            
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber