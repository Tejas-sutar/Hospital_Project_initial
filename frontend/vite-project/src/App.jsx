import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Routes } from 'express'
import {Home} from './pages/home.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={ <Home/> } />

        </Routes>
      </div>
    
    </BrowserRouter>
  )
}

export default App
