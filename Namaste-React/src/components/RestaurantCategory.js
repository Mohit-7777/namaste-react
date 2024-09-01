import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data);

  //  const[showItems, setShowItems] = useState(false)
    
  const clickHandler = () => {
      setShowIndex();
  }

  return (
    <div className="bg-gray-50 my-3 p-4 w-6/12 mx-auto shadow-lg ">
      <div className="flex justify-between"
      onClick={clickHandler}>
        <span className="font-bold cursor-pointer">
          {data.title} ({data.itemCards.length})
        </span>
        <span>👇</span>
      </div>
      

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;