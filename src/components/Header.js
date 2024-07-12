import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptPageView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptPage = useSelector((store) => store.gpt.showGptPage);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptButtonClick = () => {
    dispatch(toggleGptPageView());
  };

  return (
    <div className="px-6 pt-2 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NETFLIX_LOGO} alt="Netflix logo" className="w-44" />
      {user && (
        <div className="flex m-2 p-2 items-center">
          <select className="m-2 py-1 px-2 bg-gray-300 text-black rounded-sm">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="bg-purple-700 text-white m-2 mr-4 py-1 px-2 font-bold rounded-md flex"
            onClick={handleGptButtonClick}
          >
            {showGptPage ? (
              "Back to Browse"
            ) : (
              <>
                <img
                  className="w-4 flex py-1 mr-2"
                  alt="GPT logo"
                  src="https://static.vecteezy.com/system/resources/previews/022/841/114/original/chatgpt-logo-transparent-background-free-png.png"
                />
                GPT Search
              </>
            )}
          </button>
          <img
            className="w-8 h-8 m-2 rounded-full"
            alt="user-icon"
            src={user.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white font-bold m-2 py-1 px-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
