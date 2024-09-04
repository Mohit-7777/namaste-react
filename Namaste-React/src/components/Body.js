import resObj from "../utils/mockData";
import React, { useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [ResObj, setResObj] = useState([]);

  const [FilteredRest, setFilteredRest] = useState([]);

  const [Searchtxt, setSearchtxt] = useState("");

  //Whenever state variable Updates, react triggers a reconciliation Cycle(rerenders the whole component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setResObj(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


const onlineStatus = useOnlineStatus();

if(onlineStatus===false)
  return( <h1>Opps! You don't have Internet Connection</h1>)









  //conditional rendering
  // if(ResObj.length===0){
  //   return <Shimmer/>
  // }


  const {loggedInUser, setUserName} = useContext(userContext)

  return (
    //Ternary Operator is used here
    ResObj.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="flex">
          <div>
            <input
              type="text"
              className="m-4 border border-solid rounded border-black "
              value={Searchtxt}
              onChange={(e) => {
                setSearchtxt(e.target.value);
              }}
            />

            <button
              className="bg-green-500 px-3 py-2 rounded"
              onClick={() => {
                const filteredRestaurant = ResObj.filter((res) =>
                  res.info.name.toLowerCase().includes(Searchtxt.toLowerCase())
                );

                setFilteredRest(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-blue-500 rounded px-4 py-1 m-3"
            onClick={() => {
              const filter = ResObj.filter((res) => res.info.avgRating >= 4.5);

              setFilteredRest(filter);
            }}
          >
            Top Rated Resturants
          </button>
          <div>
            <label htmlFor="">UserName : </label>
            <input className="border border-black m-4  mx-1 p-0.5 border-solid rounded"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>

        <div className="flex flex-wrap">
          {FilteredRest.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {" "}
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default Body;
