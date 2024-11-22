import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/organisms/Navbar'
import { Route, Routes } from 'react-router-dom'
import Moneylog from './pages/Moneylog'
import Borrow from './pages/Borrow'
import Bills from './pages/Bills'
import Stock from './pages/Stock'
import Times from './pages/Times'
import { WindowSizeProvider  } from './components/context/WindowSizeContext'

function App() {

  return (
    <WindowSizeProvider>
      <div className='container'>
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Moneylog/>}/>
            <Route path='/borrow' element={<Borrow/>}/>
            <Route path='/bills' element={<Bills/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/times' element={<Times/>}/>
          </Routes>
        </div>
      </div>
    </WindowSizeProvider>
  )
}

export default App
