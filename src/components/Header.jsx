import { useStore } from "../store/Index"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'

export function Header(){

  const openMenu = useStore()
  const navigate = useNavigate()

  const menuOpened = ()=>{
    openMenu.open()
  }

  const logout = ()=>{
    // auth.logout()
    localStorage.removeItem('user')
    // navigate('/')
  }
  return( 
    <div className="flex justify-between items-center w-full px-5 shadow-sm bg-[#F6F4E8] h-14">
      <div className="flex justify-end relative"> 
        {!openMenu.openMenu && 
          <button 
            className="rounded-full bg-[#E59560] px-3 py-1 hover:shadow hover:bg-white"
            onClick={menuOpened} >
              <FontAwesomeIcon icon={faBars} className=" text-sm text-black"/>
        </button>}     
      </div>
      <button 
        className="order-last p-1 rounded-md bg-[#E59560] text-white"
        onClick={logout}>
          Deconnecter
      </button>
    </div>
  )
}