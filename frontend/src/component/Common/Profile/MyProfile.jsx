import React from "react";

const MyProfile = () => {
  return (
    <div className="">
      <h2>My Profile</h2>
      <div className="p-2 w-full">
        <div className="flex gap-2 flex-col lg:flex-row">
          <div className="w-[100%]">
            <label className="text-[10px]" htmlFor="">
              First Name
            </label>
            <h3 className="bg-gray-100 p-1 rounded">John</h3>
          </div>
          <div className="w-[100%]">
            <label className="text-[10px]" htmlFor="">
              LastName
            </label>
            <h3 className="bg-gray-100 p-1 w-full rounded">Doe</h3>
          </div>
        </div>
        <div className="flex gap-2 lg:flex-row flex-col">
          <div className="w-[100%]">
            <label className="text-[10px]" htmlFor="">
              Email
            </label>
            <h3 className="bg-gray-100 p-2 w-full rounded text-[12px] lg:text-base">
              johnDoe@gmail.com
            </h3>
          </div>
          <div className="w-[100%]">
            <label className="text-[10px]" htmlFor="">
              Address
            </label>
            <h3 className="bg-gray-100 p-2 w-full rounded text-[12px] lg:text-base ">
              H150 Johar Town C1 Lahore,Pakistan
            </h3>
            {/* {ager address na para ho to varning type kuch dekahye} */}
          </div>
        </div>
        <div className="flex flex-col my-10 space-y-3 w-[60%] lg:w-[20%] text-[10px]">
          <button className="bg-black text-white px-3 py-2 rounded">
            Show Cart
          </button>
          <button className="bg-black text-white px-3 py-2 rounded">
            Show WishList
          </button>
          <button className="bg-black text-white px-3 py-2 rounded">
            Show Reviews
          </button>
          <button className="bg-black text-white px-3 py-2 rounded">
            Show Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
