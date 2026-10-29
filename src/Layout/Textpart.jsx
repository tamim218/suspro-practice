import React from 'react'
import Container from '../COMPONENTS/Container'
import Flex from '../COMPONENTS/Flex'
import Image from '../COMPONENTS/Image'

const Textpart = () => {
  return (
    <div className='bg-[#F3F3F3] mt-25 pb-30'>
        <Container>
       <div className='items-center justify-center flex flex-col pt-30 '>
         <h1 className='text-[38px] font-bold text-[#112F42] w-[395px] text-center pb-5'>All product work with
several devices.</h1>
<p className='text-[18px] w-[454px] text-[#495E6C] font-normal text-center'>A great SaaS UI/UX design can make your product addictive and
uncomfortable to give up.</p>
       </div>

<Flex className='items-center justify-center flex flex-row gap-5 pt-10 pb-10'>
<Image src='/buttonimag.png' />
<Image src='/buttonimag.png' />
</Flex>
  


 <Image src='/bigimage.png' />


</Container>
    </div>

   
  )
}

export default Textpart