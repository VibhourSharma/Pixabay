const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center text-[#FFFFFF]">
        <div className="flex items-center justify-between p-8 rounded-[8.91px] backdrop-blur-xl bg-[#D9D9D91D] border-[#B6B6B66E]  h-[67.69px] w-[1217.48px] border-[4px] mt-8">
          <div className="font-[600]">Homepage</div>
          <div className="w-56 flex items-center justify-between">
            <span className="font-[600] leading-[19.95px]">LogIn</span>
            <button className="w-[162.98px] h-[34.73px] rounded-[8.91px] border-[2.67px] leading-[19.95px] font[600]">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
