import React from 'react'
import Container from '../COMPONENTS/Container'
import Image from '../COMPONENTS/Image'
import Heading from '../COMPONENTS/Heading'
import Subheding from '../COMPONENTS/Subheding'
import Flex from '../COMPONENTS/Flex'
import Button from '../COMPONENTS/Button'

const Engagepart = () => {
    return (
        <div className='mt-15 pb-30'>
            <Container>
                <Flex className={'items-center'}>
                    <div>
                        <Image src={'public/engageimage.png'} />
                    </div>
                    <div>
                        <Heading className={'w-[433px] pt-5'} text='Don’t just engage, make it
engaging.'/>

                        <Subheding className='text-[#495E6C]! w-[552px]! font-normal pt-5 pb-10' text='Since 1999. For millions of users. We transform businesses with powerful and
adaptable digital solutions.'/>
                        <Subheding className='text-[#495E6C]! w-[552px]! font-normal pb-5' text='Since 1999. For millions of users. We transform businesses with powerful and
adaptable digital solutions.'/>

                        <Button className={'bg-[#2C83BB]! w-[181px] h-[80px] text-[#FFFFFF]'} text='See more' />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Engagepart