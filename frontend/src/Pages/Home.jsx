import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/Herosection/Hero'
import Category from '../Components/ShopCategory/Category'
import Footer from '../Components/Footer/Footer'
import ShopBest from '../Components/ShopBest/ShopBest'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-700'>
    <NavBar/>
    <Hero/>
    <br/>
    <br/>
   
    <ShopBest className='mt-3'/>
    <br/>
    <Category/>
    <br/>
    <br/>
    <Footer/>
    </div>
  )
}

export default Home