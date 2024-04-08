import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const singOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 flex w-screen justify-between bg-gradient-to-b from-black px-10 py-2 ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className=" flex items-center space-x-2">
          <img
            src={user?.photoURL}
            alt="usericon"
            className="h-12 w-12 rounded-lg "
          />

          <button
            onClick={singOutHandler}
            className="rounded-md border border-gray-500 bg-gray-700 p-2 font-semibold text-white transition-all duration-200 hover:bg-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
