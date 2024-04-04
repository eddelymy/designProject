import { useState, createContext, useContext } from "react"

const StoreContext = createContext(null)

export const StoreProvider = ({children})=>{
  const [user,setUser] = useState(null)
  const [openMenu,setOpenMenu] = useState(false)
  const [mouseEnter,setMouseEnter] = useState(false)

  function open(){
    setOpenMenu(true)
    setMouseEnter(false)
  }
  function close(){
    setOpenMenu(false)
  }

  function mouseEnterBtn(){
    setMouseEnter(true)
  }
  function mouseLeaveBtn(){
    setMouseEnter(false)
  }

  const login = user=>{
    setUser(user)
  }
  const logout = ()=> {
    setUser(null)
  }
  return <StoreContext.Provider value={{user,openMenu,mouseEnter,login,logout,close,open,mouseEnterBtn,mouseLeaveBtn}}>{children}</StoreContext.Provider>
}
export const useStore =()=>{
  return useContext(StoreContext)
}
