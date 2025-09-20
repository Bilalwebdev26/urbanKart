// import React, { useRef } from "react";
// import ProductList from "./ProductsList";
// import ps from "../../assets/ps.png";
// import perfume from "../../assets/perfume.png";
// import speaker from "../../assets/speaker.png";
// import womencol from "../../assets/womcol.jpg";
// import { Link } from "react-router-dom";
// const NewArrivals = () => {
//   const banner = [
//     {
//       _id: 1,
//       name: "Banner1",
//       title: "PlayStation 5",
//       desc: "Black and white version of the PS5 comming out on sale.",
//       image: ps,
//       link: "",
//     },
//     {
//       _id: 2,
//       name: "Banner2",
//       title: "PlayStation 5",
//       desc: "Black and white version of the PS5 comming out on sale.",
//       image: womencol,
//       link: "",
//     },
//     {
//       _id: 3,
//       name: "Banner3",
//       title: "PlayStation 5",
//       desc: "Black and white version of the PS5 comming out on sale.",
//       image: perfume,
//       link: "",
//     },
//     {
//       _id: 4,
//       name: "Banner4",
//       title: "PlayStation 5",
//       desc: "Black and white version of the PS5 comming out on sale.",
//       image: speaker,
//       link: "",
//     },
//   ];
//   const products = [
//     {
//       _id: "1",
//       name: "Premium Wireless Headphones",
//       price: 299,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 27,
//       numReviews: 128,
//     },
//     {
//       _id: "2",
//       name: "Smart Watch Pro",
//       price: 199,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 37,
//       numReviews: 89,
//     },
//     {
//       _id: "3",
//       name: "Gaming Mechanical Keyboard",
//       price: 149,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 25,
//       numReviews: 234,
//     },
//     {
//       _id: "4",
//       name: "Ultra HD 4K Monitor",
//       price: 449,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 30,
//       numReviews: 156,
//     },
//     {
//       _id: "5",
//       name: "Bluetooth Speaker",
//       price: 89,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 33,
//       numReviews: 67,
//     },
//     {
//       _id: "6",
//       name: "Wireless Mouse",
//       price: 59,
//       images: [
//         {
//           url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
//         },
//       ],
//       percentOff: 28,
//       numReviews: 45,
//     },
//   ];
//   const scrollRef = useRef();
//   return (
//     <div>
//       <div className="flex items-center gap-2">
//         <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
//         <h3 className="text-red-500 text-sm poppins-font font-semibold">
//           Featured
//         </h3>
//       </div>
//       <div className="flex items-center justify-between">
//         <h2 className="poppins-font font-bold text-2xl mt-2">New Arrivals</h2>
//       </div>
//       <div className="flex gap-2 w-full h-80  mb-4">
//         {/* left side 1 banner max-h-70 lg:*/}
//         <div className="bg-black w-[50%] h-80  overflow-hidden relative">
//           <img src={ps} alt="name" className="w-full h-full object-contain" />
//           <div className="absolute text-white bottom-0 p-2">
//             <h3 className="text-lg font-semibold">{banner[0].title}</h3>
//             <p className="hidden md:flex text-sm text-gray-400">{banner[0].desc}</p>
//             <Link className="underline">Shop Now</Link>
//           </div>
//         </div>
//         {/*Right side 2,3,4 banner */}
//         <div className=" w-[60%] h-80 space-y-2">
//           {/* Banner 2 */}
//           <div className="w-full h-38 bg-black overflow-hidden relative">
//             <img
//               src={womencol}
//               alt="womencol"
//               className="w-80 h-full object-cover object-left"
//             />
//             <div className="absolute text-white bottom-0 p-2">
//              <h3 className="text-lg font-semibold">{banner[1].title}</h3>
//             <p className="hidden md:flex text-sm text-gray-400">{banner[1].desc}</p>
//             <Link className="underline">Shop Now</Link>
//             </div>
//           </div>
//           {/* banner 3,4 */}
//           <div className="h-39 w-full flex gap-2">
//             {/* banner3 */}
//             <div className="bg-black w-[50%] h-39 relative">
//               <img
//                 src={perfume}
//                 alt="per"
//                 className="w-40 h-40 object-contain"
//               />
//               <div className="absolute text-white bottom-0 p-2">
//                 <h3 className="text-lg font-semibold">{banner[2].title}</h3>
//             <p className="hidden md:flex text-sm text-gray-400">{banner[2].desc}</p>
//             <Link className="underline">Shop Now</Link>
//               </div>
//             </div>
//             {/* banner4 */}
//             <div className="bg-black w-[50%] h-39 relative">
//               <img
//                 src={speaker}
//                 alt="spe"
//                 className="w-40 h-40 object-contain"
//               />
//               <div className="absolute text-white bottom-0 p-2">
//                 <h3 className="text-lg font-semibold">{banner[3].title}</h3>
//             <p className="hidden md:flex text-sm text-gray-400">{banner[3].desc}</p>
//             <Link className="underline">Shop Now</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ProductList list={products} scrollRef={scrollRef} />
//     </div>
//   );
// };

// export default NewArrivals;
import React, { useEffect, useRef } from "react";
import ProductList from "./ProductsList";
import ps from "../../assets/ps.png";
import perfume from "../../assets/perfume.png";
import speaker from "../../assets/speaker.png";
import womencol from "../../assets/womcol.jpg";
import { Link } from "react-router-dom";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewArrivalsProducts } from "@/redux/Client/product.store";
const NewArrivals = () => {
  const { newArrivals: products, loading } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewArrivalsProducts());
  }, [dispatch]);
  const banner = [
    {
      _id: 1,
      name: "Banner1",
      title: "PlayStation 5",
      desc: "Black and white version of the PS5 comming out on sale.",
      image: ps,
      link: "",
    },
    {
      _id: 2,
      name: "Banner2",
      title: "PlayStation 5",
      desc: "Black and white version of the PS5 comming out on sale.",
      image: womencol,
      link: "",
    },
    {
      _id: 3,
      name: "Banner3",
      title: "PlayStation 5",
      desc: "Black and white version of the PS5 comming out on sale.",
      image: perfume,
      link: "",
    },
    {
      _id: 4,
      name: "Banner4",
      title: "PlayStation 5",
      desc: "Black and white version of the PS5 comming out on sale.",
      image: speaker,
      link: "",
    },
  ];
  // const products = [
  //   {
  //     _id: "1",
  //     name: "Premium Wireless Headphones",
  //     price: 299,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 27,
  //     numReviews: 128,
  //   },
  //   {
  //     _id: "2",
  //     name: "Smart Watch Pro",
  //     price: 199,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 37,
  //     numReviews: 89,
  //   },
  //   {
  //     _id: "3",
  //     name: "Gaming Mechanical Keyboard",
  //     price: 149,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 25,
  //     numReviews: 234,
  //   },
  //   {
  //     _id: "4",
  //     name: "Ultra HD 4K Monitor",
  //     price: 449,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 30,
  //     numReviews: 156,
  //   },
  //   {
  //     _id: "5",
  //     name: "Bluetooth Speaker",
  //     price: 89,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 33,
  //     numReviews: 67,
  //   },
  //   {
  //     _id: "6",
  //     name: "Wireless Mouse",
  //     price: 59,
  //     images: [
  //       {
  //         url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
  //       },
  //     ],
  //     percentOff: 28,
  //     numReviews: 45,
  //   },
  // ];
  const scrollRef = useRef();
  const moveLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400, // scroll 300px to left
        behavior: "smooth",
      });
    }
  };
  const moveRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400, // scroll 300px to left
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
        <h3 className="text-red-500 text-sm poppins-font font-semibold">
          Featured
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="poppins-font font-bold text-2xl mt-2">New Arrivals</h2>
        <div className="flex gap-4 items-center justify-center p-3">
          {/* Left Hand Icon */}
          <div
            onClick={moveLeft}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <FaRegHandPointLeft className="text-gray-700 text-lg" />
          </div>

          {/* Right Hand Icon */}
          <div
            onClick={moveRight}
            className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
          >
            <FaRegHandPointRight className="text-gray-700 text-lg" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full h-80 lg:h-100 mb-3">
        {/* left side 1 banner max-h-70 lg:*/}
        <div className="bg-black w-[50%] h-80 lg:h-100 overflow-hidden relative">
          <img src={ps} alt="name" className="w-full h-full object-contain" />
          <div className="absolute text-white bottom-0 p-2">
            <h3 className="text-lg font-semibold">{banner[0].title}</h3>
            <p className="hidden md:flex text-sm text-gray-400">
              {banner[0].desc}
            </p>
            <Link className="underline">Shop Now</Link>
          </div>
        </div>
        {/*Right side 2,3,4 banner */}
        <div className=" w-[60%] h-80 lg:h-100 space-y-2">
          {/* Banner 2 */}
          <div className="w-full h-38 lg:h-50 bg-black overflow-hidden relative">
            <img
              src={womencol}
              alt="womencol"
              className="w-80 h-full object-cover object-left"
            />
            <div className="absolute text-white bottom-0 p-2">
              <h3 className="text-sm font-semibold">{banner[1].title}</h3>
              <p className="hidden md:flex text-sm text-gray-400">
                {banner[1].desc}
              </p>
              <Link className="underline">Shop Now</Link>
            </div>
          </div>
          {/* banner 3,4 */}
          <div className="h-40 lg:h-50 w-full flex gap-2">
            {/* banner3 */}
            <div className="bg-black w-[50%] h-40 lg:h-48 relative">
              <img
                src={perfume}
                alt="per"
                className="w-40 h-40 object-contain"
              />
              <div className="absolute text-white bottom-0 p-2">
                <h3 className="text-sm font-semibold">{banner[2].title}</h3>
                <p className="hidden md:flex text-sm text-gray-400">
                  {banner[2].desc}
                </p>
                <Link className="underline">Shop Now</Link>
              </div>
            </div>
            {/* banner4 */}
            <div className="bg-black w-[50%] h-40 lg:h-48 relative">
              <img
                src={speaker}
                alt="spe"
                className="w-40 h-40 object-contain"
              />
              <div className="absolute text-white bottom-0 p-2">
                <h3 className="text-sm font-semibold">{banner[3].title}</h3>
                <p className="hidden md:flex text-sm text-gray-400">
                  {banner[3].desc}
                </p>
                <Link className="underline">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList products={products} scrollRef={scrollRef} loading={loading} />
      <div className="flex items-center justify-center">
        <button className="bg-red-500 px-4 py-2 text-white poppins-font mt-3 rounded font-semibold">
          Newly Add Products
        </button>
      </div>
      <br />
      <div className="w-full h-[2px] bg-gray-200 mb-7"></div>
    </div>
  );
};

export default NewArrivals;
