import React from 'react';

import FooterLogo from './assets/logo-text.png'
const Footer = () => {
    return (
        <footer className='container mx-auto mb-10  pt-16 ' >
            {/* footer content :  parent */}
            <div className=' footer-content grid grid-cols-12 gap-10 '>
                 {/* top footer section :  */}
               

                 <div className='top-site col-span-6 '>
                    <div>
                        <div >
                            <img src={FooterLogo} alt=" footer logo" />
                           
                        </div>
                        <p className='text-3 text-[#64748B] pt-3 pb-6'>Curated tools, technologies, and resources for developers  <br />building modern software.</p>

                        <ul className='flex gap-4  '>
                            <li className='text-sm font-semibold text-[#475569] '>GitHub </li>
                            <li className='text-sm font-semibold text-[#475569] '>Twitter </li>
                            <li className='text-sm font-semibold text-[#475569] '>LinkedIn</li>
                        </ul>
                    </div>

                 </div>

                 <div className=' col-span-2 space-y-2.5'>
                    <h3 className=' font-bold text-sm text-[#0F172A]'>PRODUCT</h3>
                    <p className='text-[#64748B] text-sm '>Home </p>
                    <p className='text-[#64748B] text-sm '>Technologies</p>
                    <p className='text-[#64748B] text-sm '>Projects</p>

                 </div>

                 <div className='col-span-2 space-y-2.5'>
                    <h3 className=' font-bold text-sm text-[#0F172A]'>COMPANY</h3>
                    <p className='text-[#64748B] text-sm '>About</p>
                    <p className='text-[#64748B] text-sm '>Contact</p>
                    <p className='text-[#64748B] text-sm '>Careers</p>
                 </div>

                 <div className='col-span-2 space-y-2.5'>
                    <h3 className=' font-bold text-sm text-[#0F172A]'>LEGAL</h3>
                    <p className='text-[#64748B] text-sm '>Privacy Policy</p>
                    <p className='text-[#64748B] text-sm '>Terms of Service</p>
                   
                 </div>

            </div>
                  <div className="divider mt-12 mb-9"></div>

            <div className='flex justify-between  '>
                <p className='text-sm text-[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex gap-6'>
                 <p className='text-sm text-[#94A3B8] '>Privacy</p>
                 <p className='text-sm text-[#94A3B8] '>Terms</p>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;