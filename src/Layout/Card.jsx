import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Container from '../COMPONENTS/Container'
import Image from '../COMPONENTS/Image'
import Heading from '../COMPONENTS/Heading'
import Subheding from '../COMPONENTS/Subheding'
import Flex from '../COMPONENTS/Flex'

const Card = () => {
  return (
    <section className='bg-[#FFFFFF1A]'>
        <Container>
            <Flex className={'justify-around! flex-wrap gap-2 '}>
                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px]'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px]'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px]'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px] mt-15'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px] mt-15'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[465px] mt-15'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-3!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-3 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>
              
                
            </Flex>
        </Container>
    </section>
  )
}

export default Card