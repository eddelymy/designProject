import { NavLink} from "react-router-dom"
import { useStore } from "../store/Index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus,faHouse,faX,faGear } from '@fortawesome/free-solid-svg-icons'
import logo_azura from '../assets/images/logo-azura.svg'

export  function NavBar(){

  const openMenu = useStore()

  const menuClosed = ()=>{
    openMenu.close()
  }
  
  return(
    <>
      {openMenu.openMenu && 
      <nav className="bg-[#BACEC1] text-[#1D3124] rounded-sm flex flex-col px-5 py-5 h-screen w-full">
        <div className="flex justify-between items-center mb-14 w-full">
            <img 
              src={logo_azura}
              alt='logo-azura'
              className="w-16"
            /> 
            <button 
              className="bg-[#1D3124] rounded-full order-last px-3 py-1 hover:shadow"
              onClick={menuClosed}
              onMouseEnter={()=>openMenu.mouseEnterBtn()}
              onMouseLeave={()=>openMenu.mouseLeaveBtn()} >
                {!openMenu.mouseEnter && <FontAwesomeIcon icon={ faMinus} className=" text-sm text-white"/>} 
                {openMenu.mouseEnter && <FontAwesomeIcon icon={faX} className=" text-sm text-white"/>}
            </button>      
          </div>
          <NavLink 
            to='/' 
            className="hover:bg-[#1D3124] hover:text-white text-lg px-3 py-2 rounded-full">
            <FontAwesomeIcon icon={faHouse} className="mr-2"/>
            <span>Home</span>
          </NavLink>
          <NavLink to='/menu' className='mt-4 hover:bg-[#1D3124] hover:text-white text-lg px-3 py-2 rounded-full'>
          <FontAwesomeIcon icon={faGear} className="mr-2"/>
            <span>
              Menu
            </span>
          </NavLink>
        </nav>}
    </>
  )
}