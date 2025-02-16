import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();

    console.log(json);

    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
  {
    return(
      <h1>Your are offline now please check  your internet...!</h1>
    )
  }

  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
     <div className="filter-container">
      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
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

      {/* Filter Button */}
      <button
        className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} className="link" > <RestaurantCard key={restaurant.info.id} resData={restaurant} /> </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
