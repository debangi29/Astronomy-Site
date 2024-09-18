"use client"
import '../../globals.css'
import React, { useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import Hero from '../../../../public/Hero.png'
import star from '../../../../public/star.png'
import ParticleEffect from '@/app/Animations/ParticleEffect';
import { motion } from "framer-motion"
import Link from 'next/link'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const heroVariants = {
  visible: {
    x: [-30, 30, -30],
    y: [-30, 30, -30],
    transition: {
      repeat: Infinity,
      delay: 0.1,
      duration: 5,
    }
  }
}

const Home = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const countdownDate = new Date("December 31, 2024 23:59:59").getTime();
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     setTimer({ days, hours, minutes, seconds });

  //     if (distance < 0) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='h-screen mt-[50px] bg-black flex flex-row justify-between'>
        <div className='flex ml-[100px] mt-[50px] flex-col grow'>
          <h1 className='text-white mt-[80px] text-gradient text-[30px] lg:text-[50px] md:text-[30px]'>
            <span className={roboto.className}>Explore the Cosmos.</span>
          </h1>
          <div className='mt-[20px]'>
            <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'>
              <span className={roboto.className}>Unveiling the Mysteries of the Universe,</span>
            </p>
            <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'>
              <span className={roboto.className}>We are the <span className='text-gradient font-bold'>Astronomy</span> club of IIT BHU.</span>
            </p>
          </div>

          <Link href='/pages/Activities'>
            <button className='bg-gradient-to-r from-white to-slate-400 rounded-[5px] w-[130px] mt-[40px] px-[3px] py-[5px]'>
              <span className={roboto.className}><span className='font-bold text-[20px]'>Explore</span></span>
            </button>
          </Link>

          {/* Countdown Timer */}
          {/* <div className='mt-[50px] text-white'>
            <h2 className='text-[20px] lg:text-[30px]'>Yuri's Night in:</h2>
            <div className='flex space-x-[20px] mt-[10px]'>
              <div className='text-center'>
                <p className='text-[25px] lg:text-[40px]'>{timer.days}</p>
                <p>Days</p>
              </div>
              <div className='text-center'>
                <p className='text-[25px] lg:text-[40px]'>{timer.hours}</p>
                <p>Hours</p>
              </div>
              <div className='text-center'>
                <p className='text-[25px] lg:text-[40px]'>{timer.minutes}</p>
                <p>Minutes</p>
              </div>
              <div className='text-center'>
                <p className='text-[25px] lg:text-[40px]'>{timer.seconds}</p>
                <p>Seconds</p>
              </div>
            </div>
          </div> */}
          <br></br>
          <p className='mt-[20px] text-white text-[10px] lg:text-[15px] md:text-[100px]'>
            <span className={roboto.className}>The Astronomy Club at IIT BHU is driven by a passionate<br /> team of amateur astronomers, is dedicated to satisfying<br /> students' curiosity about astronomy. We organize a range<br /> of exciting events, including observational sessions,<br />
              teleconferences, and telescope handling. Our flagship event,<br />
              Yuri’s Night, is a highlight, along with our very own <br />magazine,
              The Redshift Magazine, and many more activities.
            </span>
          </p>

        </div>

        <div className='flex items-center justify-center h-screen container w-[45vw] mr-[70px]'>
          <div className='bg-particle'>
            <ParticleEffect />
          </div>
          <motion.div
            className='image-hero'
            variants={heroVariants}
            animate="visible"
          >
            <Image src={Hero} height={300} width={300} alt="hero" />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className='mt-[1px] bg-gradient-to-r from-blue-500 to-green-500 p-[10px]'>
        <marquee className='text-white font-bold text-[20px]'>
          Welcome to the Astronomy Club! Join us in exploring the universe with exciting events and activities.
        </marquee>
      </div>

      {/* Newsletter Subscription */}
      <div className='flex flex-col items-center mt-[50px] bg-gray-800 p-[20px]'>
        <h2 className='text-white text-[30px]'>Subscribe to our Newsletter</h2>
        <p className='text-white mt-[10px] text-[15px]'>Stay updated with the latest news and events from the Astronomy Club.</p>
        <input
          type='email'
          placeholder='Enter your email'
          className='mt-[20px] p-[10px] w-[300px] rounded-[5px]'
        />
        <button className='mt-[20px] bg-gradient-to-r from-white to-slate-400 rounded-[5px] px-[20px] py-[10px]'>
          <span className={roboto.className}>Subscribe</span>
        </button>
      </div>

      {/* Custom Star Cursor */}
      <div
        className='fixed top-0 left-0 pointer-events-none'
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      >
        <Image src={star} alt="Star Cursor" width={30} height={30} />
      </div>
    </>
  )
}

export default Home
