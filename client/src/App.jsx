import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import ChatPage from './components/ChatPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/chatPage' element={<ChatPage />}></Route>

      </Routes>
    </Router>
  )
}

export default App
