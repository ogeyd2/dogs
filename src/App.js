import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import './App.css'
import { UserStorage } from './UserContext'
import User from './User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Photo from './Components/Photo/Photo'
import UserProfile from './User/UserProfile'
import NotFound from './Components/NotFound'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
