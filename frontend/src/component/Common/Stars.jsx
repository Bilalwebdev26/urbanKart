// import React from "react";
// import { Star } from "lucide-react";
// const Stars = ({ stars }) => {
//     const starHelperFn = (starNum)=>{
//      for(i=1;i<=starNum;i++){
//         return(
//             <div>

//             </div>
//         )
//      }
//     }
//   return (
//     <div className="">
//       {/* stars -> 5 */}
//       {stars === 5 && (
//         <div className="flex items-center">
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//         </div>
//       )}
//       {/* stars -> 4 */}
//       {stars === 4 && (
//         <div className="flex items-center">
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//         </div>
//       )}
//       {/* stars -> 3 */}
//       {stars === 3 && (
//         <div className="flex items-center">
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//         </div>
//       )}
//       {/* stars -> 2 */}
//       {stars === 2 && (
//         <div className="flex items-center">
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//         </div>
//       )}
//       {/* stars -> 1 */}
//       {stars === 1 && (
//         <div className="flex items-center">
//           <Star className="text-yellow-500 fill-yellow-500" />
//           <Star />
//           <Star />
//           <Star />
//           <Star />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stars;
// import React from "react";
// import { Star } from "lucide-react";

// const Stars = ({ stars }) => {
//   return (
//     <div className="flex items-center">
//       {[...Array(5)].map((_, index) => {
//         const isFilled = index < stars; // Fill the first "stars" number of stars
//         return (
//           <Star
//             key={index}
//             stroke="black"
//             className={`size-4 ${
//               isFilled ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300 "
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Stars;
import React,{memo} from "react";
import ReactStars from "react-rating-stars-component";

const Stars = ({ stars }) => {
  const handleStars = (() => {
    const decimal = stars % 1;
    if (decimal.toFixed(1) <= 0.2) return Math.floor(stars);
    if (decimal.toFixed(1) <= 0.4) return Math.floor(stars) + 0.5;
    if (decimal.toFixed(1) <= 0.8) return stars;
    else return Math.ceil(stars);
  })();
  return (
    <ReactStars
      count={5} // Total stars
      value={handleStars} // Current rating (like 3.5)
      edit={false} // Read-only
      size={20} // Size of stars
      activeColor="#FFD700" // Gold color
      isHalf={true} // Allow half stars
    />
  );
};

export default memo(Stars);
