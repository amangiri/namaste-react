import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - super powerful variabe
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  // callback funcn will be called after componenet is rendered
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();

    return () => {
      // console.log("called after component unmounting.");
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6474698&lng=77.1140881&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
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

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="mx-2 px-2">
          <input
            type="text"
            className="border border-solid border-black w-80 rounded-lg p-1"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="w-28 px-4 py-2 bg-red-300 m-4 rounded-lg hover:bg-green-600"
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
        {/* <div className="search m-2 p-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
        </div> */}
      </div>
      <div className="flex flex-wrap px-6 mx-6">
        {/* <ResturantCard  resData={resList[0]}    /> */}
        {/* <ResturantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        {searchedRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
