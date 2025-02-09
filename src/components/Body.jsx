import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
 
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)


  useEffect(()=>
  {
      fetchData();
  },[])

  const fetchData = async () =>
  {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4790939&lng=78.3690711&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

      const json = await data.json();
      
      console.log(json)

      console.log(json.data.cards.slice(3).map(card => card.card.card.info));

      setListOfRestaurants(json.data.cards.slice(3).map(card => card.card.card));
  }

 

    return (
      <div className="body">  
        <div className="filter">
            <button className="filter-btn" onClick={()=>
              {
                const filteredList = listOfRestaurants.filter(
                  (res)=> res.info.avgRatingString > 4.5
                )
                setListOfRestaurants(filteredList)
              }     
            }>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


export default Body  