import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams()
    
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4640087729816&lng=77.02618695368315&restaurantId=" + resId
        );
        const json = await data.json();

        console.log(json);

        setResInfo(json.data)
        
    }
    // 125878;



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