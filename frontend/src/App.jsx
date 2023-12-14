import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import BestSellers from './Pages/BestSellers'
import HomeGym from './Pages/HomeGym'
import Crossfit from './Pages/CrossFit'
import Machines from './Pages/Machines'
import Cardio from './Pages/Cardio'
import Cart from './Pages/Cart' 
import SignupPage from './Pages/SignupPage'
import ForgotPassword from './Pages/ForgotPassword'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<LoginPage/>} path='/login'/>
          <Route element={<Home/>} path='/'/>
          <Route element={<BestSellers/>} path='/bestSellers'/>
          <Route element={<HomeGym/>} path='/homegym'/>
          <Route element={<Crossfit/>} path='/crossfit'/>
          <Route element={<Machines/>} path='/machines'/>
          <Route element={<Cardio/>} path='/cardio'/>
          <Route element={<Cart/>} path='/cart'/>
          <Route element={<SignupPage/>} path='/signup'/>
          <Route element={<ForgotPassword/>} path='/forgotpassword'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App