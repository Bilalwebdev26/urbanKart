// // import React from 'react'

// // const OrderConfigration = () => {
// //   return (
// //     <div>OrderConfigration</div>
// //   )
// // }

// // export default OrderConfigration
// import React, { useState, useEffect } from 'react';
// import { CheckCircle, Package, MapPin, CreditCard, Clock } from 'lucide-react';
// import { useParams } from 'react-router-dom';

// export default function OrderConfigration() {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [slideIn, setSlideIn] = useState(false);
//    const { id } = useParams();
//   // Sample order data
//   const order = {
//     _id: "68e8ec700b342d91a8713625",
//     Price: 312.52,
//     createdAt: "2025-10-10T11:22:24.432Z",
//     isDelivered: false,
//     isPaid: false,
//     paymentMethod: "COD",
//     products: [
//       {
//         name: "Premium Wireless Headphones",
//         quantity: 2,
//         price: 106.26,
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
//       }
//     ],
//     shippingAddress: {
//       streetAddress: 'IslamPura',
//       city: 'Lahore',
//       country: 'Pakistan',
//       postalCode: 123456
//     },
//     shippingPrice: 100,
//     status: "Processing",
//     PaymentStatus: "pending"
//   };

//   useEffect(() => {
//     setShowConfetti(true);
//     setTimeout(() => setSlideIn(true), 300);
//     setTimeout(() => setShowConfetti(false), 3000);
//   }, []);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getStatusColor = (status) => {
//     const colors = {
//       'Processing': 'bg-blue-100 text-blue-800',
//       'Shipped': 'bg-purple-100 text-purple-800',
//       'Delivered': 'bg-green-100 text-green-800'
//     };
//     return colors[status] || 'bg-gray-100 text-gray-800';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
//       {/* Confetti Animation */}
//       {showConfetti && (
//         <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: '-10%',
//                 animation: `fall ${2 + Math.random() * 2}s linear`,
//                 animationDelay: `${Math.random() * 0.5}s`
//               }}
//             >
//               <div
//                 className="w-3 h-3 rounded-full"
//                 style={{
//                   backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)],
//                   transform: `rotate(${Math.random() * 360}deg)`
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fall {
//           to {
//             transform: translateY(100vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//       `}</style>

//       <div className="max-w-4xl mx-auto">
//         {/* Success Message */}
//         <div className={`text-center mb-8 transition-all duration-700 ${slideIn ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-bounce">
//             <CheckCircle className="w-12 h-12 text-green-600" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
//           <p className="text-lg text-gray-600">Thank you for your purchase</p>
//           <p className="text-sm text-gray-500 mt-2">Order ID: #{id}</p>
//         </div>

//         {/* Main Order Card */}
//         <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-300 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//           {/* Status Bar */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
//             <div className="flex justify-between items-center flex-wrap gap-4">
//               <div>
//                 <p className="text-sm opacity-90">Order Status</p>
//                 <p className="text-2xl font-bold">{order.status}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm opacity-90">Order Date</p>
//                 <p className="font-semibold">{formatDate(order.createdAt)}</p>
//               </div>
//             </div>
//           </div>

//           {/* Order Details Grid */}
//           <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-50">
//             <div className="flex items-start space-x-3">
//               <div className="bg-blue-100 p-3 rounded-lg">
//                 <CreditCard className="w-6 h-6 text-blue-600" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Method</p>
//                 <p className="font-semibold text-gray-800">{order.paymentMethod}</p>
//                 <span className="inline-block mt-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
//                   {order.PaymentStatus}
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <div className="bg-purple-100 p-3 rounded-lg">
//                 <Package className="w-6 h-6 text-purple-600" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Delivery Status</p>
//                 <p className="font-semibold text-gray-800">
//                   {order.isDelivered ? 'Delivered' : 'In Progress'}
//                 </p>
//                 <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
//                   {order.status}
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-start space-x-3">
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <MapPin className="w-6 h-6 text-green-600" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipping Address</p>
//                 <p className="font-semibold text-gray-800">{order.shippingAddress.city}</p>
//                 <p className="text-sm text-gray-600">{order.shippingAddress.country}</p>
//               </div>
//             </div>
//           </div>

//           {/* Products List */}
//           <div className="p-6">
//             <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//               <Package className="w-5 h-5 mr-2" />
//               Order Items
//             </h2>
//             <div className="space-y-4">
//               {order.products.map((product, index) => (
//                 <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-20 h-20 object-cover rounded-lg"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-800">{product.name}</h3>
//                     <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
//                     <p className="text-xs text-gray-500">per item</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Shipping Address Details */}
//           <div className="p-6 bg-gray-50">
//             <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
//               <MapPin className="w-5 h-5 mr-2" />
//               Delivery Address
//             </h3>
//             <div className="bg-white p-4 rounded-lg">
//               <p className="text-gray-800">{order.shippingAddress.streetAddress}</p>
//               <p className="text-gray-600">
//                 {order.shippingAddress.city}, {order.shippingAddress.country}
//               </p>
//               <p className="text-gray-600">Postal Code: {order.shippingAddress.postalCode}</p>
//             </div>
//           </div>

//           {/* Price Summary */}
//           <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
//             <h3 className="font-semibold text-gray-800 mb-4">Order Summary</h3>
//             <div className="space-y-2">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span>${(order.Price - order.shippingPrice).toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Shipping</span>
//                 <span>${order.shippingPrice.toFixed(2)}</span>
//               </div>
//               <div className="border-t-2 border-gray-300 pt-2 mt-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-xl font-bold text-gray-800">Total</span>
//                   <span className="text-2xl font-bold text-blue-600">${order.Price.toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="p-6 flex gap-4 flex-wrap">
//             <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//               Track Order
//             </button>
//             <button className="flex-1 bg-white text-gray-700 py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors">
//               View Invoice
//             </button>
//           </div>
//         </div>

//         {/* Thank You Message */}
//         <div className={`text-center mt-8 transition-all duration-700 delay-500 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//           <p className="text-gray-600">
//             We'll send you shipping confirmation when your items are on the way!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { CheckCircle, Package, MapPin, CreditCard, Truck, Calendar, Phone, Mail, FileText, ArrowRight, Home } from 'lucide-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function OrderConfiguration() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
   const location = useLocation();
   const {id} = useParams()
   const navigate = useNavigate()

  // Get order ID from URL or props
  // const orderId = window.location.pathname.split('/').pop(); // For direct usage

  // Sample order data - Replace with API call
  const sampleOrder = location.state?.order;
//   const sampleOrder = {
//     _id: "68e8ec700b342d91a8713625",
//     Price: 312.52,
//     createdAt: "2025-10-10T11:22:24.432Z",
//     isDelivered: false,
//     isPaid: false,
//     paymentMethod: "COD",
//     products: [
//       {
//         name: "Premium Wireless Headphones",
//         quantity: 2,
//         price: 106.26,
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
//       }
//     ],
//     shippingAddress: {
//       streetAddress: 'IslamPura',
//       city: 'Lahore',
//       country: 'Pakistan',
//       postalCode: 123456
//     },
//     shippingPrice: 100,
//     status: "Processing",
//     PaymentStatus: "pending",
//     user: "68e8e9980b342d91a8713531"
//   };

  useEffect(() => {
    // Simulate API call - Replace with actual fetch
    const fetchOrder = async () => {
      try {
        // Uncomment below for real API integration
        // const response = await fetch(`/api/orders/${orderId}`);
        // const data = await response.json();
        // setOrder(data);
        
        // Using sample data for now
        setTimeout(() => {
          setOrder(sampleOrder);
          setLoading(false);
          setShowConfetti(true);
          setTimeout(() => setSlideIn(true), 300);
          setTimeout(() => setShowConfetti(false), 3000);
        }, 500);
      } catch (error) {
        console.error('Error fetching order:', error);
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatOrderId = (orderId) => {
    return orderId.slice(-8).toUpperCase();
  };

  const getStatusColor = (status) => {
    const colors = {
      'Processing': 'bg-blue-50 text-blue-700 border-blue-200',
      'Confirmed': 'bg-green-50 text-green-700 border-green-200',
      'Shipped': 'bg-purple-50 text-purple-700 border-purple-200',
      'Delivered': 'bg-emerald-50 text-emerald-700 border-emerald-200',
      'Cancelled': 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getPaymentStatusColor = (status) => {
    const colors = {
      'pending': 'bg-amber-50 text-amber-700 border-amber-200',
      'paid': 'bg-green-50 text-green-700 border-green-200',
      'failed': 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
          <p className="text-gray-600">The order you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animation: `fall ${2 + Math.random() * 2}s linear`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            >
              <div
                className="w-2 h-4"
                style={{
                  backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* <h1 className="text-base font-semibold sm:text-xl sm:font-bold text-gray-900">Order Confirmation</h1> */}
            <span className="text-sm text-gray-500 text-center"><span className='font-bold text-lg'>Order</span> #{id}</span>
            <button onClick={()=>navigate("/")} className='px-3 py-1 bg-black text-white text-center flex items-center justify-center rounded-sm gap-2'>
                <Home className='size-5'/>
                <span>Home</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        {/* Success Banner */}
        <div className={`mb-8 transition-all duration-700 ${slideIn ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-bold mb-1">Order Confirmed</h2>
                  <p className="text-green-50 text-base sm:text-lg">Your order has been received</p>
                </div>
              </div>
              <div className="text-right w-full bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-green-100 text-sm mb-1">Order Date</p>
                <p className="font-semibold text-lg">{formatDate(order.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Timeline */}
            <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-700 delay-100 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-600" />
                Order Status
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className={`px-4 py-2 rounded-lg border-2 font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </div>
                    {order.isDelivered ? (
                      <span className="text-sm text-gray-600">Delivered</span>
                    ) : (
                      <span className="text-sm text-gray-600">In Progress</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Estimated delivery: 3-5 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-700 delay-200 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                Order Items ({order.products.length})
              </h3>
              <div className="space-y-4">
                {order.products.map((product, index) => (
                  <div key={index} className="flex items-center space-x-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="relative">
                      <img
                        src={product.images}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg border-2 border-gray-100"
                      />
                      <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {product.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-500">Quantity: {product.quantity} × ${product.price.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-700 delay-300 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Shipping Address
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900">{order.shippingAddress.streetAddress}</p>
                  <p className="text-gray-700">{order.shippingAddress.city}</p>
                  <p className="text-gray-700">{order.shippingAddress.country} - {order.shippingAddress.postalCode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-700 delay-400 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${(order.Price - order.shippingPrice).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span className="font-medium">${order.shippingPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">${order.Price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-700 delay-500 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                Payment Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-semibold text-gray-900">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getPaymentStatusColor(order.PaymentStatus)}`}>
                    {order.PaymentStatus.charAt(0).toUpperCase() + order.PaymentStatus.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Paid Amount</span>
                  <span className="font-semibold text-gray-900">
                    {order.isPaid ? `$${order.Price.toFixed(2)}` : 'Pending'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`space-y-3 transition-all duration-700 delay-600 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center space-x-2">
                <Truck className="w-5 h-5" />
                <span>Track Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full bg-white text-gray-700 py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Download Invoice</span>
              </button>
            </div>

            {/* Support Section */}
            <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 transition-all duration-700 delay-700 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Our customer support team is here to assist you</p>
              <div className="space-y-2">
                <a href="mailto:support@example.com" className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                  <Mail className="w-4 h-4" />
                  <span>urbanKart@store.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className={`text-center mt-8 transition-all duration-700 delay-800 ${slideIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Thank you for your order!</span>
            </p>
            <p className="text-gray-600 text-sm">
              We'll send you shipping confirmation and tracking information via email when your order is on its way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}