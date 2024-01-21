import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center text-[#FFFFFF] md:text-[13px]">
        <div className="flex items-center justify-between p-8 rounded-[8.91px] backdrop-blur-xl bg-[#D9D9D91D] border-[#B6B6B66E] h-[60px] w-[1217.48px] border-[4px] mt-8 sm:w-[400px] md:w-[100%] lg:w-[100%] xl:w-[700px] xxl:w-[900px]">
          <Link to="/">
            <div className="font-[600] ">Homepage</div>
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
