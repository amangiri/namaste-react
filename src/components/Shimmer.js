import { useState } from "react";

const Shimmer = () => {
  const [shimmerCount] = useState([1, 2, 3, 4]);
  return (
    <div className="flex justify-between">
      {shimmerCount.map((count) => {
        return (
          <div className="p-4 m-4 w-72">
            <div className="m-4 p-4 w-[250px] bg-gray-300 rounded-lg">
              <div className="p-4 m-2 h-32 rounded-lg bg-gray-100"></div>
              <div className="space-y-4">
                <div className="mt-3 h-4 rounded-lg bg-gray-400"></div>
                <div className="h-4 mr-16 rounded-lg bg-gray-400"></div>
                <div className="h-4 mr-12 rounded-lg bg-gray-400"></div>
                <div className="h-4 mr-6 rounded-lg bg-gray-400"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
