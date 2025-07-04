import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { CiCircleAlert, CiWarning } from "react-icons/ci";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setError] = useState({});
  const newPassValidation = (password) => {
    if (!password || password.length < 1) return "Enter Password";
    if (password.length < 7)
      return "Password must be greater than 6 characters";
    if (!/(?=.*[a-z])/.test(password))
      return "Password must contain at least one small letter";
    if (!/(?=.*[A-Z])/.test(password))
      return "Password must contain at least one big letter";
    if (!/(?=.*\d)/.test(password))
      return "Password must contain at least one Numberic Value";
    return "";
  };
  const confirmPassValidator = (password, confirmPassword) => {
    if (!confirmPassword || confirmPassword.length < 1)
      return "Confirm Password Required";
    if (confirmPassword !== password) return "Confirm Password not Match";
    return "";
    m;
  };
  const currentPasswordVaidation = (password) => {
    if (!password || password.length < 1) return "Current Password is required";
    return "";
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "oldPassword") {
      setOldPassword(value);
      //purane error ko run time me khatam kerna
      if (errors[name]) {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
      const passError = currentPasswordVaidation(value);
      setError((prev) => ({ ...prev, [name]: passError }));
    }
    if (name === "newPassword") {
      setNewPassword(value);
      //purane error ko run time me khatam kerna
      if (errors[name]) {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
      //pir ager pir error hue to runtime me hi error add ker denge
      const passError = newPassValidation(value);
      setError((prev) => ({ ...prev, [name]: passError }));
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
      if (errors[name]) {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
      setError((prev) => ({
        ...prev,
        [name]: confirmPassValidator(newPassword, value),
      }));
    }
  };
  const submitHandler = () => {
    const newPassError = newPassValidation(newPassword);
    console.log("New pass err", newPassError);
    const confirmPassError = confirmPassValidator(newPassword, confirmPassword);
    console.log("confirm err", confirmPassError);
    const currentPassError = currentPasswordVaidation(oldPassword);
    console.log("current err", confirmPassError);
    const errorObj = {
      newPassword: newPassError,
      confirmPassword: confirmPassError,
      oldPassword: currentPassError,
    };

    setError(errorObj);
    const isValid = !Object.values(errorObj).some((err) => err !== "");
    console.log(isValid);
    if (isValid) {
      setOldPassword(oldPassword);
      setNewPassword(newPassword);
      setConfirmPassword(confirmPassword);
      console.log({ oldPassword, newPassword, confirmPassword });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };
  return (
    // <div className="p-2  relative">
    <div className="w-full max-w-screen overflow-x-hidden px-2 lg:flex lg:flex-row-reverse lg:justify-start lg:relative">
      {/* warning or alert show */}
      <div className="flex items-center justify-center lg:justify-end">
        <div className="bg-orange-100 w-full lg:w-[60%] rounded-lg p-2">
          <div className="flex flex-col items-center justify-center text-center">
            <CiCircleAlert
              className="text-orange-400 h-5 w-5"
              strokeWidth={1}
            />
            <span className="text-[10px] md:text-sm">
              After updating your password, you will need to log in again. This
              is required for security to refresh your session.
            </span>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-[60%] bg-green-400"> */}
      {/* <div className="flex items-center justify-center flex-col">*/}
      {/* <div className="lg:absolute lg:top-0 ">  */}
      <div className="flex items-center justify-start flex-col w-full">
        <div className="w-full max-w-md space-y-2 ">
          {/* oldPassword, newPassword, confirmPassword  */}
          <label htmlFor="" className="text-[10px] lg:text-sm">
            Enter Current Password
          </label>
          <div className="bg-gray-200 w-full rounded-lg relative p-2">
            <input
              type={showPassword ? "text" : "password"}
              name="oldPassword"
              className="outline-none w-full pl-2 pr-5"
              value={oldPassword}
              onChange={changeHandler}
            />
            <div className="absolute right-2 top-3">
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-5 h-5"
                />
              ) : (
                <Eye
                  className="w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {/* old password section  oldPassword*/}
          <div className="h-2">
            {errors.oldPassword && (
              <div className="">
                <span className="flex items-center gap-2 text-[10px] text-red-500">
                  <CiWarning className="w-4 h-4 text-yellow-400" />
                  {errors.oldPassword}
                </span>
              </div>
            )}
          </div>
          <label
            htmlFor=""
            className="text-start flex items-start text-[10px] lg:text-sm"
          >
            Enter new Password
          </label>
          <div className="bg-gray-200 w-full rounded-lg relative p-2">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              className="outline-none w-full pl-2 pr-5"
              value={newPassword}
              onChange={changeHandler}
            />
            <div className="absolute right-2 top-3">
              {showNewPassword ? (
                <EyeOff
                  onClick={() => setShowNewPassword(false)}
                  className="w-5 h-5"
                />
              ) : (
                <Eye
                  className="w-5 h-5"
                  onClick={() => setShowNewPassword(true)}
                />
              )}
            </div>
          </div>
          <div className="h-2">
            {errors.newPassword && (
              <div className="">
                <span className="flex items-center gap-2 text-[10px] text-red-500">
                  <CiWarning className="w-4 h-4 text-yellow-400" />
                  {errors.newPassword}
                </span>
              </div>
            )}
          </div>
          <label
            htmlFor=""
            className="text-start flex items-start text-[10px] lg:text-sm"
          >
            Confirm Password
          </label>
          <div className="bg-gray-200 w-full rounded-lg relative p-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="outline-none w-full pl-2 pr-5"
              value={confirmPassword}
              onChange={changeHandler}
            />
            <div className="absolute right-2 top-3">
              {showConfirmPassword ? (
                <EyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="w-5 h-5"
                />
              ) : (
                <Eye
                  className="w-5 h-5"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
          </div>
          <div className="h-4">
            {errors.confirmPassword && (
              <div className="">
                <span className="flex items-center gap-2 text-[10px] text-red-500">
                  <CiWarning className="w-4 h-4 text-yellow-400" />
                  {errors.confirmPassword}
                </span>
              </div>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={submitHandler}
              className={`text-sm w-full bg-black hover:scale-95 transition-all duration-200 hover:bg-slate-950 text-white px-3 py-2 rounded-lg lg:cursor-pointer ${
                oldPassword === "" ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ChangePassword;
