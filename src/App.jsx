import './App.css'
// import Login from './views/Login'
import { StoreProvider } from './store/Index'
// import Index from './router'
// import { NavBar } from './components/NavBar'
import { GlobalComponent } from './components/GlobalComponent'
import { Outlet } from 'react-router-dom'
import Index from './router'

function App() {

  return (
    <StoreProvider>
      {/* <NavBar/> */}
      <Index/>
      {/* <GlobalComponent/> */}
      {/* <Outlet /> */}
    </StoreProvider>
  )
}

export default App
