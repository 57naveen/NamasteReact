import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  

 // The next two lines are get the info about restaurant from the json which is stored in reInfo state
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name = "Unknown", cuisines = [], costForTwoMessage = "N/A" } = info;

  // This is used to get the item list from the restaurant 
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];


  return resInfo === null ? (
    <Shimmer /> 
  ) : (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}{" "}- {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹{+item.card.info.price / 100 || item.card.info.defaultPrice / 100 }
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
