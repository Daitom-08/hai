import React from 'react'

const Footer = () => {
    return (
        <section className='flex flex-col bg-black text-white'>
            <div className='flex flex-col'>
                <p>Company</p>
                <p>about</p>
                <p>investors</p>
                <p>career</p>
                <p>news and update</p>
                <p>Business</p>
            </div>
            <div className='flex flex-col'>
                <p>Service</p>
                <p>about</p>
                <p>investors</p>
                <p>career</p>
                <p>news and update</p>
                <p>Business</p>
            </div>
            <div className='flex flex-col'>
                <p>Support</p>
                <p>about</p>
                <p>investors</p>
                <p>career</p>
                <p>news and update</p>
                <p>Business</p>
            </div>
            {/* company logo ish  */}
            <div className='flex flex-col p-[20px]'>
                <p>Sem et quisque dis fermentum vitae mauris sit orci ante. Porttitor facilisis lorem venenatis sollicitudin cursus sapien ultricies pretium.</p>
                <div className=''>
                    <img src="" alt="" />
                    <p>
                        Jl Cempaka Wangi No 22 Jakarta - Indonesia</p>
                </div>
            </div>
            <div className='bg-white p-[0.1px] mb-[20px]'>
                {/* footer footer  */}
             

            </div>
            <div className='flex flex-col lg:flex-row '>
                <div className='flex flex-row justify-between text-[12px] '>
                        <p>Term of Use</p>
                        <p>Cookies</p>
                        <p>privacy Policy</p>
                </div>
                <p className='text-[12px]'>Copyright © 2023 Oeelco, All rights reserved. Powered by MoxCreative</p>
                </div>
        </section>
    )
}

export default Footer