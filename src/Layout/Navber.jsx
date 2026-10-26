import React from 'react'
import Container from '../COMPONENTS/Container'
import Flex from '../COMPONENTS/Flex'
import Image from '../COMPONENTS/Image'
import Listitem from '../COMPONENTS/listitem'
import Button from '../COMPONENTS/Button'

const Navber = () => {
  return (
    <section className='pt-5 py-5 bg-red-400 items-center' >
        <Container>
            <Flex >
                <div className='w-1/3 '>
                <Image src="public/logo.png"/>
                
                </div>
            <div className='w-2/3 '>
            <Flex className="gap-9 list-none text-[#FFFFFF]">
            <Listitem  text='Home'/>
            <Listitem text='About'/>
            <Listitem text='Contect'/>
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