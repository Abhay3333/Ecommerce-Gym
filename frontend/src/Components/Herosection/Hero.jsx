import React from 'react'
import Homeimg from '../../Assets/Homeimg.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
<section className="bg-gradient-to-r from-gray-800 to-gray-700">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7 space-x-4 ">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Upgrade your workouts with the best fitness and gym equipment in India.
</h1>
      {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
      <Link to={'/homegym'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-red-500 text-gray-900 border  border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
       SHOP HOME GYM </Link>
      <Link to={'/crossfit'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-red-500 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800">SHOP CROSSFIT</Link> 
      
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-full">
      <img className="h-full object-cover object-center w-[25rem]" src={Homeimg} alt="" />
    </div>                
  </div>
</section>
{/* <br/>
<br/>
<hr className='bg-black h-[2px]'/> */}
</>



  )
}

export default Hero