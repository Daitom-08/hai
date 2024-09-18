import React from 'react'
import Button from '../components/Button'

const Projects = () => {
    return (
        <section>
            <p>Our Awesome Projects</p>
            <p>We Take All Related Oil & Gas Projects</p>
            <p>Penatibus condimentum enim arcu finibus litora turpis eget. Tempor neque feugiat ornare montes dictumst ullamcorper natoque nostra mi et.</p>
            <Button text='ALL PROJECT' />

            {/* card component */}
            <div className='flex flex-col border mt-[12px] py-[20px]'>
                <img src="" alt="" />
                <p>Waste Heat Recovery</p>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                <Button text='ALL PROJECT' />

            </div>
            <div className='flex flex-col border mt-[12px] py-[20px]'>
                <img src="" alt="" />
                <p>Waste Heat Recovery</p>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                <Button text='ALL PROJECT' />

            </div>
            <div className='flex flex-col border mt-[12px] py-[20px]'>
                <img src="" alt="" />
                <p>Waste Heat Recovery</p>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                <Button text='ALL PROJECT' />

            </div>
        </section>
    )
}

export default Projects