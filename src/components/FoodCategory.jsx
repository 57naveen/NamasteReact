import { MERCHANDISING_BANNERS } from "../utils/constants";

const FoodCategory = (props) =>
{  
     const {foodData,header} =  props 
 
    return (
        <>
        <div className="conatiner">
            <h3>{header.title}</h3>
            <img alt="logo" src={MERCHANDISING_BANNERS + foodData.imageId}/>
            <name>{foodData.action.text}</name>
        </div>
        </>
    )
   
}


export default FoodCategory;        