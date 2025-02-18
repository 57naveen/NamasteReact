import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  

 // The next two lines are get the info about restaurant from the json which is stored in reInfo state
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name = "Unknown", cuisines = [], costForTwoMessage = "N/A" } = info;

  // This is used to get the item list from the restaurant 
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

  //This is filtering the category of the menu 
  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
  (
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))

    // console.log(categories);


  return resInfo === null ? (
    <Shimmer /> 
  ) : (   
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-3xl">{name}</h1>
        <p>
          {cuisines.length > 0 ? <span className="font-bold">{cuisines.join(", ")}</span> : "No cuisines available"}{" "}- {costForTwoMessage}
        </p>
      
      {categories.map((category)=>
      (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
      )   
      )}
        
      </div>
    </>
  );r
};

export default RestaurantMenu;
