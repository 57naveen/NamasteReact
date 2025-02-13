import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info.sla;
  
    return (
      <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <div className="res-info">
          <span className="rating">{avgRating} ⭐</span>
          <span className="delivery">{deliveryTime} min</span>
        </div>
        <p className="res-area">{areaName}</p>
        <p className="res-price">{costForTwo}</p>
      </div>
    </div>
    );
  };

  

export default RestaurantCard  