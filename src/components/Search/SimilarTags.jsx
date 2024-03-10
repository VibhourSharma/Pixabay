import { Link, useSearchParams } from "react-router-dom";

const SimilarTags = ({ tags }) => {
  const [searchParams] = useSearchParams();
  const searchType = searchParams.get("type");

  return (
    <>
      <div className="flex items-center px-10 w-full bg-white overflow-hidden gap-x-2 overflow-x-scroll no-scrollbar">
        {tags.map((name) => {
          return (
            <ul key={name}>
              <Link
                to={
                  searchType === "videos"
                    ? `/search?type=videos&search=${name}`
                    : `/search?search=${name}`
                }
              >
                <li className="p-4 h-[30px] flex justify-center items-center border-[#D1D1D1] border-[2px] rounded-md cursor-pointer hover:border-black transition-all text-sm">
                  {name}
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default SimilarTags;
