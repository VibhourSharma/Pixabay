import { useEffect, useState } from "react";
import CrossIcon from "../assets/CrossIcon.png";
import { useNavigate, useParams } from "react-router-dom";

const ImageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  const [idData, setIdData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://pixabay.com/api/";
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

    setLoading(true);

    fetch(`${apiUrl}?key=${apiKey}&id=${id}`)
      .then((res) => res.json())
      .then((imageIdData) => {
        setIdData(imageIdData.hits);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-5 flex items-center justify-center">
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
            className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-5 flex items-center justify-center"
          >
            <div className="w-[1217.32px] h-[650px] bg-[#ffffff] rounded-[8.89px]">
              <div className="flex items-center justify-between w-full h-[76.42px] bg-[#F5F5F5] p-8 rounded-[8.89px]">
                <div className="text-[21.33px] font-[500]">
                  Preview ID: {dataId.id}
                </div>
                <button onClick={goBack}>
                  <img src={CrossIcon} alt="back" />
                </button>
              </div>
              <div className="w-full p-4 flex justify-evenly">
                <img
                  src={dataId.webformatURL}
                  alt="Image"
                  className="w-[780px] h-[480px] rounded-[7.11px]"
                />
                <div>
                  <div>
                    <span className="w-[103px] h-[52px] font-[500] text-[21.33px] leading-[51.45px]">
                      Download
                    </span>
                    <div className="w-[275.45px] h-[163.73px] text-[14px]">
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
                    <div className="flex items-center justify-between mt-5">
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
              <div className="w-full h-8 flex items-center justify-center">
                <div className="w-[90%] h-full flex items-center">
                  <span className="font-[700] text-[17.77px]">Tags:</span>
                  <div className="flex h-full w-full items-center gap-[7.1px]">
                    {dataId.tags.split(",").map((idTag) => {
                      return (
                        <span className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] bg-[#F5F5F5]">
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
