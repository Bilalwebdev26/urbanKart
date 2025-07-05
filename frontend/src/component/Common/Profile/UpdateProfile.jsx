import { AlertCircle, FilePenLine, User } from "lucide-react";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
const UpdateProfile = () => {
  // const { firstname, lastname, address } = req.body;
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const nameValidaion = (name) => {
    if (!name.trim()) return "Name is Required.";
    if (name.length > 15) return "Name too long.";
    return "";
  };
  const addressValidation = (add) => {
    if (!add.trim() || !add) return "Address is required";
    if (add.length > 100) return "Address should be less than 100";
    return "";
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "firstname") {
      setFirstName(value);
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      setErrors((prev) => ({ ...prev, [name]: nameValidaion(value) }));
    }
    if (name === "lastname") {
      setLastName(value);
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      setErrors((prev) => ({ ...prev, [name]: nameValidaion(value) }));
    }
    if (name === "address") {
      setAddress(value);
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      setErrors((prev) => ({ ...prev, [name]: addressValidation(value) }));
    }
  };
  const submitHandler = () => {
    const firstNameError = nameValidaion(firstname);
    const lastNameError = nameValidaion(lastname);
    const addressError = addressValidation(address);
    const newErrors = {
      firstname: firstNameError,
      lastname: lastNameError,
      address: addressError,
    };
    setErrors(newErrors);
    console.log("New Errors", newErrors);
    const isValid = !Object.values(newErrors).some((err) => err !== "");
    if (isValid) {
      setFirstName(firstname);
      setLastName(lastname);
      setAddress(address);
      console.log({ firstname, lastname, address });
      setFirstName("");
      setLastName("");
      setAddress("");
    }
  };
  return (
    <div>
      <div className="font-fira p-1">
        <h2 className="font-semibold text-[10px] lg:text-sm">
          If You Wan't to update username and address
        </h2>
        <div className="">
          <label className="text-[12px] lg:text-sm" htmlFor="">
            Update First Name
          </label>
          <div className="rounded-lg relative px-1">
            <FaUser className="absolute bottom-3" />
            <input
              type="text"
              name="firstname"
              className="outline-none p-2 w-full bg-gray-100 rounded-lg pl-5 pr-3 border border-transparent focus:outline-blue-400 focus:border-blue-400"
              placeholder="Enter First Name..."
              onChange={changeHandler}
              value={firstname}
            />
          </div>
          <div className="px-1 h-3">
            {errors.firstname && (
              <div className="text-red-500 text-[10px] lg:text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 lg:w-5 lg:h-5 text-orange-500" />
                {errors.firstname}
              </div>
            )}
          </div>
          <label className="text-[12px] lg:text-sm" htmlFor="">
            Update Last Name
          </label>
          <div className="rounded-lg relative px-1">
            <User className="absolute bottom-3 w-4 h-4" />
            <input
              type="text"
              className="outline-none p-2 w-full bg-gray-100 rounded-lg pl-5 pr-3 border border-transparent focus:outline-blue-400 focus:border-blue-400"
              placeholder="Enter Last Name..."
              name="lastname"
              onChange={changeHandler}
              value={lastname}
            />
          </div>
          <div className="px-1 h-3">
            {errors.lastname && (
              <div className="text-red-500 text-[10px] lg:text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 lg:w-5 lg:h-5 text-orange-500" />
                {errors.lastname}
              </div>
            )}
          </div>
          <label className="text-[12px] lg:text-sm" htmlFor="">
            Update Address
          </label>
          <div className="rounded-lg relative px-1">
            <FaAddressCard className="absolute left-[6px] bottom-11 w-4 h-4" />
            <textarea
              className="outline-none p-2 w-full bg-gray-100 rounded-lg pl-5 pr-3 border border-transparent focus:outline-blue-400 focus:border-blue-400"
              placeholder="Enter Address..."
              name="address"
              onChange={changeHandler}
              value={address}
            ></textarea>
          </div>
          <div className="px-1 h-3">
            {errors.address && (
              <div className="text-red-500 text-[10px] lg:text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 lg:w-5 lg:h-5 text-orange-500" />
                {errors.address}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end my-4 ">
          <div
            onClick={submitHandler}
            className="flex items-center justify-center lg:w-[20%] gap-2 bg-black text-white shadow-lg px-3 py-2 rounded-md lg:cursor-pointer transition-all duration-200 hover:scale-95"
          >
            <FilePenLine />
            <button className="">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
