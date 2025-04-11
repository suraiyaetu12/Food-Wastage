import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/sign-in.gif";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // State to control success modal visibility

  const onSubmit = (data) => {
    console.log(data);
    // Simulate successful login
    setShowSuccess(true); // Show success modal on form submission
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#a2c7ad] px-4">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src={loginImg} alt="Login Visual" className="w-full max-w-lg mx-auto" />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-8 max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label text-sm font-semibold text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full pl-10"
                placeholder="your@email.com"
              />
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label text-sm font-semibold text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="input input-bordered w-full pl-10 pr-10"
                placeholder="••••••••"
              />
              <FaLock className="absolute left-3 top-3.5 text-gray-500" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="text-right">
            <Link to="/forgetpassword" className="text-sm text-green-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-accent w-full">Sign In</button>
        </form>

        <div className="divider my-4 text-black">OR</div>

        <button className="btn btn-outline bg-red-500 w-full flex gap-2 justify-center items-center">
          <FaGoogle /> Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-black">
          New here?{" "}
          <Link to="/signup" className="text-red-800 font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-green-600">Login Successful 🎉</h3>
            <p className="py-4">Welcome back! You have successfully logged in.</p>
            <div className="modal-action justify-center">
              <button onClick={() => setShowSuccess(false)} className="btn btn-success">
                Close
              </button>
              {/* <Link to="/dashboard" className="btn btn-accent">
                Go to Dashboard
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
