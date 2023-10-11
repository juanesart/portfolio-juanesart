import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className=' text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Hello I am Juanes</h1>
                    <p className=' text-slate-300 text-lg lg:text-xl mb-6'>Full stack Developer with +2 years of experience</p>
                    <div className="">
                        <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200'>Hire me</button>
                        <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white'>Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center">
                    <Image
                        src='/images/hero-image.png'
                        alt='hero image'
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


