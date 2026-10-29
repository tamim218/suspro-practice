import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Container from '../COMPONENTS/Container'
import Image from '../COMPONENTS/Image'
import Heading from '../COMPONENTS/Heading'
import Subheding from '../COMPONENTS/Subheding'
import Flex from '../COMPONENTS/Flex'

const Card = () => {
  return (
    <section className='bg-[#FFFFFF1A] pb-30'>
        <Container>
            <Flex className={'justify-around! flex-wrap gap-3 '}>
                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px]'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-8!'} text='FinTech'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px]'>
                    <Image className='w-full' src='/public/cardimage2.png'/>
                    <Heading className={'pt-8!'} text='Telecom'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px]'>
                    <Image className='w-full' src='/public/cardimage3.png'/>
                    <Heading className={'pt-8!'} text='Retail'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px] mt-15'>
                    <Image className='w-full' src='/public/cardimage3.png'/>
                    <Heading className={'pt-8!'} text='Transportation'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px] mt-15'>
                    <Image className='w-full' src='/public/cardimage2.png'/>
                    <Heading className={'pt-8!'} text='eLearning'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
<Flex className={'items-center! pb-10'}>
    <p className='text-[#2C83BB] text-[18px] '>see more</p>
    <FaAngleRight />
</Flex>

                </div>

                <div className='shadow-2xl bg-[#00000014] w-[380px] h-[490px] mt-15'>
                    <Image className='w-full' src='/public/cardimage1.png'/>
                    <Heading className={'pt-8!'} text='Artificial Intelligence'/>
                    <Subheding className={'text-[#495E6C]! w-[287px] pt-6 pb-3!'} text='Psum dolor sit amet, consectetur
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