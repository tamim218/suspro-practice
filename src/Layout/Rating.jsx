import React from 'react'
import { FaStar } from "react-icons/fa6";
import Container from '../COMPONENTS/Container'
import Flex from '../COMPONENTS/Flex'
import Heading from '../COMPONENTS/Heading'
import Image from '../COMPONENTS/Image';
import Subheding from '../COMPONENTS/Subheding';

const Rating = () => {
    return (
        <section className='pt-10 bg-[#FFFFFF] shadow-[0_4px_20px_0_rgba(0,0,0,0.15)]"'>
            <Container>
                <Flex className='justify-around'>
                    <div className=' '>
                        <p className='text-[#2C83BB] font-bold pb-5'>Who we are?</p>
                        <Heading className='w-[740px]!' text='More than 5,000 users around the world are
already using STDEV actively'/>

                    </div>
                    <div className='w-[177px] h-[180px] bg-[#495E6C] border flex flex-col justify-center items-center '>
                        <Heading text='4.8' />
                        <Flex className='pt-2 pb-2 gap-1'>
                            <FaStar className='text-[#FF7282]' />
                            <FaStar className='text-[#FF7282]' />
                            <FaStar className='text-[#FF7282]' />
                            <FaStar className='text-[#FF7282]' />
                            <FaStar className='text-[#FF7282]' />

                        </Flex>

                        <h5 className='  text-base'>35 Reviews</h5>

                    </div>
                </Flex>


                <Flex className={'pt-10 justify-around'}>
                    <div>
                        <Flex className='gap-5'>
                            <div>
                                <Image src='public/rattingimg1.png' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[38px] text-[#2C83BB]'>70+</h1>
                                <Subheding className='text-[#495E6C]!' text='Professionals' />
                            </div>
                        </Flex>
                    </div>
                    <div>
                        <Flex className='gap-5'>
                            <div>
                                <Image src='public/rattingimg1.png' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[38px] text-[#2C83BB]'>22 Years+</h1>
                                <Subheding className='text-[#495E6C]!' text='Year of experience' />
                            </div>
                        </Flex>
                    </div>
                    <div>
                        <Flex className='gap-5'>
                            <div>
                                <Image src='public/rattingimg1.png' />
                            </div>
                            <div>
                                <h1 className='font-bold text-[38px] text-[#2C83BB]'>$40+M</h1>
                                <Subheding className='text-[#495E6C]!' text='Fundraised by customers' />
                            </div>
                        </Flex>
                    </div>
                </Flex>


            </Container>
        </section>
    )
}

export default Rating