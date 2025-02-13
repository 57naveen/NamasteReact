import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={()=>
            {
              // filter the reaturaunt and update the UI 
                const filteredData = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredData);
            }
          }>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("pressed")
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4.1
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} > <RestaurantCard key={restaurant.info.id} resData={restaurant} /> </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
