import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";
const AddPassword = () => {
  const [address, setNewAddress] = useState("");
  const [updateAddress, setUpdateAddress] = useState(false);
  const [errors, setError] = useState({});
  const addressValidation = (address) => {
    if (!address.trim()) return "First Write New Address";
    if (address.length > 100) return "Address should be less than 100";
    return "";
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewAddress(value);
    if (errors[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
    console.log(name);
    const addressError = addressValidation(value);
    console.log(addressError);
    setError((prev) => ({ ...prev, [name]: addressError }));
  };
  const submitHandler = () => {
    const addressError = addressValidation(address);
    if (addressError) {
      setError({ addressError });
      return;
    }
    const isValid = !Object.values(addressError).some((err) => err !== "");
    if (isValid) {
      setError({});
      setNewAddress(address);
      console.log({ address });
      setNewAddress("");
    }
  };
  return (
    <div className="p-2 relative font-fira">
      <h2 className="text-lg lg:text-xl font-semibold">Add Address</h2>
      <div className="">
        <label htmlFor="" className="text-[10px] font-light">
          Old Address
        </label>
        <h3 className="w-full bg-gray-100 text-sm p-1 lg:p-2 mb-3 rounded cursor-not-allowed">
          Old Address
        </h3>
        {updateAddress ? (
          <div className="mb-5">
            <label htmlFor="" className="text-[10px] font-light  mt-3">
              Add New Address
            </label>
            <textarea
              type="text"
              name="address"
              className="w-full bg-gray-100 outline-none  p-2 rounded"
              placeholder="Add New Address"
              value={address}
              onChange={changeHandler}
            />
            {/* If error present */}
            <div className="h-10">
              {errors.address && (
                <div className="flex items-center">
                  <span className="flex items-center gap-2 text-[10px] md:text-sm text-red-500">
                    <CiWarning className="w-4 h-4 text-orange-400" />
                    {errors.address}
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setUpdateAddress(true)}
            className="bg-black text-white px-3 py-1 rounded text-sm cursor-pointer hover:scale-110 duration-200 transition-all"
          >
            Set Address
          </button>
        )}

        {updateAddress ? (
          <button
            onClick={submitHandler}
            className={`bg-black mt-3 text-white absolute bottom-2 right-2 px-3 py-2 rounded-lg hover:scale-110 transition-all duration-200 ${
              errors.address || address === ""
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Save
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddPassword;
