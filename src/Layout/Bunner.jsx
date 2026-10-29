import React from 'react'
import Container from '../COMPONENTS/Container'
import Flex from '../COMPONENTS/Flex'
import Subheding from '../COMPONENTS/Subheding'
import Image from '../COMPONENTS/Image'

const Bunner = () => {
    return (
        <section className='bg-red-400 pt-10 pb-40'>
            <Container>
                <Flex>
                    <div className='w-5/12'>
                        <h5 className='font-bold text-[18px]'>Business & Technologies</h5>
                        <h1 className='w-[491px] font-bold text-[#FFFFFF] text-[53px] pb-5'>We help tech companies deliver great software</h1>
                        <Subheding text='Since 1999. For millions of users. We transform businesses with powerful and
adaptable digital solutions that satisfy the needs of today and unlock the
opportunities of tomorrow.'/>
<Flex className='pt-5'>
   <button className='w-[500px] h-[80px] bg-[#FFFFFF]'> </button>
   <button className='h-[80px] bg-[#2C83BB] w-[200px] text-[#fff] text-base '> Request for Demo</button>
</Flex>
                    </div>
                    <div className='w-7/12 relative'>
                    <Image className="absolute left-10" src='public/bunner.png'/>
                    
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Bunner