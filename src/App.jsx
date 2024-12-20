import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';
import Payment from './pages/Payment';
import { AuthProvider } from './components/Context/authContext';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoutes from './lib/ProtectedRoutes';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Pay from './components/Pay';
import Success from './components/Success';
import Settings from './components/Settings';


const App = () => {
  return (
    
      <BrowserRouter>
        <AuthProvider>
        <div className='px-[30] bg-[#f6f7f9]'>
          <Navbar/>
          <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            } />
            <Route path='/category' element={
              <ProtectedRoutes>
                <Category/>
              </ProtectedRoutes>
            } />
            <Route path='/details/:id' element={
              <ProtectedRoutes>
                <Details/>
              </ProtectedRoutes>
            } />
            <Route path='/payment' element={
              <ProtectedRoutes>
                <Payment/>
              </ProtectedRoutes>
            } />
            <Route path='/payment' element={
              <ProtectedRoutes>
                <Payment/>
              </ProtectedRoutes>
            } />
            <Route path='/settings' element={
              <ProtectedRoutes>
                <Settings/>
              </ProtectedRoutes>
            } />
            <Route path='/success' element={
              <ProtectedRoutes>
                <Success/>
              </ProtectedRoutes>
            } />
            <Route path='*' element={<Navigate to='/' replace={true}/>} />
          </Routes>
          {/* <Footer/> */}
          <ToastContainer/>
        </div>
      </AuthProvider>
    </BrowserRouter>    
  )
}

export default App
