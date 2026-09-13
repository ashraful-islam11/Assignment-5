import React from 'react';
 import HeroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section>
                <div className=" grid grid-cols-2 gap-5  container mx-auto my-6 py-3 px-2  items-center bg-[#FFFFFF] ">
 
                    <div className='grid justify-between space-y-3 px-5 ' >
                        <h1 className="text-6xl font-extrabold text-[#0F172A] ">Build Your Ideal <br />
                       <span className='bg-clip-text text-transparent bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]'>Development Stack</span> </h1>

                        <p className="py-6 text-[#475569] text-[18px] " >
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your <br />
                                next project.
                        </p>

                        <div className='flex gap-2.5 '>
                                <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-sm font-semibold text-white">Explore Technologies</button>
                                <button className= ' btn text-[#374151]'>Learn More</button>

                        </div>
                    </div>
                        {/* heroImage :  */}
                     <div className='flex items-center mx-auto '>
                    <img
                    alt="hero image"
                    src={HeroImage}
                    className=""
                    />
                    </div>
                </div>
               
        </section>
    );
};

export default Hero;