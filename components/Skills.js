import Image from 'next/image';
import React from 'react';

const Skills = () => {

    const skillsArray = [
        {
            skill: 'React Js',
            image: '/reactjs.png'
        },
        {
            skill: 'Python',
            image: '/python.png'
        },
        {
            skill: 'Firebase',
            image: '/firebase.png'
        },
        {
            skill: 'Solidity',
            image: '/solidity.png'
        },
        {
            skill: 'Node Js',
            image: '/nodejs.png'
        },

        {
            skill: 'React Native',
            image: '/reactjs.png'
        },
        {
            skill: 'Mongo DB',
            image: '/mongodb.png'
        },

        {
            skill: 'Javascript',
            image: '/JS.png'
        },

    ]

    return <div className="my-[2rem] min-h-[80vh] bg-[url('/work2smallDevices.png')] md:bg-[url('/work2.png')] bg-center bg-cover flex flex-col " id='about' >

        <h1 className='text-center py-[0.75rem] text-[1.8rem] font-light  ' > My Skills </h1>

        <div className='flex-1 flex flex-col lg:flex-row '  >
            <div className='lg:flex-[0.5] lg:flex lg:items-center  ' >

                <div className='flex flex-wrap justify-center py-4  max-w-[400px] m-auto md:max-w-[700px] md:m-auto  ' >
                    {
                        skillsArray.map(({ skill, image }, index) => <div key={index} className='w-[60px] h-[90px] flex justify-between flex-col items-center m-[10px] md:m-[20px] md:w-[85px] md:h-[110px] '  >

                            <img src={image} alt="" className='w-[50px] max-h-[50px] md:w-[70px] md:max-h-[70px] ' />
                            <p className='text-[0.7rem] text-center md:text-[0.8rem]'  > {skill} </p>

                        </div>)
                    }
                </div>

            </div>

            <div className='flex-[1] lg:flex-[0.5] pt-4 flex flex-col ' >
                <p className='text-center text-[12px] font-light text-[#e8e8e8] max-w-[400px] m-auto lg:flex-1 flex justify-center items-center lg:items-end lg:pb-6 lg:text-[15px] '   >

                    I enjoy building complex full stack web apps. With the experience of building over 50+ websites, I can help you build your website effortlessly. I use advanced tools that can manage high user penetration easily at the same time keeping the UI of apps simple and user friendly. Helping others to get thier needs accomplished easily is what keeps me motivated.

                </p>

                <div className=' flex-1 lg:flex-0 flex justify-center items-center my-5 flex-col lg:justify-start lg:pt-6'  >

                    <div className='w-[120px] h-[120px] md:w-[150px] bg-[url("/profile.png")] bg-center bg-cover md:h-[150px] rounded-full transition-colors bg-button-background text-center hover:bg-button-background-hover flex justify-center items-center text-[4rem] font-extralight lg:text-[5rem]  ' >

                        
                    </div>

                    <p className='mt-[15px] text-[15px] font-medium lg:text-[17px] lg:mt-[30px] ' > 5 Years Of Experience </p>

                </div>



            </div>

        </div>

    </div>;
};

export default Skills;
