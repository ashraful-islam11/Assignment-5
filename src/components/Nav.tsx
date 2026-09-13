

import NavLogo from '../assets/logo-text.png' 

const Nav = () => {
    return (
      
        <nav className='flex  justify-between items-center container mx-auto py-6 px-8 border-b border-[#F1F5F9] sticky top-0 z-10 bg-base-100 '>
            <div>
                <img src={ NavLogo} alt=" nav logo" />
            </div>

            <ul className='flex gap-4'>
                <li><a href="#" className=' text-[#DB2777] text-sm font-semibold'> Home  </a></li>
                <li><a href="#" className='text-[#475569] text-sm  '> Technologies </a></li>
                <li><a href="#" className='text-[#475569] text-sm  '> Projects </a></li>
                <li><a href="#" className='text-[#475569] text-sm  '> About </a></li>
                <li><a href="#" className='text-[#475569] text-sm  '> Contact </a></li>
            </ul>

            <div className='flex gap-2.5 ' >
                <button className='text-[#334155] text-sm cursor-pointer '> Sing In</button>
                <button className="btn btn-secondary rounded-full">Sign Up</button>
            </div>

              
        </nav>
  
    );
};

export default Nav;