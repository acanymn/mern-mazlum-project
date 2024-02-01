import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Sign } from './pages/Sign';
import { Dashboard } from './pages/Dashboard';
import Footer from './components/Footer'
//rfce

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />}/>
        <Route path='/sign' element={<Sign />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App