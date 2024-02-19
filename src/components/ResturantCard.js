import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  // const {resName,cuisine}=props;
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    // lastMileTravelString,
  } = resData;
  const fun = (name) => {
  };
  return (
    <div className="m-4 p-4 ml-8 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-1 text-lg hover:z-10">{name}</h3>
      <h4 className="font-thin text-sm">{cuisines.join(", ")}</h4>
      <div className="flex flex-wrap font-medium text-sm pt-2 mt-2 justify-between">
        <button className={(avgRating>4) ? "pb-1 w-14 rounded-sm bg-green-500":"pb-1 w-14 rounded-sm bg-orange-500"}>
          &#9733; {avgRating}
        </button>
        <h4>{deliveryTime} min</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
      </div>
      {}
    </div>
  );
};
// /Higher order compenent

//  input - RestaurantCard ===> RestaurantCardPromoted

export const withPromotedLabel = (ResturantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 px-2 rounded-lg">Promoted</label>
        <ResturantCard {...props} />
      </div>
    )
  }
}
export default ResturantCard;
