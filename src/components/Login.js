import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BACKGROUND_IMG, PHOTO_URL } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current?.value,
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img src={BACKGROUND_IMG} alt="background-img" />
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

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
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
