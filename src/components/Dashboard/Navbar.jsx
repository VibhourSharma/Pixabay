import { Link } from "react-router-dom";
import pixabayLogo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full text-[#FFFFFF] md:text-[13px] z-10">
        <div className="flex items-center justify-between p-8 h-[60px] w-full">
          <Link to="/">
            <img src={pixabayLogo} alt="Pixabay" className="w-32" />
          </Link>
          <div className="w-56 flex items-center justify-between md:justify-end md:gap-3 lg:justify-end lg:gap-2">
            <span className="font-[600] leading-[19.95px]">LogIn</span>
            <button className="w-[162.98px] h-[34.73px] rounded-[8.91px] border-[2.67px] leading-[19.95px] font[600] md:w-28 lg:w-32">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
