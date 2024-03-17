import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import pixabayLogo from "../../assets/logo.svg";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import { useFirebase } from "../../context/Firebase";

const Navbar = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignIn = () => {
    setSignInModalOpen(true);
  };

  const closeSignIn = () => {
    setSignInModalOpen(false);
  };

  const firebase = useFirebase();

  useEffect(() => {
    setError(firebase.error);
    if (firebase.error) {
      const timer = setTimeout(() => {
        firebase.clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [firebase.error]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      closeLoginModal();
      closeSignIn();
    }
  }, [firebase.isLoggedIn]);

  const logOut = () => {
    firebase.logOut();
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-center w-full text-[#FFFFFF] z-10">
        <div className="flex items-center justify-between p-8 h-[60px] w-full sm:p-2">
          <Link to="/">
            <img src={pixabayLogo} alt="Pixabay" className="w-32 sm:w-24" />
          </Link>

          <div className="w-[30%] sm:w-[80%] flex items-center justify-end gap-4">
            {firebase.isLoggedIn ? (
              <div className="flex justify-around w-52 sm:text-sm sm:justify-end sm:w-0 sm:gap-4">
                <Link to="/favourites">
                  <div>Favourites</div>
                </Link>
                <Link to="/downloads">
                  <div>Downloads </div>
                </Link>
              </div>
            ) : (
              ""
            )}
            {firebase.isLoggedIn ? (
              <button
                className="py-1.5 px-4 rounded-lg border-2 font[600] sm:px-1 sm:py-1 sm:text-xs"
                onClick={logOut}
              >
                Log Out
              </button>
            ) : (
              <>
                <button
                  className="font-[500] p-1 rounded-lg hover:underline transition-all sm:text-sm"
                  onClick={openLoginModal}
                >
                  LogIn
                </button>
                <button
                  className="py-1.5 px-4 rounded-lg border-2 font-[600] sm:px-1 sm:py-1 sm:text-xs"
                  onClick={openSignIn}
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {loginModalOpen && (
        <LoginPage
          onClose={closeLoginModal}
          openSignIn={openSignIn}
          error={error}
        />
      )}
      {signInModalOpen && (
        <SignupPage
          onClose={closeSignIn}
          openLoginModal={openLoginModal}
          error={error}
        />
      )}
    </>
  );
};

export default Navbar;
