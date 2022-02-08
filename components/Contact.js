
import React, { useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md'
import { MdDoneAll } from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com'
import { Link } from 'react-scroll'

const Contact = () => {

    const [emailCopied, setEmailCopied] = useState(false)
    const [clientEmail, setClientEmail] = useState('')
    const [message, setMessage] = useState('')

    const copyEmailToClipboard = () => {
        try {
            navigator.clipboard.writeText(' suryanshu06032003@gmail.com');
            setEmailCopied(true)
            toast.success("Email Copied To Clipbaord!")
        }catch{}
    }

    const handleEmailSending = (event) => {
        toast('Sending Message...')

        event.preventDefault()
        emailjs.sendForm('service_rpfxton', 'template_eehnw3c', event.target, 'user_ZONHsfcYhhS8rRCCRiVqt').then(() => {
            toast.dismiss()
            toast.success('Message Sent, Thank You!')
            setClientEmail('')
            setMessage('')
        }).catch(() => {
            toast.dismiss()
            toast.error('Something wrong went on. Please try again!')
        })

    }


    const inputProps = `border-none outline-none font-light text-[0.8rem]  bg-button-background focus:bg-button-background-hover transition-colors px-[0.87rem]`

    const buttonProperties = 'bg-button-background text-center hover:bg-button-background-hover active:bg-button-background-active transition-colors'

    return <div className='mb-[1rem] flex flex-col' id='contact' >
        <div><Toaster /></div>
        <h1 className='text-center py-[2rem] text-[1.8rem] font-light' > Let's Work Together </h1>

        <div className='lex-1 flex flex-col justify-center items-center lg:flex-row lg:justify-evenly ' >

            <div className="max-w-[520px] m-1 relative">
                <img src="/contactPic.png" alt="" className='max-w-[500px] h-auto w-[100%] opacity-40 mx-auto' />

                <div className='absolute font-light top-[50%] translate-y-[-50%] left-[10%] right-[10%] ' >

                    <p className='text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-center md:mb-[1rem] mb-[0.5rem] font-normal ' >Communication Is My Top Priority. </p>

                    <p className='text-[0.65rem] md:text-[0.82rem] lg:text-[0.879rem] text-left ' >
                        A healty communication minimizes missunderstanding during work. I work with full enery and dedication. Delivering services before deadline in my top priority.
                    </p>

                    <p className='text-[0.65rem] md:text-[0.82rem] lg:text-[0.879rem] text-left my-2 md:my-3 ' >
                        Let's get in touch with each other. Feel free to contact me at any time. I will try my best to react out to you in no time.
                    </p>
                    <div className='flex items-center justify-between  ' >
                        <p className='text-[0.60rem] font-medium md:text-[0.82rem] lg:text-[0.95rem] text-left md:my-3 my-[5px]' >E-mail : suryanshu06032003@gmail.com</p>

                        {
                            !emailCopied ? <MdOutlineContentCopy onClick={() => copyEmailToClipboard()} className='lg:text-[1.3rem] text-[0.8rem] md:text-[1.15rem] ' /> : <MdDoneAll className='lg:text-[1.3rem] text-[0.8rem] md:text-[1.15rem] text-green-400 ' />
                        }

                    </div>


                </div>
            </div>

            <div className='w-[100%] max-w-[450px] pb-[1rem] m-1  ' >
                <form className='flex items-center flex-col ' onSubmit={handleEmailSending}  >

                    <input required type="email" placeholder='Your Email' className={`mt-[2rem] max-w-[220px] py-[0.35rem] lg:py-[0.5rem] ${inputProps}`} value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} name='clientEmail' />

                    <textarea required type="text" placeholder='Your Message' className={`my-[1rem] lg:my-[1.5rem] w-[90%]  py-[0.55rem] h-[180px] lg:py-[0.5rem] ${inputProps}`} value={message} onChange={(e) => setMessage(e.target.value)} name='message' />

                    <button className={`text-[12px] lg:mt-[1.5rem] w-[5.2rem] h-[1.75rem] lg:text-[13px] font-light ${buttonProperties}`} type='submit'  >
                        SEND
                    </button>

                </form>

            </div>
        </div>

        <footer className='mt-[6rem]' >

            <div className='h-[4rem] flex items-center max-w-[700px] mx-auto justify-between ' >
                <p className='text-[13px] md:text-[14px] lg:text-[16px] opacity-80 font-light ' > Built By Me :)</p>



                <Link to='home' spy={true} smooth={true} offset={0} duration={500} >  <a className='text-[20px] md:text-[23px] lg:text-[27px] opacity-80 font-light cursor-pointer' >
                    SURYANSHU
                </a>
                </Link>

            </div>

        </footer>

    </div>;
};

export default Contact;
