
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import NotFound from './Pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthenticationContext } from './context/AuthContext';
import { useContext } from 'react';
import {LoginState} from "./interfaces/interface.tsx"
import FormComponent from './Pages/FormComponent/FormComponent.tsx';



function App() {
   const { isLogined } = useContext<LoginState>(AuthenticationContext)
  return (
    <Routes>
      
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Home />} />
        
      </Route>
      <Route path='/login' element={isLogined===false?<Auth />:<Navigate to={"/"}/>} />
      <Route path='/form' element={<FormComponent />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
