import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)
    


    if(resInfo === null) return <Shimmer/>
            const { name, cuisines, costForTwoMessage } =
              resInfo?.cards[2]?.card?.card?.info;

            const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

            console.log(itemCards);
            
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} -{" ₹"}
            {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
          </li>
        ))}
      </div>
    );
}
export default RestaurantMenu;