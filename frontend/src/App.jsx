import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './component/Layout/HomeLayout'
import Home from './component/Pages/Home'
import WishList from './component/Pages/WishList'
import Cart from './component/Pages/Cart'
import Register from './component/Pages/Register'
import SignIn from './component/Pages/SignIn'
import Account from './component/Pages/Account'
import MyReviews from './component/Pages/MyReviews'
import MyOrders from './component/Pages/MyOrders'
const App = () => {
  return (
    <div className=''>
     <Routes>
      <Route element={<HomeLayout/>}>
       <Route index path='/' element={<Home/>}/>
       <Route  path='/wishlist' element={<WishList/>}/>
       <Route  path='/cart' element={<Cart/>}/>
       <Route  path='/signin' element={<SignIn/>}/>
       <Route  path='/signup' element={<Register/>}/>
       <Route  path='/account' element={<Account/>}/>
       <Route  path='/myreviews' element={<MyReviews/>}/>
       <Route  path='/myorders' element={<MyOrders/>}/>
      </Route>
     </Routes>
    </div>
  )
}

export default App
