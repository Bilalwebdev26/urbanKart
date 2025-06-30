import React, { useState } from 'react'
import Banner from '../Common/Banner'
import SalePoducts from '../Product/SalePoducts'
import Category from '../Common/Category'
import BestSellingProducts from '../Product/BestSellingProducts'
import SingleBanner from '../Common/SingleBanner'
import ExploreProducts from '../Product/ExploreProducts'
import NewArrivals from '../Product/NewArrivals'
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
        {/* Banner */}
        <SingleBanner/>
        {/* Explore Products */}
        <ExploreProducts/>
        {/* New Arrivals Products */}
        <NewArrivals/>
    </div>
  )
}

export default Home
