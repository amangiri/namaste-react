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
  } = resData?.data;
  const fun =(name)=>{
    console.log("res:",name)
  }
  return (
    <div
      className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300"      
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg hover:z-10">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
