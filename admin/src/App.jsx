import React from 'react'
import { Routes, Route, Link } from "react-router";
import Home from './Components/Dashboard/Home.jsx';
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
  )
}

export default App