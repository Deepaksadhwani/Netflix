import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { IoSearchCircleSharp } from "react-icons/io5";
import { changeLanguage } from "../store/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";

const Header = () => {
  const showGptPage = useSelector((store) => store.gpt.showGptSearch);
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const toggleGptView = () => {
    dispatch(toggleGptSearchView());
  };

  const langChangeHandler = (e) => {
    
    dispatch(changeLanguage(e.target.value));
    
  };

  return (
    <div className="absolute z-10 flex w-full justify-between bg-gradient-to-b from-black px-10 py-2 pt-4 ">
      <img src={LOGO} alt="logo" className="w-44" />
      {user && (
        <div  className=" flex items-center space-x-2">
          {showGptPage && (
            <select
              className="m-2 bg-gray-900 p-2 text-white"
              onChange={langChangeHandler}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button onClick={toggleGptView} className="flex items-center rounded-lg px-2  py-1  text-2xl font-semibold text-gray-200 transition-all duration-300   hover:bg-black hover:text-white ">
            <IoSearchCircleSharp className="text-3xl" />
            Search
          </button>
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
