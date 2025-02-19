import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="p-4 w-[300px] rounded-lg ">
      <img
        className="rounded-xl h-45 w-90 shadow-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details">
        <h3 className="font-bold py-2">{name.length > 20 ? name.slice(0, 20) + "..." : name}</h3>
        <p className="res-cuisines">
          {cuisines.length > 3
            ? cuisines.slice(0, 3).join(", ") + " ..."
            : cuisines.join(", ")}
        </p>
        <div className="res-info">
          <span className="rating">⭐{avgRating} </span>
          <span className="delivery font-bold">  • {deliveryTime} min</span>
        </div>
        <p className="res-area">{areaName}</p>
        {/* <p className="res-price">{costForTwo}</p> */}
      </div>
    </div>
  );
};

// Higher Order Component

// This higher order component take the input as a another component and return the new component

// we are not using this HOC now because of API data 

export const withPromtedLable = (RestaurantCard) =>
{
  return (props) =>
  {
    return (
      <div>
        <labal>Promoted</labal>
        <RestaurantCard {...props} />
      </div>
    )
  }
}




export default RestaurantCard;
