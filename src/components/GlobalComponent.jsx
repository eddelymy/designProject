import { NavBar } from "./NavBar"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
import { useStore } from "../store/Index"
import { motion } from "framer-motion"

export function GlobalComponent(){

  const openMenu = useStore()

  return(
    <>
      <div className={"h-screen w-full overflow-hidden " + (openMenu.openMenu && "grid grid-cols-gridColmn")}>
        {openMenu.openMenu &&
          <motion.div 
            animate={{ y: [-800, 0, 0] }}
            className="md:min-w-80 h-full overflow-auto">
              <NavBar/>
          </motion.div>
              
        }
        <div className="flex flex-col h-full w-full overflow-auto">
          <Header/>
          <div className="flex-1 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}