
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import '@mantine/core/styles.css';
import NotFound from './Pages/NotFound';
import { AuthenticationContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
 const { isLogined } = useContext<{isLogined:boolean,setIslogined:React.Dispatch<React.SetStateAction<boolean>>}>(AuthenticationContext)
  return (
      <Routes>
        <Route path='/' element={isLogined?<Home/>:<Navigate to={"/login"}/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}

export default App
