import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignInUser, setIsSignInUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
            photoURL: "https://avatars.githubusercontent.com/u/108820079?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
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
          console.log(user);
          navigate("/browse");
          // ...
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
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
          Sign In
        </button>
        <p className="text-red-500">{errorMessage}</p>
        <p
          onClick={toggleSignIn}
          className="font cursor-pointer py-2 font-medium text-white"
        >
          {isSignInUser
            ? "New to Netflix ? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
