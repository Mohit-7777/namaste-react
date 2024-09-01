import React from "react";
import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    console.log(items);
    
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-4 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <br />
                <span className=" text-xs font-semibold">
                  {" "}
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-3">
              <img src={CDN_URL + item.card.info.imageId} alt="This img" />
              <div>
                <button className="bg-green-300 text-center p-1 rounded-md ">
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );


}
export default ItemList