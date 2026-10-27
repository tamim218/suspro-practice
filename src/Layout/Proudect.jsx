import React from 'react'
import Container from '../COMPONENTS/Container'
import Heading from '../COMPONENTS/Heading'
import Flex from '../COMPONENTS/Flex'
import Image from '../COMPONENTS/Image'
import Subheding from '../COMPONENTS/Subheding'
import { FaAngleRight } from "react-icons/fa6";


const Proudect = () => {
    return (
        <section className='bg-[#F3F3F3]'>
            <Container>
                <Heading className={'text-center! pt-20 pb-20'} text='The Product we work with.' />

                <Flex className={'flex-row gap-5'}>
                    <div className='bg-[#FFFFFF] shadow-2xl pl-6 w-[380px]'>
                        <Image className={'pt-5 pb-5'} src='public/product.png' />
                        <Heading text='Consulting' />
                        <Subheding className={'text-[#495E6C]! pt-5 pb-5 w-[292px]'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
                        <Flex className={'items-center! pb-10'}>
                            <p className='text-[#2C83BB] text-[18px] '>see more</p>
                            <FaAngleRight />
                        </Flex>
                    </div>

                    <div className='bg-[#FFFFFF] shadow-2xl pl-6 w-[380px]'>
                        <Image className={'pt-5 pb-5'} src='public/product.png' />
                        <Heading text='Consulting' />
                        <Subheding className={'text-[#495E6C]! pt-5 pb-5 w-[292px]'} text='Psum dolor sit amet, consectetur
adipiscing elit. Nisi, maecenas orci sit
pellentesque eget.'/>
                        <Flex className={'items-center! pb-10'}>
                            <p className='text-[#2C83BB] text-[18px] '>see more</p>
                            <FaAngleRight />
                        </Flex>
                    </div>

                    <div className='bg-[#FFFFFF] shadow-2xl pl-6 w-[380px]'>
                        <Image className={'pt-5 pb-5'} src='public/product.png' />
                        <Heading text='Consulting' />
                        <Subheding className={'text-[#495E6C]! pt-5 pb-5 w-[292px]'} text='Psum dolor sit amet, consectetur
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

export default Proudect