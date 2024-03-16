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
      <div className="flex items-center justify-center w-full text-[#FFFFFF] md:text-[13px] z-10">
        <div className="flex items-center justify-between p-8 h-[60px] w-full">
          <Link to="/">
            <img src={pixabayLogo} alt="Pixabay" className="w-32" />
          </Link>

          <div className="w-[30%] flex items-center justify-end gap-4">
            {firebase.isLoggedIn ? (
              <div className="flex justify-around w-52">
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
                className="py-1.5 px-4 rounded-lg border-2 font[600] md:w-28 lg:w-32"
                onClick={logOut}
              >
                Log Out
              </button>
            ) : (
              <>
                <button
                  className="font-[500] p-1 rounded-lg hover:underline transition-all"
                  onClick={openLoginModal}
                >
                  LogIn
                </button>
                <button
                  className="py-1.5 px-4 rounded-lg border-2 font-[600]"
                  onClick={openSignIn}
                >
                  Create Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {loginModalOpen && <LoginPage onClose={closeLoginModal} error={error} />}
      {signInModalOpen && <SignupPage onClose={closeSignIn} error={error} />}
    </>
  );
};

export default Navbar;
