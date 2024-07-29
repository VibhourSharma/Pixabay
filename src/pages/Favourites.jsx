import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import Navbar from "../components/Dashboard/Navbar";
import sad from "../assets/sad.svg";

const FavoritesPage = () => {
  const { user, getFavoriteImages } = useFirebase();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchFavoriteImages = async () => {
      try {
        const favoriteImages = await getFavoriteImages();
        setFavorites(favoriteImages);
      } catch (error) {
        console.error("Error fetching favorite images:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchFavoriteImages();
    }
  }, [user, getFavoriteImages]);

  const removeFromList = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    firebase.removeFromFavorites(id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[33px] font-bold my-4 font-mono p-2 text-2xl">
          Your Favourites
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
            {favorites.length < 1 ? (
              <div className="text-center bg-white w-full flex items-center text-black flex-col">
                <img src={sad} />
                <p className="text-xl font-semibold mt-4 mb-12">
                  No results found!
                </p>
              </div>
            ) : (
              <>
                {favorites.map((favorite) => (
                  <div
                    className="w-[350px] flex flex-col justify-center bg-cover border border-gray-400 hover:scale-[1.01] ease-linear transition-all rounded-xl"
                    key={favorite.id}
                  >
                    {favorite.type === "animation" ||
                    favorite.type === "film" ? (
                      <video
                        src={favorite.url}
                        alt={`Video number: ${favorite.id}`}
                        className="h-[242.61px] object-cover rounded-xl cursor-pointer"
                        controls
                      />
                    ) : (
                      <img
                        src={favorite.url}
                        alt={`Image number: ${favorite.id}`}
                        className="h-[242.61px] object-cover cursor-pointer rounded-xl"
                      />
                    )}
                    <div className="flex items-center justify-between p-2 text-sm">
                      <button
                        className="p-1 border border-red-600 text-red-600 rounded-lg"
                        onClick={() => removeFromList(favorite.id)}
                      >
                        Remove
                      </button>
                      <span className="p-1 rounded-lg bg-gray-100">
                        Type: {favorite.type}
                      </span>
                    </div>
                    <div className="px-2 py-1 text-sm text-gray-500">
                      Added On: {favorite.time}
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

export default FavoritesPage;
