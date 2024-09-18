import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import Nav from '../components/Nav'

const Hero = () => {
    return (
       
        <section id='Hero' className='flex relative  border-blue-500 justify-center mt-[0px]'>
            <div style={{ backgroundImage: `url('/assets/images/Hero1.jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className=' border-red-500  shadow-lg   overflow-hidden bg-[hero-image] flex flex-col   items-start px-[80px] xl:px-[300px] false-w[430px] w-full max-w-[1920px] h-[303px] lg:w[1024px] lg:h-[668px] xl:w[1280px] xl:h-[668px]  '>
                <h2 className=' border-blue-500 text-[24px] lg:text-[80px] font-medium leading-[29px] mt-[87.5px] lg:mt-[216px] font-unbounded text-white text-start borde '>Meeting future 
                    <span className='block lg:mt-[40px]'> demand in a </span></h2>
                <h3 className=' border-blue-500 text-[24px] lg:text-[80px] leading-[20px] mt-[px] lg:mt-[40px]  text-white text-center lg:mb-[62px] mb-[32px]'>sustainable way</h3>
                <Button  hidden='hidden' link='/involved' text='Get Involved' fontType='font-unbounded' bg={'bg-white'} textColor={'text-primary'} hoverBG='hover:bg-[#D0E7E9]' />
            </div>

        </section>

    )
}

export default Hero;
{/* <Image
    src={'/assets/images/Hero.png'}
    alt='Hero photo'
    height={303}
    width={430}
    className='scale-x-[-1] h-[303px] lg:h-[668px] xl:h-[668px]  w-[430px] lg:w-[1024px] xl:w-[1280px]'
/> */}