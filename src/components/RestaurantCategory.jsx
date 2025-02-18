import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handelClick = () => {
    setShowIndex();
  };

  // console.log(data)

 /**
  * This component is controled by parent component through props
  * 
  * The showItems is coming from RestaurantMenu component
  * 
  */

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handelClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⮟</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
