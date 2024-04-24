import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInUser, setIsSignInUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setIsSignInUser(!isSignInUser);
  };

  const validationHandler = () => {
    const message = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    //Sign In Sign Up logic
    if (!isSignInUser) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              console.log(user);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <img
        src={BG_IMG}
        alt=""
        className="absolute"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" px-30 absolute left-0 right-0 mx-auto my-36 flex w-3/12 flex-col items-center space-y-6 bg-black bg-opacity-80 p-12 pb-20"
      >
        <h1 className=" w-full  py-5 text-3xl font-semibold text-white">
          {isSignInUser ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInUser && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-2  w-full rounded-md bg-gray-700 p-3 text-white  placeholder-gray-200"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="m-2  w-full rounded-md bg-gray-700 p-3  text-white  placeholder-gray-200"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-2  w-full rounded-md bg-gray-700 p-3 placeholder-gray-200 "
          style={{ color: "white" }}
        />
        <button
          onClick={validationHandler}
          className="text-md m-4 w-full cursor-pointer rounded-md bg-[#e50914] p-4 font-semibold  text-white"
        >
          {isSignInUser ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500">{errorMessage}</p>
        <p
          onClick={toggleSignIn}
          className="font cursor-pointer py-2 font-medium text-white"
        >
          {isSignInUser
            ? "New to NetflixGPT ? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
