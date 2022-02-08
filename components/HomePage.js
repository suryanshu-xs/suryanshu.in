import React, { useEffect, useRef } from 'react';
import {Link} from 'react-scroll'

const HomePage = () => {

  const typedTextSpan = useRef(null)
  const cursorSpan = useRef(null)

  useEffect(() => {
    setTimeout(type, 2000)
  }, [])


  const textArray = ['DEVELOPER', 'FREELANCER', 'DESIGNER','BLOCKCHAIN', 'DEVELOPER'];
  let textArrayIndex = 0;
  let charIndex = 0

  function type() {

    if (typedTextSpan.current !== null) {
      let id = setInterval(() => {
        typedTextSpan.current.textContent += textArray[textArrayIndex].charAt(charIndex)
        charIndex++;
      }, 200);

      setTimeout(() => {
        clearInterval(id)
        charIndex = textArray[textArrayIndex].length - 1
        if (textArrayIndex < textArray.length - 1) {
          textArrayIndex++
        } else {
          textArrayIndex = 0;
        }
        let secId = setInterval(() => {
          if (charIndex > 0) {
            if (textArrayIndex - 1 === -1) {
              textArrayIndex++;
            }
            typedTextSpan.current.textContent = textArray[textArrayIndex - 1].substring(0, charIndex - 1)
            charIndex--
          } else {
            clearInterval(secId)
          }
        }, 100)
        setTimeout(() => {
          type()
        }, 1500)

      }, textArray[textArrayIndex].length * 300 + 300);
    }
  }





  return <div className='mt-[70px] min-h-[90vh] w-full flex flex-col ' id='home' >
    <div className='flex flex-col items-center pt-[5rem] lg:pt-[7rem]  ' >

      <p className='text-[0.8rem] font-light md:text-[1rem] lg:text-[1.1rem] ' > Hello, I'm Suryanshu. </p>
      <h1 className='text-[1.25rem] font-light my-[10px] text-center max-w-[80%] md:text-[1.5rem] lg:text-[1.7rem] lg:my-[20px] md:text-left ' > I can help you build optimized websites. </h1>

      <div className="my-[20px] md:my-[30px] lg:my-[35px]">
        <span ref={typedTextSpan} className="text-[42px] font-light md:text-[3rem] lg:text-[4rem] tracking-[0.05rem] "></span> <span ref={cursorSpan} className="cursor">&nbsp;</span>
      </div>

      <p className='text-[0.7rem] font-light md:text-[0.8rem] text-[#e0e0e0] text-center max-w-[300px] mt-[1rem] md:text-left  ' >
        I'm a passionate web developer who loves to create user friendly and optimized websites using most prominent technologies in the market.
      </p>

      <div className='mt-[3rem] md:mt-[4rem]' >
        <button className='text-[12px] w-[5.2rem] mr-6 h-[1.75rem] bg-button-background text-center hover:bg-button-background-hover active:bg-button-background-active transition-colors lg:text-[13px]' > <Link to='projects' spy={true} smooth={true} offset={-60} duration={500} > WORK </Link> </button>

        <button className='text-[12px] w-[5.2rem] h-[1.75rem] bg-button-background text-center ml-6 hover:bg-button-background-hover active:bg-button-background-active transition-colors lg:text-[13px]' > <Link to='contact' spy={true} smooth={true} offset={-30} duration={500}>CONTACT</Link>  </button>
      </div>


    </div>
  </div>;
};

export default HomePage;
