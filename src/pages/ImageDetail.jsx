import CrossIcon from "../assets/CrossIcon.png";

const ImageDetail = () => {
  const url =
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const tags = ["Condition", "work", "coding", "working", "mytochondria"];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-5 flex items-center justify-center">
      <div className="w-[1217.32px] h-[650px] bg-[#ffffff] rounded-[8.89px]">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full h-[76.42px] bg-[#F5F5F5] p-8 rounded-[8.89px]">
          <div className="text-[21.33px] font-[500]">Preview ID: 48777</div>
          <button>
            <img src={CrossIcon} alt="back" />
          </button>
        </div>
        {/* Internal section */}
        <div className="w-full p-4 flex justify-evenly">
          <img
            src={url}
            alt="Image"
            className="w-[780px] h-[480px] rounded-[7.11px]"
          />
          <div>
            <div>
              <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px]">
                Download
              </span>
              <div className="w-[275.45px] h-[163.73px] text-[14px]">
                {/* checkboxes */}

                <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4">
                  <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                    Small
                  </span>
                  <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                    640x960
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4">
                  <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                    Medium
                  </span>
                  <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                    1920x2660
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4">
                  <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                    Big
                  </span>
                  <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                    2400x3600
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4">
                  <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                    Original
                  </span>
                  <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                    3850x5640
                    <input type="checkbox" />
                  </label>
                </div>
              </div>
              <button className="w-[274.67px] h-[37.33px] rounded-[4.44px] bg-[#4BC34B] text-[#ffffff] mt-5">
                Download for Free!
              </button>
            </div>
            <div className="w-[275.45px] h-[163.73px] text-[14px] mt-2">
              <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px]">
                Information
              </span>
              <div className="flex items-center justify-between mt-2">
                <span className="flex flex-col">
                  User
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    Josch13
                  </span>
                </span>
                <span className="flex flex-col">
                  UserID
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    912291
                  </span>
                </span>
                <span className="flex flex-col">
                  Type
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    Photo
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="flex flex-col">
                  Views
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    200,000
                  </span>
                </span>
                <span className="flex flex-col">
                  Downloads
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    6,439
                  </span>
                </span>
                <span className="flex flex-col">
                  Likes
                  <span className="font-[600] text-[15.99px] leading-[23.1px]">
                    564
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Tags */}
        <div className="w-full h-8 flex items-center justify-center">
          <div className="w-[90%] h-full flex items-center">
            <span className="font-[700] text-[17.77px]">Tags:</span>
            <div className="flex h-full w-full items-center gap-[7.1px]">
              {tags.map((tag) => {
                return (
                  <span className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] bg-[#F5F5F5]">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
