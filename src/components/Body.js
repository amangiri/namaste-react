import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - super powerful variabe
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  // callback funcn will be called after componenet is rendered
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6474698&lng=77.1140881&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setSearchedRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  // Normal JS Vaiable
  //   let listOfRestaurants = resList;
  // conditional rendering
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // filter the restaurant cart and update the UI
              // search logic here
              const searchedList = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (searchedList.length > 0) setSearchedRestaurants(searchedList);
              console.log(searchedList);
            }}
          >
            Search
          </button>
        </div>
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
        {searchedRestaurants.map((restaurant) => (
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
