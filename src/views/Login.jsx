import { useStore } from "../store/Index"
import { useNavigate,useLocation } from "react-router-dom"
import { motion, useTime, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStarOfLife } from '@fortawesome/free-solid-svg-icons'

export default function Login(){

  const auth = useStore()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/home'
  const time = useTime()
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  )

  const login = (e)=>{
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const username = formData.get('username')
    const password = formData.get('password')
    auth.login({username:username,password:password})
    localStorage.setItem('user', {username:username,password:password})
    form.reset()
    navigate(redirectPath,{replace:true})
    
  }
  return (
    <div className="h-screen w-full grid content-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="justify-self-center flex flex-col p-9 shadow-lg bg-white rounded-md">
        <motion.div className="flex mx-auto bg-[#BACEC1] rounded-md p-4 text-white relative" 
          animate={{
            rotate: -4,
          }}>
            <span className="text-6xl">Project Title</span>
            <motion.div style={{ rotate }} className="absolute bg-white flex text-center p-1 rounded-full -top-3 -right-4">
            <FontAwesomeIcon 
              icon={faStarOfLife} 
              className="text-[#BACEC1] text-3xl"
              />
            </motion.div>
        </motion.div>
        <div className="flex flex-col mt-14">
          <h1 className="text-3xl my-5 font-bold text-gray-900 leading-4 text-center">Bienvenue</h1>
          <h2 className="text-lg mb-7 font-semibold text-gray-500 text-center">Se connecter a votre compte</h2>
          <form onSubmit={login} className="flex flex-col ">
            <input 
              type='text' 
              name='username' 
              className="border focus:outline-none focus:border-slate-400  h-10 border-slate-200 rounded-md px-3"/>
            <input 
              type="password" 
              name="password" 
              className="h-10 mt-4 border focus:outline-none focus:border-slate-400 border-slate-200 rounded-md px-3" />
            <button 
              type="submit" 
              className="h-10 bg-[#E59560] border border-[#E59560] mt-4 text-white rounded-md px-2">
                Se connecter 
            </button>
          </form>
          </div>
      </div>
    </div>
  )
}