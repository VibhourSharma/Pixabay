import { useEffect, useState } from "react";
import CrossIcon from "../assets/CrossIcon.png";
import { useNavigate } from "react-router-dom";

const ImageDetail = ({ isModalOpen, id, defaultValue }) => {
  const navigate = useNavigate();

  const [selectedCheckbox, setSelectedCheckbox] = useState("");

  function goBack() {
    navigate(-1);
  }

  const [idData, setIdData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (defaultValue) {
      setIdData(defaultValue);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      return;
    }
    const apiUrl = "https://pixabay.com/api/";
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

    setLoading(true);

    fetch(`${apiUrl}?key=${apiKey}&id=${id}`)
      .then((res) => res.json())
      .then((imageIdData) => {
        setIdData(imageIdData.hits);
        setLoading(false);
      });
  }, [id, defaultValue]);

  if (!isModalOpen) return null;
  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center">
          <div className="w-[1217.32px] h-[650px] bg-[#ffffff] rounded-[8.89px]">
            <div className="w-full h-[76.42px] bg-[#F5F5F5] p-8 rounded-[8.89px] animate-pulse" />
            <div className="w-full p-4 flex justify-evenly">
              <div className="w-[780px] h-[480px] rounded-[7.11px] bg-[#F0F0F0] animate-pulse" />
              <div>
                <div>
                  <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px] bg-[#F0F0F0] animate-pulse" />
                  <div className="w-[275.45px] h-[163.73px] text-[14px]">
                    <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 bg-[#F0F0F0] animate-pulse" />
                    <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 bg-[#F0F0F0] animate-pulse" />
                    <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 bg-[#F0F0F0] animate-pulse" />
                    <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 bg-[#F0F0F0] animate-pulse" />
                  </div>
                  <button className="w-[274.67px] h-[37.33px] rounded-[4.44px] bg-[#F0F0F0] animate-pulse" />
                </div>
                <div className="w-[275.45px] h-[163.73px] text-[14px] mt-2">
                  <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px] bg-[#F0F0F0] animate-pulse" />
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex flex-col">
                      User
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                    <span className="flex flex-col">
                      UserID
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                    <span className="flex flex-col">
                      Type
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <span className="flex flex-col">
                      Views
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                    <span className="flex flex-col">
                      Downloads
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                    <span className="flex flex-col">
                      Likes
                      <span className="font-[600] text-[15.99px] leading-[23.1px] bg-[#F0F0F0] animate-pulse" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-8 flex items-center justify-center">
              <div className="w-[90%] h-full flex items-center">
                <span className="font-[700] text-[17.77px] bg-[#F0F0F0] animate-pulse" />
                <div className="flex h-full w-full items-center gap-[7.1px]">
                  <span className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] bg-[#F5F5F5] animate-pulse" />
                  <span className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] bg-[#F5F5F5] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        idData.map((dataId) => (
          <div
            key={dataId.id}
            className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center"
          >
            <div className="w-[1217.32px] h-[650px] bg-[#ffffff] rounded-[8.89px] sm:max-w-[90%]">
              <div className="flex items-center justify-between w-full h-[76.42px] bg-[#F5F5F5] p-8 rounded-[8.89px]">
                <div className="text-[21.33px] font-[500]">
                  Preview ID: {dataId.id}
                </div>
                <button onClick={goBack}>
                  <img src={CrossIcon} alt="back" />
                </button>
              </div>
              <div className="w-full p-4 flex justify-evenly sm:flex-col sm:items-center">
                <img
                  src={dataId.webformatURL}
                  alt="Image"
                  className="w-[780px] h-[480px] rounded-[7.11px] sm:h-[90%]
                  xxl:w-[60%]
                  sm:w-[55%] sm:p-1 lg:w-[50%] lg-h[50%] md:w-[40%] md:h-[40%] "
                />
                <div className="sm:w-[40%] sm:flex sm:flex-col sm:justify-center sm:items-center ">
                  <div>
                    <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px] sm:h-[12px] sm:text-lg">
                      Download
                    </span>
                    <div className="w-[275.45px] h-[163.73px] sm:h-[138px] text-[14px] sm:text-sm">
                      <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 sm:h-2">
                        <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px] sm:text-xs">
                          Small
                        </span>
                        <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                          640x960
                          <input
                            type="checkbox"
                            checked={selectedCheckbox === "Small"}
                            value="Small"
                            onChange={(e) =>
                              setSelectedCheckbox(e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 sm:h-2">
                        <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                          Medium
                        </span>
                        <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                          1920x2660
                          <input
                            type="checkbox"
                            checked={selectedCheckbox === "Medium"}
                            value="Medium"
                            onChange={(e) =>
                              setSelectedCheckbox(e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 sm:h-2">
                        <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                          Big
                        </span>
                        <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                          2400x3600
                          <input
                            type="checkbox"
                            checked={selectedCheckbox === "Big"}
                            value="Big"
                            onChange={(e) =>
                              setSelectedCheckbox(e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <div className="border-[0.89px] border-[#DEE8F4] w-[275.45px] h-[41.11px] flex items-center justify-between p-4 sm:h-2">
                        <span className="font-[400] leading-[21.33px] w-[119.04px] h-[22px]">
                          Original
                        </span>
                        <label className="flex items-center justify-between w-28 font-[700] text-[12.44px]">
                          3850x5640
                          <input
                            type="checkbox"
                            checked={selectedCheckbox === "Original"}
                            value="Original"
                            onChange={(e) =>
                              setSelectedCheckbox(e.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="w-[274.67px] h-[37.33px] rounded-[4.44px] bg-[#4BC34B] text-[#ffffff] mt-5 flex items-center justify-center sm:mt-0">
                      <a href={dataId.webformatURL} download target="_blank">
                        Download for Free!
                      </a>
                    </div>
                  </div>
                  <div className="w-[275.45px] h-[163.73px] text-[14px] mt-2 sm:mt-0 sm:text-xs">
                    <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px]">
                      Information
                    </span>
                    <div className="flex items-center justify-between mt-2 sm:mt-0">
                      <span className="flex flex-col">
                        User
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.user}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        UserID
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.id}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        Type
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.type}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-5 sm:mt-2">
                      <span className="flex flex-col">
                        Views
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.views}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        Downloads
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.downloads}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        Likes
                        <span className="font-[600] text-[15.99px] leading-[23.1px]">
                          {dataId.likes}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-8 flex items-center justify-center sm:text-sm sm:mt-[-16px]">
                <div className="w-[90%] h-full flex items-center sm:ml-14">
                  <span className="font-[700] text-[17.77px] mr-2">Tags:</span>
                  <div className="flex h-full w-full items-center gap-[7.1px]">
                    {dataId.tags.split(",").map((idTag) => {
                      return (
                        <span
                          className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] bg-[#F5F5F5]"
                          key={idTag}
                        >
                          {idTag.trim()}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ImageDetail;
