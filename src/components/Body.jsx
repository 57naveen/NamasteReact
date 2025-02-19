import RestaurantCard,{withPromtedLable} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";

import useOnlineStatus from "../utils/useOnlineStatus";
import FoodCategory from "./FoodCategory";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodHeader, setFoodHeader] = useState("");

  const RestaurantCardPromoted = withPromtedLable(RestaurantCard)



  useEffect(() => {
    fetchData();
    // fetchFoodCategory();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();

    // console.log(json);

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const fetchFoodCategory = async () =>{

  //   const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45530178705191&lng=78.3752316981554&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //   const json = await data.json();

  //   console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info) ;
  //   console.log("Header",json.data.cards[0].card.card.header) ;
    
  //   setFoodCategory(json.data.cards[0].card.card.gridElements.infoWithStyle.info[3]);
  //   setFoodHeader(json.data.cards[0].card.card.header);
    
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your are offline now please check your internet...!</h1>;
    
  }
  const {loggedInUser,setUserName} = useContext(UserContext)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        {/* Search Bar */}
       <div className="m-4 p-4 flex items-center gap-2 bg-white  rounded-2xl">
  <input
    type="text"
    className="w-full px-4 py-2 border border-gray-300 focus:border-[#ff5200] focus:ring-2 focus:ring-[#ff5200] rounded-2xl outline-none transition-all duration-200"
    placeholder="Search restaurants..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <button
    className="px-4 py-2  cursor-pointer  bg-amber-200  font-medium rounded-lg  transition-all duration-200 active:scale-95"
    onClick={() => {
      const filteredData = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    }}
  >
    Search
  </button>
</div>

<div className="m-4 p-4 flex items-center">
  {/* Filter Button */}
  <button
    className="px-5 py-2 cursor-pointer text-gray-800 font-medium rounded-xl shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2"
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


        {/* <div className="m-4 p-3 flex items-center "> 
          <label className="font-bold">UserName  :  </label>
          <input className="border px-4 py-2 border-gray-300  focus:border-[#ff5200] focus:ring-2 focus:ring-[#ff5200] p-1 ml-2 rounded-2xl outline-none transition-all duration-200"
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value)}
          />
        </div> */}
      </div>

      {/* <div>
       { <FoodCategory foodData={foodCategory} header={foodHeader} /> }
      </div> */}

      <div className="flex flex-wrap justify-start pb-10">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            {" "}
            <div className="transition-transform duration-100 hover:scale-95">
        <RestaurantCard resData={restaurant} />
      </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Body;
