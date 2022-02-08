import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
const Projects = () => {
    const buttonProperties = ' text-center hover:bg-button-background-hover active:bg-button-background-active transition-colors'

    const projectButtonProperties = 'text-[12px] w-[5.2rem] h-[1.75rem] bg-button-background text-center hover:bg-button-background-hover active:bg-button-background-active transition-colors lg:text-[13px]'

    const properties = {
        duration: 4000,
        transitionDuration: 1200,
        infinite: true,

        prevArrow: <div className={`mr-1 p-1 md:mr-6  ${buttonProperties}`}> <BsChevronLeft className='text-[18px] md:text-[24px]' /> </div>,

        nextArrow: <div className={`ml-1 p-1 md:ml-6  ${buttonProperties}`}> <BsChevronRight className='text-[18px] md:text-[24px] ' /> </div>,
    }



    const projectData = [
        {
            name: 'E Shop',
            desc: 'A Social Online Shopping Website .',
            features: ['Responsive', 'Authentication', 'Payment Support', 'Highly Scalable'],
            techStack: ['React', 'Node Js', 'Stripe', 'Firebase'],
            link: 'https://e-shop-1-1-1.web.app/',
            images: ['/eshop/eshop1.png', '/eshop/eshop2.png', '/eshop/eshop3.png', '/eshop/eshop4.png'],
            code:'https://github.com/suryanshu-xs/e-shop'

        },
        {
            name: 'News Monkey',
            desc: 'An online news website  that can fetch news and show weather information. .',
            features: ['Responsive', 'Authentication', 'Weather Data', '12 Countries News', 'Post Articles'],
            techStack: ['React', 'Weather API', 'News API', 'Material UI', 'Firebase'],
            link: 'https://news-monkey.web.app/',
            imagePath: '/newsmonkey/newsMonkey',
            images: ['/newsmonkey/newsMonkey1.png', '/newsmonkey/newsMonkey2.png', '/newsmonkey/newsMonkey3.png', '/newsmonkey/newsMonkey4.png'],
            code:'https://github.com/suryanshu-xs/news-monkey'
        },
        {
            name: 'UniChat',
            desc: 'A Realtime Chat App that helps you connect with your friends and family.',
            features: ['Responsive', 'Realtime Chat', 'Authentication', 'Custom Themes'],
            techStack: ['React', 'Node Js', 'Socket.io', 'Firebase'],
            link: 'https://unichat-a824e.web.app/',
            images: ['/unichat/unichat1.png', '/unichat/unichat2.png', '/unichat/unichat3.png', '/unichat/unichat4.png'],
            code:'https://github.com/suryanshu-xs/unichat'
        },
        {
            name: 'Tasker',
            desc: 'A notes keeping app that saves your important notes and  todos.',
            features: ['Responsive', 'Database', 'Authentication'],
            techStack: ['React', 'Flip Toolkit', 'Firebase'],
            link: 'https://tasker-3.web.app/',
            images: ['/tasker/tasker1.png', '/tasker/tasker2.png', '/tasker/tasker3.png',],
            code:'https://github.com/suryanshu-xs/tasker'
        }
    ]



    return <div className='min-h-[80vh] mb-[1rem]' id='projects' >
    
        <h1 className='text-center py-[0.75rem] text-[1.8rem] font-light  ' > Recent Projects </h1>

        {
            projectData.map((data, index) => <div key={index} className='mb-9 lg:flex lg:flex-row-reverse lg:items-center ' >

                <div className='max-w-[500px] m-auto md:max-w-[520px] lg:max-w-[540px] flex-[1] sm:pb-4 lg:pb-0' >
                    <Fade {...properties} >

                        {
                            data.images.map((image, index) => <div key={index} className="each-fade" >
                                <div className="image-container">
                                    <img src={image} />
                                </div>
                            </div>)
                        }



                    </Fade>
                </div>

                <div className='max-w-[400px] m-auto md:max-w-[400px] lg:max-w-[500px] text-center flex-[0.4] ' >

                    <h1 className='text-[1.3rem] font-light md:text-[1.45rem] lg:text-[1.75rem] mt-3 ' >{data.name}</h1>

                    <p className='text-[0.7rem] md:text-[0.85rem] lg:text-[0.92rem] max-w-[400px] mx-auto lg:mt-1'  >
                        {data.desc}
                    </p>

                    <div className=' mt-2 flex justify-evenly md:mt-4 lg:mt-7 lg:max-w-[400px] m-auto ' >

                        <div>

                            <h2 className='text-[0.9rem] mb-1 md:mb-3 md:text-[0.93rem] lg:text-[0.98rem]' > Features: </h2>
                            {
                                data.features.map((feature, index) => <p key={index} className='text-[0.7rem] md:text-[0.8rem] lg:text-[0.85rem]' > {feature} </p>)
                            }




                        </div>

                        <div >

                            <h2 className='text-[0.9rem] mb-1 md:mb-3 md:text-[0.93rem] lg:text-[0.98rem]' > Teck Stack: </h2>

                            {
                                data.techStack.map((techStack, index) => <p key={index} className='text-[0.7rem] md:text-[0.8rem] lg:text-[0.85rem]' > {techStack} </p>)
                            }


                        </div>


                    </div>

                    <div className='mt-3 md:mt-5 lg:mt-8 max-w-[250px] mx-auto flex justify-between lg:justify-around lg:max-w-[320px] ' >

                        <Link href={data.link}   >
                            <a target='_blank' >
                                <button className={projectButtonProperties} > EXPLORE </button>
                            </a>
                        </Link>

                        <Link href={data.code}   >
                            <a target='_blank' >
                                <button className={projectButtonProperties} > CODE </button>
                            </a>
                        </Link>
                    </div>




                </div>

            </div>
            )
        }


    </div>;
};

export default Projects;
