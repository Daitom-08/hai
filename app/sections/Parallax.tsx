import React from 'react'
import Button from '../components/Button'

const Parallax = () => {
  return (
      <section>
          <p>Preserve and conserve</p>
          <p className='text-[24px]'>A Vital Energy Resource For A Better Tomorrow</p>
          <p className='text-[12px]'>Cubilia scelerisque ultricies at cras tempus phasellus primis habitant. Penatibus pulvinar at vel cursus dignissim sem condimentum molestie. Lobortis hac aenean posuere justo letius laoreet augue.</p>
          <Button text='DISCOVER MORE' />
          <div className='flex'>
              <img src="arrow" alt="" />
              <div className='flex flex-col'>
                  <p>Our Value</p>
                  <p className='text-[12px]'>Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.</p>
              </div>
          </div>
          <div className='flex'>
              <img src="arrow" alt="" />
              <div className='flex flex-col'>
                  <p>Our Value</p>
                  <p className='text-[12px]'>Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.</p>
              </div>
          </div>
          <div className='flex'>
              <img src="arrow" alt="" />
              <div className='flex flex-col'>
                  <p>Our Value</p>
                  <p className='text-[12px]'>Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.</p>
              </div>
          </div>
    </section>
  )
}

export default Parallax