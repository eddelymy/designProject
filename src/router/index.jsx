import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
import { Menu } from "../views/Menu";
import Login from "../views/Login";
import { NotFound } from "../views/NotFound";
import { AuthRequired } from "../components/AuthRequired";
import { GlobalComponent } from "../components/GlobalComponent";

export default function Index(){

  return(
    // <Routes>
    //   <Route path='/' element={<Login/>}/>
    //   <Route path='/home' element={<AuthRequired><Home/></AuthRequired>}/>
    //   <Route path='/about' element={<AuthRequired><About/></AuthRequired>}/>
    //   <Route path='*' element={<AuthRequired><NotFound/></AuthRequired>}/>
    // </Routes>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path="/" element={<GlobalComponent />}>
        <Route index element={<AuthRequired><Home/></AuthRequired>}/>
        <Route path='menu' element={<AuthRequired><Menu/></AuthRequired>}/>
        <Route path='*' element={<AuthRequired><NotFound/></AuthRequired>}/>
      </Route>
    </Routes>
  )
}