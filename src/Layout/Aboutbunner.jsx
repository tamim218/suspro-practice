import React from 'react'
import Flex from '../COMPONENTS/Flex'
import Heading from '../COMPONENTS/Heading'
import Subheding from '../COMPONENTS/Subheding'
import Image from '../COMPONENTS/Image'
import Container from '../COMPONENTS/Container'
import { FaArrowRightLong } from "react-icons/fa6";

const Aboutbunner = () => {
    return (
        <div className='bg-[#1C1E53] pt-30 pb-30'>
            <Container>
                <Flex>
                    <div>
                        <Heading className='text-[#FFFFFF]! w-[402px]! pb-8' text='Building stellar websites for early startups' />
                        <Subheding className='text-[#FFFFFF]! w-[502px]! pb-8' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' />

                        <Flex className='gap-5 items-center!'>
                            <button className='w-[230px] h-[83px] bg-[#FCD980] text-[#1B1C2B] rounded-full'>View our work</button>
                            <Flex className='gap-3 items-center!'>
                                <h5 className='text-[#FFFFFF]!'>View Pricing </h5>
                                <   FaArrowRightLong className='text-white' />
                            </Flex>

                        </Flex>
                    </div>
                    <div>
                        <Image src='/aboutpart.png' />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Aboutbunner