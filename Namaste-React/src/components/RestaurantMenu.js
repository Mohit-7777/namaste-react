import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex ]=useState(null)
    


    if(resInfo === null) return <Shimmer/>
            const { name, cuisines, costForTwoMessage } =
              resInfo?.cards[2]?.card?.card?.info;

            const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

            const categories =
              resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
                (e) =>
                  e?.card?.["card"]?.["@type"] ===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
              );
            console.log(categories);
            
    return (
      <div className="text-center">
        <h1 className="font-bold text-2xl my-6">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} -{" ₹"}
            {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
          </li>
        ))} */}
        <p>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory key={index} data={category?.card?.card} 
              showItems={index===showIndex? true : false} 
              setShowIndex = {() => setShowIndex(index)}/>
            );
          })}{" "}
        </p>
      </div>
    );
}
export default RestaurantMenu;