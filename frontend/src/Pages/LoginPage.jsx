import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

// Initialization for ES Users
import Logo from '../Assets/Logo.png'
  const LoginPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
      if(res && res.data.success){
        alert(res.data && res.data.message)
        navigate('/')
      }else{
        alert(res.data.message)
      }
    } catch (Error) {
      console.log(Error);
      alert('Something went wrong')
    }
  };

  return (
    <div>
    <div className=" bg-gradient-to-r from-gray-800 to-gray-700">
  <div className="container h-screen flex justify-center items-center">
    <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg max-w-6xl pb-10">
      <form   onSubmit={handleSubmit}>
      <div className="flex justify-center mb-4">
        <img src={Logo} className='flex h-[9rem] w-[9rem]' />
      </div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Enter your email" required/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100" placeholder="Enter your password" required/>
      <div className="flex justify-end items-center mt-2">
        <a href="/forgotpassword" className="text-white hover:text-gray-600">Forgot password?</a>
      </div>
      <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-700 hover:bg-red-800">login</button>
      <div className="flex justify-start items-center mt-2">
        <a href="/signup" className="text-gray-300 hover:text-gray-600">Don't have an account? SignUp</a>
      </div>

      <div className="flex justify-between items-center mt-3">
        <hr className="w-full" />
        <span className="p-2 text-gray-400 mb-1">OR</span>
        <hr className="w-full" />
      </div>
      <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"><i className="fa fa-facebook mr-2" />Facebook</button>
      <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900"><i className="fa fa-google mr-2" />Google</button>
      </form>
    </div>
  </div>
</div>
</div>
  )
}

export default LoginPage