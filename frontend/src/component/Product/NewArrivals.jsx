import React from "react";
import ps from "../../assets/ps.png";
import perfume from "../../assets/perfume.png";
import speaker from "../../assets/speaker.png";
import womencol from "../../assets/womcol.jpg";
const NewArrivals = () => {
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
      </div>
      <div className="flex gap-2 w-full">
        {/* left side 1 banner */}
        <div className="bg-black w-[100%] lg:w-[40%] max-h-50 lg:max-h-130">
          <img src={ps} alt="name" className="h-full" />
        </div>
        {/*Right side 2,3,4 banner */}
        <div className=" w-[60%] h-130">
          {/* Banner 2 */}
          <div className="w-full max-h-1/2 bg-black">
            <img src={womencol} alt="womencol" className="h-full" />
          </div>
          {/* banner 3,4 */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
