import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

 
  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name = "Unknown", cuisines = [], costForTwoMessage = "N/A" } = info;

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];


  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}{" "}
          - {costForTwoMessage}
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
