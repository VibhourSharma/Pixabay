import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import Navbar from "../components/Dashboard/Navbar";
import sad from "../assets/sad.svg";

const DownloadsPage = () => {
  const { user, getDownloads } = useFirebase();
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const downloadedImages = await getDownloads();
        setDownloads(downloadedImages);
      } catch (error) {
        console.error("Error fetching downloaded images:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDownloads();
    }
  }, [user, firebase]);

  const removeFromLists = (id) => {
    const updatedDownloads = downloads.filter((download) => download.id !== id);
    firebase.removeFromDownloads(id);
    setDownloads(updatedDownloads);
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[33px] font-bold my-4 font-mono p-2 text-2xl">
          Your Downloads
        </span>
        {loading ? (
          <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-white">
            {[...Array(8)].map((placeholderId) => (
              <div
                key={placeholderId}
                className="w-[350px] h-[250px] flex flex-col justify-center bg-gray-300 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center p-2 gap-3 flex-wrap justify-center bg-[#ffffff]">
            {downloads.length < 1 ? (
              <div className="text-center bg-white w-full flex items-center text-black flex-col">
                <img src={sad} alt="Sad" />
                <p className="text-xl font-semibold mt-4 mb-12">
                  No results found!
                </p>
              </div>
            ) : (
              <>
                {downloads.map((download) => (
                  <div
                    className="w-[350px] flex flex-col justify-center bg-cover border border-gray-400 hover:scale-[1.01] ease-linear transition-all rounded-xl"
                    key={download.id}
                  >
                    {download.type === "animation" ||
                    download.type === "film" ? (
                      <video
                        src={download.url}
                        alt={`Video number: ${download.id}`}
                        className="h-[242.61px] object-cover"
                        controls
                      />
                    ) : (
                      <img
                        src={download.url}
                        alt={`Image number: ${download.id}`}
                        className="h-[242.61px] object-cover cursor-pointer rounded-xl"
                      />
                    )}
                    <div className="flex items-center justify-between p-2 text-sm">
                      <button
                        className="p-1 border border-red-600 text-red-600 rounded-lg"
                        onClick={() => removeFromLists(download.id)}
                      >
                        Remove
                      </button>
                      <span className="p-1 rounded-lg bg-gray-100">
                        Type: {download.type}
                      </span>
                    </div>
                    <div className="px-2 py-1 text-sm text-gray-500">
                      Last Downloaded: {new Date().toLocaleString()}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadsPage;
