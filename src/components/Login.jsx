import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
        className="absolute"
      />
      <form className=" px-30 absolute left-0 right-0 mx-auto my-36 flex w-3/12 flex-col items-center space-y-6 bg-black bg-opacity-80 p-12 pb-20">
        <h1 className=" w-full  py-5 text-3xl font-semibold text-white">
          Sign In
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="m-2  w-full rounded-md bg-gray-700 p-3  placeholder-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2  w-full rounded-md bg-gray-700 p-3  placeholder-gray-200"
        />
        <button className="text-md m-4 w-full  rounded-md bg-[#e50914] p-4 font-semibold text-white">
          Sign In
        </button>
        <p className="font py-2 font-medium text-white">
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
