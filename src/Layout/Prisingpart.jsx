import React from 'react'
import Container from '../COMPONENTS/Container'
import Heading from '../COMPONENTS/Heading'
import Flex from '../COMPONENTS/Flex'
import { FaCheck } from "react-icons/fa";
import Prisingcard from '../COMPONENTS/Prisingcard';
import Button from '../COMPONENTS/Button';


const Prisingpart = () => {
    return (
        <section>
            <Container>
                <Heading className={'pt-20 pb-5 text-center'} text='Affordable Pricing' />

                <Flex className={'items-center gap-x-5 justify-center pb-10'}>
                    <h4>Monthly</h4>

                    <Flex className='w-[80px] h-[40px] bg-[#2C83BB] rounded-full justify-end'>
                        <div className='w-[40px] h-[30px] bg-[#FFFFFF] rounded-[38px] py-5'></div>
                    </Flex>
                    <h4>Yearly</h4>
                </Flex>


                <Flex className={'gap-x-5'}>
                    <div className='pl-10 bg-[#F3F3F3] w-[380px] h-[510px]'>

                        <flex>
                            <div className=''>
                                <h1 className='font-bold text-[22px] pt-10 pb-2'>Free Plan</h1>
                                <Flex className={'items-center pb-15 border-b-4 border-[#2C83BB40]'}>
                                    <Heading className={''} text='$0' />
                                    <h5>/ monthly</h5>
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pt-10 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Button className={'mt-7 w-[185px] h-[80px] bg-[#2C83BB]!'} text='Try for Free' />

                            </div>
                        </flex>
                    </div>
                    <div className='pl-10 bg-[#F3F3F3] w-[380px] h-[510px]'>

                        <flex>
                            <div className=''>
                                <h1 className='font-bold text-[22px] pt-10 pb-2'>Premium Plan</h1>
                                <Flex className={'items-center pb-15 border-b-4 border-[#2C83BB40]'}>
                                    <Heading className={''} text='$999' />
                                    <h5>/ monthly</h5>
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pt-10 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Button className={'mt-7 w-[185px] h-[80px] bg-[#2C83BB]!'} text='Try for Free' />

                            </div>
                        </flex>
                    </div>

                    <div className='pl-10 bg-[#F3F3F3] w-[380px] h-[510px]'>

                        <flex>
                            <div className=''>
                                <h1 className='font-bold text-[22px] pt-10 pb-2'>Free Plan</h1>
                                <Flex className={'items-center pb-15 border-b-4 border-[#2C83BB40]'}>
                                    <Heading className={''} text='$0' />
                                    <h5>/ monthly</h5>
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pt-10 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Flex className={'items-center  gap-x-5 pb-4'}>
                                    <FaCheck />
                                    <Prisingcard text='Access to editing all blocks' />
                                </Flex>

                                <Button className={'mt-7 w-[185px] h-[80px] bg-[#2C83BB]!'} text='Try for Free' />

                            </div>
                        </flex>
                    </div>


                </Flex>
            </Container>
        </section>
    )
}

export default Prisingpart