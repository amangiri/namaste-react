import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - super powerful variabe
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  // Normal JS Vaiable
  //   let listOfRestaurants = resList;
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            setlistOfRestaurants(filteredList);
            console.log("list", filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <ResturantCard  resData={resList[0]}    /> */}
        {/* <ResturantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        {listOfRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
