import React from 'react'
import './styles/App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Movies from './pages/movies/Movies'
import TvShows from './pages/tvShows/TvShows'
import NotFound404 from './pages/error/NotFound404'
import Home from './pages/home/Home'
import MainLayout from './layout/MainLayout'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLayout from './layout/DashboardLayout'
import AuthRequired from './components/authRequired/AuthRequired'
import SuggestMe from './pages/SuggestMe'


const App = () => {
  return (
    <>
      <Routes>
        {/* main layout */}
        <Route path="/" element={<MainLayout/>}>  
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tvShows" element={<TvShows/>}/>
          <Route path="/suggestMe" element={<SuggestMe/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* Error pages */}
          <Route path="*" element={<NotFound404/>}/>
        </Route>

        {/* dashboard layout */}

        <Route element={<AuthRequired/>}>
          <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/logout' element={<Navigate to='/login' replace='true'/>}/>
          </Route>

          {/* Error pages */}
          <Route path="*" element={<NotFound404/>}/>
        </Route>

          
      </Routes>
    </>
  )
}

export default App