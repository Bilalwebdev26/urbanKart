// import React from 'react'

// const Search = () => {
//   return (
//     <div>
//         Search Bar
//     </div>
//   )
// }

// export default Search

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown, Star, DollarSign, Tag, Grid3x3 } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    { id: 1, name: 'Wireless Headphones', category: 'electronics', price: 129.99, brand: 'TechPro', rating: 4.5, image: '🎧', inStock: true },
    { id: 2, name: 'Smart Watch', category: 'electronics', price: 299.99, brand: 'TechPro', rating: 4.7, image: '⌚', inStock: true },
    { id: 3, name: 'Running Shoes', category: 'sports', price: 89.99, brand: 'SportMax', rating: 4.3, image: '👟', inStock: true },
    { id: 4, name: 'Yoga Mat', category: 'sports', price: 34.99, brand: 'FitLife', rating: 4.6, image: '🧘', inStock: true },
    { id: 5, name: 'Coffee Maker', category: 'home', price: 79.99, brand: 'HomeEssentials', rating: 4.4, image: '☕', inStock: false },
    { id: 6, name: 'Blender', category: 'home', price: 59.99, brand: 'HomeEssentials', rating: 4.2, image: '🍹', inStock: true },
    { id: 7, name: 'Laptop Backpack', category: 'accessories', price: 49.99, brand: 'TravelPro', rating: 4.5, image: '🎒', inStock: true },
    { id: 8, name: 'Wireless Mouse', category: 'electronics', price: 29.99, brand: 'TechPro', rating: 4.1, image: '🖱️', inStock: true },
    { id: 9, name: 'Desk Lamp', category: 'home', price: 39.99, brand: 'HomeEssentials', rating: 4.3, image: '💡', inStock: true },
    { id: 10, name: 'Water Bottle', category: 'sports', price: 24.99, brand: 'FitLife', rating: 4.8, image: '💧', inStock: true },
    { id: 11, name: 'Bluetooth Speaker', category: 'electronics', price: 79.99, brand: 'SoundWave', rating: 4.6, image: '🔊', inStock: true },
    { id: 12, name: 'Fitness Tracker', category: 'sports', price: 149.99, brand: 'FitLife', rating: 4.4, image: '📱', inStock: true },
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: '📦' },
    { value: 'electronics', label: 'Electronics', icon: '💻' },
    { value: 'sports', label: 'Sports & Fitness', icon: '⚽' },
    { value: 'home', label: 'Home & Kitchen', icon: '🏠' },
    { value: 'accessories', label: 'Accessories', icon: '👜' }
  ];
  
  const brands = ['TechPro', 'SportMax', 'FitLife', 'HomeEssentials', 'TravelPro', 'SoundWave'];
  const ratings = [4, 3, 2, 1];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleRating = (rating) => {
    setSelectedRatings(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesRating = selectedRatings.length === 0 || selectedRatings.some(r => product.rating >= r);

      return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesRating;
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedBrands, selectedRatings, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setSortBy('relevance');
  };

  const activeFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (priceRange[1] < 1000) count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (selectedRatings.length > 0) count += selectedRatings.length;
    return count;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-4">
            {/* <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ShopHub</h1>
            </div> */}
            
            <div className="flex-1 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm transition-all"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r  from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
              {activeFiltersCount() > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {showFilters && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity backdrop-blur-sm"
          onClick={() => setShowFilters(false)}
        />
      )}

      {/* Filters Sidebar - Exactly Half Width */}
      <aside className={`fixed top-0 left-0 h-full w-1/2 bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
        showFilters ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Filters</h2>
                <p className="text-blue-100 text-sm">Refine your search results</p>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            {activeFiltersCount() > 0 && (
              <div className="mt-4 flex items-center justify-between bg-white bg-opacity-20 rounded-lg p-3">
                <span className="text-white text-sm font-medium">{activeFiltersCount()} filters active</span>
                <button
                  onClick={clearFilters}
                  className="text-white text-sm font-medium hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Category Filter */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Grid3x3 className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900">Category</h3>
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat.value} className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors">
                    <input
                      type="radio"
                      checked={selectedCategory === cat.value}
                      onChange={() => setSelectedCategory(cat.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-2xl">{cat.icon}</span>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900">Price Range</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-600 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(priceRange[1] / 1000) * 100}%, #dbeafe ${(priceRange[1] / 1000) * 100}%, #dbeafe 100%)`
                    }}
                  />
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Min</p>
                    <p className="text-lg font-bold text-gray-900">${priceRange[0]}</p>
                  </div>
                  <div className="w-8 h-px bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Max</p>
                    <p className="text-lg font-bold text-blue-600">${priceRange[1]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900">Brand</h3>
              </div>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">{brand}</span>
                    {selectedBrands.includes(brand) && (
                      <span className="ml-auto text-blue-600 text-xs font-semibold">✓</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <h3 className="text-base font-bold text-gray-900">Customer Rating</h3>
              </div>
              <div className="space-y-2">
                {ratings.map(rating => (
                  <label key={rating} className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-white transition-colors">
                    <input
                      type="checkbox"
                      checked={selectedRatings.includes(rating)}
                      onChange={() => toggleRating(rating)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-600">& Up</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 bg-white border-t border-gray-200 shadow-lg">
            <button
              onClick={() => setShowFilters(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sort and Results Count */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 bg-white rounded-xl p-4 shadow-sm">
          <div>
            <p className="text-gray-900 font-semibold">
              {filteredProducts.length} Products Found
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {searchQuery && `Results for "${searchQuery}"`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white shadow-sm"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                <div className="relative h-52 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center text-7xl overflow-hidden">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{product.brand}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <button 
                      disabled={!product.inStock}
                      className={`px-5 py-2.5 ${product.inStock ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-gray-300 cursor-not-allowed'} text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg`}
                    >
                      {product.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;