import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobile = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const fetchLoginApiResp = async (loginApiRequestBody) => {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    // try {
    //   const response = await fetch("/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginApiRequestBody),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Login failed");
    //   }

    //   const data = await response.json();
    //   console.log(data);
    //   dispatch(
    //     addUser({
    //       token: data.data.token,
    //       email: data.data.userData.email,
    //       displayName: data.data.userData.name,
    //     }),
    //   );
    //   navigate("/browse");
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const fetchSignUpApiResp = async (loginApiRequestBody) => {
    try {
      const response = await fetch("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginApiRequestBody),
      });
      if (!response.ok) {
        throw new Error("SignUp failed");
      }
      const data = await response.json();
      console.log(data);
      dispatch(
        addUser({
          email: data.data.userData.email,
          displayName: data.data.userData.name,
        }),
      );
      navigate("/browse");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : mobile.current.value,
      isSignInForm ? null : name.current?.value,
    );

    setErrorMessage(message);

    if (message) return;

    const loginApiRequestBody = {};

    console.log(isSignInForm);

    if (isSignInForm) {
      loginApiRequestBody["email"] = email.current.value;
      loginApiRequestBody["password"] = password.current.value;
      fetchLoginApiResp(loginApiRequestBody);
      console.log(loginApiRequestBody);
    } else {
      loginApiRequestBody["email"] = email.current.value;
      loginApiRequestBody["password"] = password.current.value;
      loginApiRequestBody["mobile"] = mobile.current.value;
      loginApiRequestBody["name"] = name.current.value;
      fetchSignUpApiResp(loginApiRequestBody);
      console.log(loginApiRequestBody);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black bg-opacity-80 mx-auto my-28 right-0 left-0"
      >
        <h1 className="text-white text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mt-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
          />
        )}
        {!isSignInForm && (
          <input
            ref={mobile}
            type="text"
            placeholder="Mobile"
            className="p-4 mt-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 mt-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-6 w-full border-gray-600 border bg-black bg-opacity-60 text-white rounded-md font-semibold"
        />
        <p className="text-red-500 mt-4 font-semibold">{errorMessage}</p>
        <button
          className="px-4 py-2 my-4 w-full bg-red-600 rounded-md text-white font-semibold"
          onClick={handleButtonClick}
        >
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
