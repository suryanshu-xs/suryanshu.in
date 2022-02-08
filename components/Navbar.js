import React from 'react';
import { Link } from 'react-scroll'

const Navbar = () => {
    return <header className='fixed h-[60px] md:h-[70px] md:px-[50px] px-[20px] lg:px-[80px] w-full xl:px-[90px] 2xl:px-[100px] text-white left-0 right-0 top-0 max-w-[1500px] m-auto z-50 '>

        <nav className='w-full h-full bg-header-black-rgba shadow-2xl flex items-center relative'>

            <div className='text-l md:text-xl cursor-pointer py-[8px] font-normal md:font-light lg:text-2xl'>

                <Link to='home' spy={true} smooth={true} offset={-70} duration={500} >
                    SURYANSHU
                </Link>
            </div>


            <div className='absolute items-center flex left-[100%] translate-x-[-100%] md:left-[50%] md:translate-x-[-50%] ' >

                <div className='cursor-pointer text-[12px] md:text-[15px] font-medium  lg:text-[16px]'>
                    <Link to='about' spy={true} smooth={true} offset={-70} duration={500} > About </Link>
                </div>



                <div className='cursor-pointer text-[12px] md:text-[15px] font-medium  lg:text-[16px] mx-3 md:mx-7 lg:mx-12'>
                    <Link to='projects' spy={true} smooth={true} offset={-60} duration={500} >Work </Link>
                </div>



                <div className='cursor-pointer text-[12px] md:text-[15px] font-medium  lg:text-[16px]'>
                    <Link to='contact' spy={true} smooth={true} offset={-30} duration={500} > Contact </Link>
                </div>
            </div>
        </nav>
    </header>;
};

export default Navbar;
