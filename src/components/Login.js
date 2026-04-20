import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-28 right-0 left-0">
        <h1 className="text-white text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mt-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-0 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
        />
        <button className="px-4 py-2 my-4 w-full bg-red-600 rounded-md text-white font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            className=" hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
