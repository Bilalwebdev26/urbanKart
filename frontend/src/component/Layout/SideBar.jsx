// import React from "react";
// import { RiGhost2Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   return (
//     <div>
//       <div className="z-40">
//         <div className="flex flex-col space-y-1 mt-8">
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               Categories
//             </h3>
//             <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
//           </div>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Women's Fashion</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Men's Fashion</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Electronics</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Health & Care</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Medicine</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Sports & Outdoor</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Baby's & Toys</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Groceries & Pets</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>

//           <Link className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 group">
//             <span>Health & Beauty</span>
//             <RiGhost2Fill className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React from "react";
import { 
  RiGhost2Fill,
  RiArrowRightSLine,
  RiShirtLine,
  RiTShirtLine,
  RiComputerLine,
  RiHeartPulseLine,
  RiCapsuleLine,
  RiFootballLine,
  RiBearSmileLine,
  RiShoppingBag3Line,
  RiLeafLine
} from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = () => {
  const categories = [
    { name: "Women's Fashion", icon: RiShirtLine, path: "/women-fashion" },
    { name: "Men's Fashion", icon: RiTShirtLine, path: "/men-fashion" },
    { name: "Electronics", icon: RiComputerLine, path: "/electronics" },
    { name: "Health & Care", icon: RiHeartPulseLine, path: "/health-care" },
    { name: "Medicine", icon: RiCapsuleLine, path: "/medicine" },
    { name: "Sports & Outdoor", icon: RiFootballLine, path: "/sports-outdoor" },
    { name: "Baby's & Toys", icon: RiBearSmileLine, path: "/baby-toys" },
    { name: "Groceries & Pets", icon: RiShoppingBag3Line, path: "/groceries-pets" },
    { name: "Health & Beauty", icon: RiLeafLine, path: "/health-beauty" }
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-black p-4">
        <div className="flex items-center space-x-2">
          <RiGhost2Fill className="text-white text-2xl" />
          <h2 className="text-white font-bold text-lg">Categories</h2>
        </div>
      </div>

      {/* Categories List */}
      <div className="py-2">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={index}
              to={category.path}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <IconComponent className="text-gray-600 text-xl group-hover:text-purple-600 transition-colors duration-200" />
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-200">
                  {category.name}
                </span>
              </div>
              <RiArrowRightSLine className="text-gray-400 text-xl group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
// import React, { useState } from "react";
// import { 
//   RiGhost2Fill,
//   RiArrowRightSLine,
//   RiShirtLine,
//   RiTShirtLine,
//   RiComputerLine,
//   RiHeartPulseLine,
//   RiCapsuleLine,
//   RiFootballLine,
//   RiBearSmileLine,
//   RiShoppingBag3Line,
//   RiLeafLine,
//   RiMenuLine,
//   RiCloseLine
// } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const categories = [
//     { name: "Women's Fashion", icon: RiShirtLine, path: "/women-fashion" },
//     { name: "Men's Fashion", icon: RiTShirtLine, path: "/men-fashion" },
//     { name: "Electronics", icon: RiComputerLine, path: "/electronics" },
//     { name: "Health & Care", icon: RiHeartPulseLine, path: "/health-care" },
//     { name: "Medicine", icon: RiCapsuleLine, path: "/medicine" },
//     { name: "Sports & Outdoor", icon: RiFootballLine, path: "/sports-outdoor" },
//     { name: "Baby's & Toys", icon: RiBearSmileLine, path: "/baby-toys" },
//     { name: "Groceries & Pets", icon: RiShoppingBag3Line, path: "/groceries-pets" },
//     { name: "Health & Beauty", icon: RiLeafLine, path: "/health-beauty" }
//   ];

//   const toggleSidebar = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-200"
//       >
//         {isVisible ? <RiCloseLine className="text-xl" /> : <RiMenuLine className="text-xl" />}
//       </button>

//       {/* Overlay */}
//       {isVisible && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
//           onClick={() => setIsVisible(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
//           isVisible ? 'translate-y-0' : '-translate-y-full'
//         }`}
//       >
//         {/* Header */}
//         <div className="bg-black p-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <RiGhost2Fill className="text-black text-2xl" />
//             <h2 className="text-black font-bold text-lg">Categories</h2>
//           </div>
//           <button
//             onClick={toggleSidebar}
//             className="text-black hover:text-gray-300 transition-colors duration-200"
//           >
//             <RiCloseLine className="text-2xl" />
//           </button>
//         </div>

//         {/* Categories List */}
//         <div className="py-2 overflow-y-auto h-full pb-20">
//           {categories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <Link
//                 key={index}
//                 to={category.path}
//                 onClick={() => setIsVisible(false)}
//                 className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group border-b border-gray-100 last:border-b-0"
//               >
//                 <div className="flex items-center space-x-3">
//                   <IconComponent className="text-gray-600 text-xl group-hover:text-purple-600 transition-colors duration-200" />
//                   <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-200">
//                     {category.name}
//                   </span>
//                 </div>
//                 <RiArrowRightSLine className="text-gray-400 text-xl group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;
// import React from "react";
// import { 
//   RiGhost2Fill,
//   RiArrowRightSLine,
//   RiShirtLine,
//   RiTShirtLine,
//   RiComputerLine,
//   RiHeartPulseLine,
//   RiCapsuleLine,
//   RiFootballLine,
//   RiBearSmileLine,
//   RiShoppingBag3Line,
//   RiLeafLine
// } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const categories = [
//     { name: "Women's Fashion", icon: RiShirtLine, path: "/women-fashion" },
//     { name: "Men's Fashion", icon: RiTShirtLine, path: "/men-fashion" },
//     { name: "Electronics", icon: RiComputerLine, path: "/electronics" },
//     { name: "Health & Care", icon: RiHeartPulseLine, path: "/health-care" },
//     { name: "Medicine", icon: RiCapsuleLine, path: "/medicine" },
//     { name: "Sports & Outdoor", icon: RiFootballLine, path: "/sports-outdoor" },
//     { name: "Baby's & Toys", icon: RiBearSmileLine, path: "/baby-toys" },
//     { name: "Groceries & Pets", icon: RiShoppingBag3Line, path: "/groceries-pets" },
//     { name: "Health & Beauty", icon: RiLeafLine, path: "/health-beauty" }
//   ];

//   return (
//     <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden h-full">
//       {/* Header */}
//       <div className="bg-black p-4">
//         <div className="flex items-center space-x-2">
//           <RiGhost2Fill className="text-white text-2xl" />
//           <h2 className="text-white font-bold text-lg">Categories</h2>
//         </div>
//       </div>

//       {/* Categories List with Hidden Scrollbar */}
//       <div className="py-2 overflow-y-auto scrollbar-hide max-h-96">
//         <style jsx>{`
//           .scrollbar-hide {
//             -ms-overflow-style: none;  /* Internet Explorer 10+ */
//             scrollbar-width: none;  /* Firefox */
//           }
//           .scrollbar-hide::-webkit-scrollbar { 
//             display: none;  /* Safari and Chrome */
//           }
//         `}</style>
//         {categories.map((category, index) => {
//           const IconComponent = category.icon;
//           return (
//             <Link
//               key={index}
//               to={category.path}
//               className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group border-b border-gray-100 last:border-b-0"
//             >
//               <div className="flex items-center space-x-3">
//                 <IconComponent className="text-gray-600 text-xl group-hover:text-purple-600 transition-colors duration-200" />
//                 <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-200">
//                   {category.name}
//                 </span>
//               </div>
//               <RiArrowRightSLine className="text-gray-400 text-xl group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SideBar;