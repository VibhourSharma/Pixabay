const CardSection = () => {
  const data = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["container", "landscape", "mountains"],
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["city", "urban", "architecture"],
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["beach", "ocean", "sunrise"],
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["wildlife", "animals", "forest"],
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["travel", "adventure", "exploration"],
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["technology", "innovation", "future"],
    },
  ];
  return (
    <div className="flex items-center p-12 gap-8 justify-around flex-wrap bg-[#ffffff]">
      {data.map((item) => {
        return (
          <>
            <div
              className="w-[364.59px] h-[278.15px] flex flex-col justify-center"
              key={item.id}
            >
              <img src={item.url} alt="" className="h-[242.61px]" />
              <div className="flex h-full w-full items-center gap-[7.1px]">
                {item.tags.map((tag) => {
                  return (
                    <span className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] mt-2 bg-[#F5F5F5]">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CardSection;
