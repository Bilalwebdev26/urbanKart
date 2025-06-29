import React, { useState } from 'react'
import Banner from '../Common/Banner'
import SalePoducts from '../Product/SalePoducts'
import Category from '../Common/Category'
const Home = () => {
  return (
    <div className=''>
        <Banner/>
        {/* Today Products */}
        <SalePoducts/>
        {/* Category */}
        <Category/>
    </div>
  )
}

export default Home
