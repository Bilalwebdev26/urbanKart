import React, { useState } from 'react'
import Banner from '../Common/Banner'
import SalePoducts from '../Product/SalePoducts'
import Category from '../Common/Category'
import BestSellingProducts from '../Product/BestSellingProducts'
const Home = () => {
  return (
    <div className=''>
        <Banner/>
        {/* Today Products */}
        <SalePoducts/>
        {/* Category */}
        <Category/>
        {/* Best Selling Products */}
        <BestSellingProducts/>
    </div>
  )
}

export default Home
