import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Sign } from './pages/Sign';
import { Dashboard } from './pages/Dashboard';
import Footer from './components/Footer'
import CreateTable from './components/Createtable';
//rfce

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />}/>
        <Route path='/sign' element={<Sign />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/create' element={<CreateTable />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App