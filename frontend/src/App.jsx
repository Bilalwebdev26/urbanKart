import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './component/Layout/HomeLayout'
import Home from './component/Pages/Home'
import WishList from './component/Pages/WishList'
import Cart from './component/Pages/Cart'
const App = () => {
  return (
    <div className=''>
     <Routes>
      <Route element={<HomeLayout/>}>
       <Route index path='/' element={<Home/>}/>
       <Route index path='/wishlist' element={<WishList/>}/>
       <Route index path='/cart' element={<Cart/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
