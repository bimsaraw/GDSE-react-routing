import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Users from './pages/Users'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { AuthProvider } from './utils/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <AuthProvider>
        <>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/profile/:userId" element={<Profile />} />
                </Route>
                
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer />
        </>
      </AuthProvider>
    </>
  )
}

export default App
