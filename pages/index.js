import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'




export default function Home() {
  return (
    <div className='min-h-screen bg-[#000000] px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[100px] max-w-[1500px] m-auto' >
      <Head>
        <title>Suyanshu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
      <Skills />
      <Projects/>
      <Contact/>




    </div>
  )
}
