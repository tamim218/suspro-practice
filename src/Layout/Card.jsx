import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Container from '../COMPONENTS/Container'
import Image from '../COMPONENTS/Image'
import Heading from '../COMPONENTS/Heading'
import Subheding from '../COMPONENTS/Subheding'
import Flex from '../COMPONENTS/Flex'

const Card = () => {
  return (
    <section>
        <Container>
            <Flex className={'justify-around!'}>
                <div>
                    <Image src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center!'}>
    <p className='text-[#2C83BB] text-[18px]'>see more</p>
    <FaAngleRight />
</Flex>

                </div>
              <div>
                    <Image src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center!'}>
    <p className='text-[#2C83BB] text-[18px]'>see more</p>
    <FaAngleRight />
</Flex>

                </div>
                <div>
                    <Image src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center!'}>
    <p className='text-[#2C83BB] text-[18px]'>see more</p>
    <FaAngleRight />
</Flex>

                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Card