import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";

import useOnlineStatus from "../utils/useOnlineStatus";
import FoodCategory from "./FoodCategory";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodHeader, setFoodHeader] = useState("");

  useEffect(() => {
    fetchData();
    fetchFoodCategory();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();

    console.log(json);

    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchFoodCategory = async () =>{

    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45530178705191&lng=78.3752316981554&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();

    console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info) ;
    console.log("Header",json.data.cards[0].card.card.header) ;
    
    setFoodCategory(json.data.cards[0].card.card.gridElements.infoWithStyle.info[3]);
    setFoodHeader(json.data.cards[0].card.card.header);
    
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your are offline now please check your internet...!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        {/* Search Bar */}
        <div className="m-4 p-4">
          <input
            type="text"
            className="search-input border border-solid border-black"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-cyan-500 rounded-lg ml-2 cursor-pointer"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            🔍
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          {/* Filter Button */}
          <button
            className="px-4 py-1 bg-gray-300 rounded-lg ml-2 cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4.1
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>

      <div>
       { <FoodCategory foodData={foodCategory} header={foodHeader} /> }
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
