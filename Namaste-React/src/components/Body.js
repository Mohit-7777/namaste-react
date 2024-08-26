import resObj from "../utils/mockData";
import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

    // console.log(json);

    setResObj(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  // if(ResObj.length===0){
  //   return <Shimmer/>
  // }

  return (
    //Ternary Operator is used here
    ResObj.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter-btn">
          <div>
            <input
              type="text"
              className="search-box"
              value={Searchtxt}
              onChange={(e) => {
                setSearchtxt(e.target.value);
              }}
            />

            <button
              className="search-btn"
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
            onClick={() => {
              const filter = ResObj.filter((res) => res.info.avgRating >= 4.5);

              setFilteredRest(filter);
            }}
          >
            Filter the Resturants
          </button>
        </div>
        <div className="res-container">
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
