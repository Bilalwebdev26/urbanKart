import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle, CheckCircle, Loader } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Client/auth.store";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailValidation = (email) => {
    if (!email) return "Email is Required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid Email";
    return "";
  };
  const passwordValidation = (password) => {
    if (!password) return "Enter Password";
    return "";
  };
  const handleonChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      // Clear error when user starts typing/checking
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      const emailError = emailValidation(value);
      setErrors((prev) => ({ ...prev, email: emailError }));
    }
    if (name === "password") {
      setPassword(value);
      // Clear error when user starts typing/checking
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
      const passError = passwordValidation(value);
      setErrors((prev) => ({ ...prev, password: passError }));
    }
  };
  const submitHandler = () => {
    const emailError = emailValidation(email);
    const passError = passwordValidation(password);
    const newError = {
      email: emailError,
      password: passError,
    };
    setErrors(newError);
    const isValid = !Object.values(newError).some((err) => err !== "");
    if (isValid) {
      setIsSubmit(true);
      //dispatch
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate("/");
        })
    }
  };
  return (
    <div className="max-w-md p-6 mx-auto shadow-lg rounded-lg bg-gray-50 poppins-font my-14">
      <div className="mb-4">
        <h2 className="text-xl text-center lg:text-3xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
          Welcome Back Buddy 👋
        </h2>
        <p className="text-center mt-2 text-sm md:text-base text-gray-500">
          We're happy to see you again.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col w-full space-y-3">
        <div className="w-full">
          {/* Email */}
          <div className="bg-gray-100 w-full rounded-md">
            <input
              type="email"
              name="email"
              className={`p-3 text-sm w-full bg-transparent border-2 transition-colors outline-none rounded-lg placeholder-gray-500 ${
                errors.email
                  ? "border-red-300"
                  : email && !errors.email
                  ? "border-green-500"
                  : "border-transparent focus-within:border-blue-300"
              }`}
              placeholder="Enter Email "
              onChange={handleonChange}
              value={email}
            />
          </div>
          <div className="h-1 mb-[1px] mt-[1px]">
            {error && error.tag === "email" && (
              <div className="flex items-center">
                <span className="flex items-center text-red-500 text-[10px] md:text-sm gap-2">
                  <AlertCircle className="size-3" />
                  <span className="text-xs">{error?.message}</span>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          {/* Password */}
          <div className="bg-gray-100 w-full rounded-lg relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              className={`p-3 bg-transparent outline-none transition-colors border-2 rounded-lg placeholder-gray-500 w-full ${
                errors.password
                  ? "border-red-300"
                  : email && !errors.email
                  ? "border-green-500"
                  : "border-transparent focus-within:border-blue-300"
              } `}
              name="password"
              placeholder="Enter Password"
              onChange={handleonChange}
              value={password}
            />
            <button
              className="absolute right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="h-1 mb-[3px] mt-[1px]">
            {error && error.tag === "password" && (
              <div className="flex items-center">
                <span className="flex items-center text-red-500 text-[10px] md:text-sm gap-2">
                  <AlertCircle className="size-3" />
                  <span className="text-xs">{error?.message}</span>
                </span>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={submitHandler}
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-slate-900 duration-150 lg:cursor-pointer"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader className="size-6 text-white animate-spin" />
            </div>
          ) : (
            "SignIn"
          )}
        </button>
        <div className="text-center text-sm my-3">
          <h3 className="text-gray-500 ">
            Don't have an Account?{" "}
            <Link
              className="text-black hover:underline font-semibold"
              to={"/signup"}
            >
              Sign Up
            </Link>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
