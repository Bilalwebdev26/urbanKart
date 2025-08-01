import React, { useState } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/Client/auth.store";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!/(?=.*[a-z])/.test(password))
      return "Password must contain both lowercase letters";
    if (!/(?=.*[A-Z])/.test(password))
      return "Password must contain both uppercase letters";
    if (!/(?=.*\d)/.test(password))
      return "Password must contain at least one number";
    return "";
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  const validateTerms = (agreeToTerms) => {
    if (!agreeToTerms) return "You must agree to the Terms and Conditions";
    return "";
  };

  // Real-time validation
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Clear error when user starts typing/checking
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Real-time validation
    let error = "";
    switch (name) {
      case "name":
        error = validateName(newValue);
        break;
      case "email":
        error = validateEmail(newValue);
        break;
      case "password":
        error = validatePassword(newValue);
        // Also revalidate confirm password if it exists
        if (formData.confirmPassword) {
          const confirmError = validateConfirmPassword(
            formData.confirmPassword,
            newValue
          );
          setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
        }
        break;
      case "confirmPassword":
        error = validateConfirmPassword(newValue, formData.password);
        break;
      case "agreeToTerms":
        error = validateTerms(newValue);
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword,
      formData.password
    );
    const termsError = validateTerms(formData.agreeToTerms);

    const newErrors = {
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      agreeToTerms: termsError,
    };

    setErrors(newErrors);

    // Check if form is valid
    const isValid = !Object.values(newErrors).some((error) => error !== "");

    if (isValid) {
      // Here you would typically send data to your backend
      dispatch(register(formData))
        .unwrap()
        .then(() => {
          setIsSubmitted(true); // ✅ Only runs on success
          navigate("/");
        })
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg poppins-font">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-gray-600">Join us today and get started!</p>
      </div>

      <div className="space-y-5">
        {/* Name Field */}
        <div className="space-y-1">
          <div
            className={`bg-gray-100 rounded-lg border-2 transition-colors ${
              errors.name
                ? "border-red-300"
                : formData.name
                ? "border-green-300"
                : "border-transparent focus-within:border-blue-300"
            }`}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent outline-none placeholder-gray-500"
            />
          </div>
          {errors.name && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <div
            className={`bg-gray-100 rounded-lg border-2 transition-colors ${
              errors.email
                ? "border-red-300"
                : formData.email && !errors.email
                ? "border-green-300"
                : "border-transparent focus-within:border-blue-300"
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent outline-none placeholder-gray-500"
            />
          </div>
          <div className="h-1">
            {error && error.tag === "email" && (
              <div className="flex items-center gap-2 text-red-600 text-xs">
                <AlertCircle className="w-4 h-4" />
                <span>{error?.message}</span>
              </div>
            )}
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <div
            className={`bg-gray-100 rounded-lg border-2 transition-colors ${
              errors.password
                ? "border-red-300"
                : formData.password && !errors.password
                ? "border-green-300"
                : "border-transparent focus-within:border-blue-300"
            }`}
          >
            <div className="flex items-center overflow-hidden max-w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="flex-1 p-3 bg-transparent outline-none placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-3 text-gray-500 hover:text-gray-700 absolute right-0"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {errors.password && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.password}</span>
            </div>
          )}
          {formData.password && !errors.password && (
            <div className="text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      formData.password.length >= 6
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /(?=.*\d)/.test(formData.password)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
                <span className="text-xs text-gray-500">Password strength</span>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <div
            className={`bg-gray-100 rounded-lg border-2 transition-colors ${
              errors.confirmPassword
                ? "border-red-300"
                : formData.confirmPassword && !errors.confirmPassword
                ? "border-green-300"
                : "border-transparent focus-within:border-blue-300"
            }`}
          >
            <div className="flex items-center relative overflow-hidden max-w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="flex-1 p-3 bg-transparent outline-none placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="p-3 text-gray-500 hover:text-gray-700 absolute right-0"
              >
                {showConfirmPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {errors.confirmPassword && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.confirmPassword}</span>
            </div>
          )}
          {formData.confirmPassword &&
            !errors.confirmPassword &&
            formData.password === formData.confirmPassword && (
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Passwords match!</span>
              </div>
            )}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <div className="flex items-center ">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={`w-4 h-4 rounded border-2 transition-colors bg-black ${
                  errors.agreeToTerms
                    ? "border-red-300 text-red-600 focus:ring-red-500"
                    : "border-gray-300 text-black focus:ring-black"
                }`}
              />
            </div>

            <div className="text-[10px] md:text-sm">
              <label className="text-gray-700">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-black font-semibold hover:underline"
                >
                  Terms and Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-black font-semibold hover:underline"
                >
                  Privacy Policy
                </button>
              </label>
            </div>
          </div>
          {errors.agreeToTerms && (
            <div className="flex items-center gap-2 text-red-600 text-sm ml-7">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.agreeToTerms}</span>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!formData.agreeToTerms}
          className={`w-full p-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            !formData.agreeToTerms
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 focus:ring-black"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader className="size-6 animate-spin" />
            </div>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/signin"}
            className="text-black font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
