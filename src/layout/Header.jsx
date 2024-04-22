import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const singOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
       
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      }else{
        dispatch(removeUser());
        navigate("/");
      
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute pt-4 z-10 flex w-full justify-between bg-gradient-to-b from-black px-10 py-2 ">
      <img
        src={LOGO}
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className=" flex items-center space-x-2">
          <img
            src={user?.photoURL}
            alt="userinfo"
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
