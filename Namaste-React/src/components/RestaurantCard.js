import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
const RestaurantCard = ({resData} ) => {
  const { name, cuisines, avgRating, costForTwo} = resData;
  const {loggedInUser } = useContext(userContext)

  return (
    <div className="m-4 p-4 w-[220px] h-[540px] bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="An Img"
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ") || cuisines} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
      {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
  );
};
export default RestaurantCard;
