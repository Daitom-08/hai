import React from 'react'
import Button from '../components/Button'

const AboutUs = () => {
  return (
    <section className='border p-[40px] flex items-center flex-col border-green-500'>
      <div className='font-bold'>Trusted by 30,000 world-class brands and organizations of all sizes
      </div>
      <div className='flex'>
        <div>
          Testimonials
        </div>
        <div>
          Testimonials
        </div>
        <div>
          Testimonials
        </div>
        <div>
          Testimonials
        </div>
      </div>

      <div className='bg-yellow-500'>
        <p>Who We Are</p>
        <p>Providing affordable and reliable energy</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className='flex bg-white'>
          <img src="award" alt="" />
          <p>We're No.1 Oil & Gas Company</p>
        </div>
        <div>
          <div><p>Clean energy for a bright future</p></div>
          <div><p>Sustainable development</p></div>
          <div><p>Improving access to energy</p></div>
        </div>
        <Button text='READ MORE' />
        <img src="/assets/images/Hero2.jpg" alt="" />
        <div>
          <p className='text-[24px]'>We Spread Around The World</p>
          <p className='text-[12px]'>Laoreet lorem consectetuer hendrerit dictumst curae volutpat cubilia elit velit natoque. Eleifend diam volutpat lectus aliquam aenean. Dolor sed orci scelerisque taciti sodales tortor.</p>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <p>25+</p>
              <p>Years of Experience</p>
            </div>
            <div className='flex flex-col'>
              <p>77+</p>
              <p>Years of Experience</p>
            </div>
            <div className='flex flex-col'>
              <p>38k+</p>
              <p>Years of Experience</p>
            </div>
          </div>
          <img src="world" alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs