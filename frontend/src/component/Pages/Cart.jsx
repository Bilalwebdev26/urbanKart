// import React, { useEffect } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCartProducts } from "@/redux/Client/cart.store";
// const Cart = () => {
//   const dispatch = useDispatch()
//   const {
//     cart,
//     loading: cartLoading,
//     error:cartError,
//   } = useSelector((state) => state.cart);
//   console.log("Cart : ",cart)
//   useEffect(()=>{
//     dispatch(fetchCartProducts())
//   },[dispatch])
//   // if(cartLoading){
//   //   return <h1>Loading</h1>
//   // }
//   return (
//     <div className="">
//       <div className="flex items-center gap-2 my-2">
//         <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
//         <h3 className="text-red-500 text-sm poppins-font font-semibold">
//           Cart Products Detail
//         </h3>
//       </div>
//       <div className="">
//         {cartLoading ? (

//         // Loading Skeleton Rows
//       Array(5).fill(0).map((_, i) => (
//         <TableRow key={i} className="animate-pulse">
//           <TableCell>
//             <div className="h-4 w-24 bg-gray-200 rounded"></div>
//           </TableCell>
//           <TableCell>
//             <div className="h-4 w-32 bg-gray-200 rounded"></div>
//           </TableCell>
//           <TableCell>
//             <div className="h-4 w-16 bg-gray-200 rounded"></div>
//           </TableCell>
//           <TableCell>
//             <div className="h-4 w-12 bg-gray-200 rounded"></div>
//           </TableCell>
//           <TableCell>
//             <div className="h-4 w-10 bg-gray-200 rounded"></div>
//           </TableCell>
//           <TableCell className="text-right">
//             <div className="h-4 w-14 bg-gray-200 rounded ml-auto"></div>
//           </TableCell>
//         </TableRow>
//       ))
//         ) : (
//           <Table>
//             <TableCaption>A list of your cart items.</TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="">Image</TableHead>
//                 <TableHead className="w-[100px]">Name</TableHead>
//                 <TableHead className="">Size/Color</TableHead>
//                 <TableHead>Price</TableHead>
//                 <TableHead>Quantity</TableHead>
//                 <TableHead className="">Subtotal</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {cart?.products?.map((c) => (
//                 <TableRow key={c.productId}>
//                   <TableCell className="">{c.name}</TableCell>
//                   <TableCell className="font-medium">{c.name}</TableCell>
//                   <TableCell>{c.size}/{c.color}</TableCell>
//                   <TableCell>{c?.price}</TableCell>
//                   <TableCell>{c?.quantity}</TableCell>
//                   <TableCell className="text-right">{c.price*c.quantity}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts, updateQuantity } from "@/redux/Client/cart.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const Cart = () => {
  // const increase = () => setQuantity((prev) => prev + 1);
  // const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // min 1
  const dispatch = useDispatch();
  const {
    cart,
    loading: cartLoading,
    error: cartError,
  } = useSelector((state) => state.cart);
  console.log(cartError);
  const [quant, setQuan] = useState();
  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);
  const increaseProductQuantity = (product) => {
    const newQunatity = product.quantity + 1;
    console.log(newQunatity);
    console.log(product.productId);
    dispatch(
      updateQuantity({
        quantity: newQunatity,
        size: product.size,
        color: product.color,
        productId: product.productId, // ✅ same as thunk destructuring
      })
    );
    // dispatch(fetchCartProducts());
  };
  const decreaseProductQuantity = (product) => {
    if (product.quantity <= 1) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-slide-in-right" : "animate-slide-out-right"
          } w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md mx-auto sm:mx-0 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-200 ring-opacity-80 border-l-4 border-red-500`}
        >
          <div className="flex-1 w-0 p-3 sm:p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {/* Error Icon */}
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="ml-2 sm:ml-3 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate sm:overflow-visible">
                  Invalid Quantity
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-tight sm:leading-normal">
                  Quantity must be 1 or more to add to cart
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-2 sm:p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors "
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ));
    }
    dispatch(
      updateQuantity({
        quantity: product.quantity - 1,
        size: product.size,
        color: product.color,
        productId: product.productId, // ✅ same as thunk destructuring
      })
    );
  };
  // const isSmall = useMediaQuery({ maxWidth: 640 }); // sm breakpoint
  return (
    <div className="poppins-font">
      <div className="flex items-center gap-2 my-2">
        <div className="w-4 h-8 bg-red-500 rounded-[2px]" />
        <h3 className="text-red-500 text-sm poppins-font font-semibold">
          Cart Products Detail
        </h3>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <TableCaption>A list of your cart items.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="">Subtotal</TableHead>
              <TableHead>Remove</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {cartLoading
              ? Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <TableRow key={i} className="animate-pulse">
                      <TableCell>
                        <div className="h-12 w-12 bg-gray-200 rounded-md"></div>
                      </TableCell>
                      <TableCell>
                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                      </TableCell>

                      <TableCell>
                        <div className="h-4 w-16 bg-gray-200 rounded"></div>
                      </TableCell>
                      <TableCell>
                        <div className="h-4 w-12 bg-gray-200 rounded"></div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="h-4 w-20 bg-gray-200 rounded ml-auto"></div>
                      </TableCell>
                    </TableRow>
                  ))
              : cart?.products?.map((c) => (
                  <TableRow key={c.productId}>
                    {/* <TableCell className="max-w-[50px] max-h-[50px] ">
                      <div className="h-full w-full lg:h-full lg:w-full bg-gray-100 rounded-md flex items-center justify-center">
                        <img
                          src={c.images}
                          className="w-full h-20 object-center object-contain"
                          alt=""
                        />
                      </div>
                    </TableCell> */}
                    <TableCell className="w-[60px] h-[60px] p-2">
                      <div className="w-[50px] h-[50px] bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                        <img
                          src={c.images}
                          alt="product"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </TableCell>

                    <TableCell className="max-w-[100px] overflow-hidden text-xs lg:text-base font-bold">
                      {c.name}
                    </TableCell>

                    <TableCell className="text-xs lg:text-base font-semibold text-red-500 text-center">
                      {c.price}
                    </TableCell>
                    <TableCell>
                      <button className="">
                        <div className="relative">
                          <Input
                            type="number"
                            value={c.quantity}
                            onChange={(e) =>
                              dispatch(
                                updateQuantity({
                                  quantity: Number(e.target.value),
                                  size: c.size,
                                  color: c.color,
                                  ProductId: c.productId,
                                })
                              )
                            }
                            className="w-12 md:w-20 pr-5 text-center"
                          />

                          <div className="absolute inset-y-0 right-0 flex flex-col justify-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 p-0"
                              onClick={() => increaseProductQuantity(c)}
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 p-0"
                              onClick={() => decreaseProductQuantity(c)}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </button>
                    </TableCell>
                    <TableCell className="font-semibold text-xs lg:text-base text-red-500">
                      {(c.price * c.quantity).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </TableCell>
                    <TableCell className="font-semibold text-xs lg:text-base text-red-500">
                      <Trash2 />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="sm:hidden font-bold">
                Sub-Total
              </TableCell>

              {/* Large screen me colSpan=5 */}
              <TableCell colSpan={5} className="hidden sm:table-cell font-bold">
                Sub-Total
              </TableCell>
              <TableCell className="">
                {cart.totalPrice.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
