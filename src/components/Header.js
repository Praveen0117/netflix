import React, { useEffect } from "react";
import { NetflixLogo, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSearchSlice";
import { chnageLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handelOnClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  const handelGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handelLanguageChange = (e) => {
    dispatch(chnageLanguage(e.target.value));
  };

  return (
    <div className="w-[100%]">
      <div className="flex absolute px-8 justify-between py-2 w-[100%] bg-gradient-to-b from-black z-10 ">
        <img src={NetflixLogo} alt="logo" className="w-36" />
        {user && (
          <div className="flex">
            {showGptSearch && 
                <select className="p-2 bg-gray-800 text-white m-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    onChange={handelLanguageChange}
                    key={lang.identifyer}
                    value={lang.identifyer}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            }
            
            <button
              className="px-2 py-2  mx-4 my-2 bg-purple-800 text-white font-bold rounded-md"
              onClick={handelGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img alt="userIcon" className="w-14 h-12" src={user?.photoURL} />
            <button onClick={handelOnClick} className="font-bold text-white ">
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
