import React,{useState} from 'react'
import NavBar from '../Components/NavBar/NavBar'
import axios from 'axios'
import {useNavigate}  from 'react-router-dom'
const SignupPage = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_Password, setConfirm_Password] = useState("");

  const navigate = useNavigate()

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === confirm_Password){
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,phone,password});
        if(res && res.data.success){
          alert(res.data && res.data.message)
          navigate('/login')
        }else{
          alert(res.data.message)
        }
      } catch (Error) {
        console.log(Error);
        alert('Something went wrong')
      }
    }else{
      alert("Passwords do not match")
    }  
  };

  return (
    
<div>
  <NavBar/>
      {/* component */}
  <div className="bg-gradient-to-r from-gray-800 to-gray-700 min-h-screen flex flex-col">

    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    
      <form onSubmit={handleSubmit}>
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center text-white font-semibold">Sign up</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" required/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" required/>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Phone Number" required/>
        <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" required/>
        <input type="password" value={confirm_Password} onChange={(e) => setConfirm_Password(e.target.value)} className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />
        <error id="alert"></error>
        <button type="submit" className="w-full text-center py-3 rounded bg-red-700 hover:bg-red-800 text-white  focus:outline-none my-1">Create Account</button>
          <div className="text-center text-sm text-white mt-4">
                        By signing up, you agree to the &nbsp;
                        <a  className="text-white hover:text-gray-600 font-semibold" href="#">
                            Terms of Service
                        </a> and &nbsp;
                        <a className="text-white hover:text-gray-600 font-semibold" href="#">
                            Privacy Policy
                        </a>
          </div>
      </div>
        <div className="flex justify-start items-center mt-2 text-white">
          Already have an account?
          <a href="/login" className="text-gray-300 hover:text-gray-600 font-semibold underline"> Login</a>
        </div>
        </form>
    </div>
  </div>

</div>
  )
}

export default SignupPage