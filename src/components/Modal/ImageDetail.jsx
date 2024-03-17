import { useEffect, useState } from "react";
import CrossIcon from "../../assets/CrossIcon.png";
import SkeletonLoader from "../Modal/SkeletonLoader";
import { useFirebase } from "../../context/Firebase";

const ImageDetail = ({ id, handleCloseModal, type }) => {
  const [idData, setIdData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl =
          type === "animation" || type === "film"
            ? "https://pixabay.com/api/videos/"
            : "https://pixabay.com/api/";

        const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
        setLoading(true);

        const response = await fetch(`${apiUrl}?key=${apiKey}&id=${id}`);
        const resultIdData = await response.json();
        setIdData(resultIdData.hits);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleAddFavorite = () => {
    const imageId = idData[0]?.id;
    const imageURL = idData[0]?.webformatURL;
    const videoURL = idData[0]?.videos?.tiny?.url;

    if (isFavorite) {
      firebase.removeFromFavorites(imageId);
    } else {
      const imageUrlToAdd = imageURL || videoURL;
      firebase.addToFavorites(imageId, imageUrlToAdd, idData[0]?.type);
    }
    setIsFavorite(!isFavorite);
  };

  const handleDownload = () => {
    const imageId = idData[0]?.id;
    const imageURL = idData[0]?.webformatURL;
    const videoURL = idData[0]?.videos?.tiny?.url;

    const imageUrlToAdd = imageURL || videoURL;
    firebase.addToDownloads(imageId, imageUrlToAdd, idData[0]?.type);

    setIsDownload(!isDownload);
  };

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        idData.map((dataId) => (
          <div
            key={dataId.id}
            className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center z-20"
          >
            <div className="w-[1100px] h-auto pb-6 bg-white z-10 rounded-[8.89px] sm:w-[95%] sm:h-[90%]">
              <div className="flex items-center justify-between w-full h-[50px] bg-[#F5F5F5] p-7 rounded-[8.89px]">
                <div className="text-[21.33px] font-[500]">
                  Preview ID: {dataId.id}
                </div>
                <button onClick={handleCloseModal}>
                  <img src={CrossIcon} alt="back" />
                </button>
              </div>
              <div className="w-full flex justify-evenly flex-wrap mt-4 sm:mt-2">
                {dataId.type === "film" || dataId.type === "animation" ? (
                  <video
                    src={dataId?.videos?.tiny?.url}
                    className="w-[780px] h-[480px]"
                    alt="video"
                    controls
                  />
                ) : (
                  <img
                    src={dataId.webformatURL}
                    alt="Image"
                    className="w-[700px] h-[480px] sm:w-36 sm:h-36"
                  />
                )}
                <div className="max-w-[30%] flex flex-col justify-between sm:max-w-[95%]">
                  {
                    <div className="flex justify-center gap-4 flex-col">
                      <span className="text-lg font-semibold font-serif">
                        Actions:
                      </span>
                      {firebase.isLoggedIn ? (
                        <>
                          <button
                            className={`hover:scale-[0.98] w-[274.67px] rounded-lg p-2 bg-white text-${
                              isDownload ? "red" : "blue"
                            }-600 text-sm ease-in-out transition-all border-${
                              isDownload ? "red" : "blue"
                            }-600 border`}
                            onClick={() =>
                              handleDownload(
                                idData[0]?.id,
                                idData[0]?.webformatURL,
                                idData[0]?.type
                              )
                            }
                          >
                            {isDownload
                              ? "🤩 Downloaded !!!"
                              : "🚀 Download for Free"}
                          </button>
                          <button
                            className={`hover:scale-[0.98] w-[274.67px] rounded-lg p-2 bg-white text-${
                              isFavorite ? "red" : "green"
                            }-600 text-sm ease-in-out transition-all border-${
                              isFavorite ? "red" : "green"
                            }-600 border`}
                            onClick={() =>
                              handleAddFavorite(
                                idData[0]?.id,
                                idData[0]?.webformatURL,
                                idData[0]?.type
                              )
                            }
                          >
                            {isFavorite
                              ? "🚩 Remove from Favorites"
                              : "🤗 Add to Favorites"}
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="w-[274.67px] hover:scale-[.98] ease-in-out rounded-lg p-2 bg-white transition-all text-blue-600 text-sm border-blue-600 border">
                            Login to Download
                          </button>
                          <p className="text-sm max-w-56 text-red-500">
                            *Login or SignUp to Unlock other features
                          </p>
                        </>
                      )}
                    </div>
                  }
                  <div className="w-full h-52 text-sm mt-2 sm:mt-2 sm:text-xs">
                    <span className="text-lg font-semibold font-serif">
                      Information:
                    </span>
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <span className="flex flex-col">
                        User
                        <span className="font-[600] text-sm">
                          {dataId.user}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        UserID
                        <span className="font-[600] text-sm">{dataId.id}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <span className="flex flex-col">
                        Type
                        <span className="font-[600] text-sm">
                          {dataId.type}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        Views
                        <span className="font-[600] text-sm">
                          {dataId.views}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-5 sm:mt-2">
                      <span className="flex flex-col">
                        Downloads
                        <span className="font-[600] text-sm">
                          {dataId.downloads}
                        </span>
                      </span>
                      <span className="flex flex-col">
                        Likes
                        <span className="font-[600] text-sm">
                          {dataId.likes}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2 flex-wrap">
                    <span className="text-base font-bold font-serif flex-wrap">
                      Tags:
                    </span>
                    {dataId.tags.split(",").map((idTag) => (
                      <span
                        className="rounded-md p-1 bg-[#F5F5F5] text-[13px]"
                        key={idTag}
                      >
                        {idTag.trim()}
                      </span>
                    ))}
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
