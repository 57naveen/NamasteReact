import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
   
   const dispatch = useDispatch();

   const addItemCart = (item) =>{
    //Dispatch an action
      dispatch(addItem(item))
   }

   
   
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button className="p-2 w-26 mx-5 my-30 bg-white shadow-lg text-green-500 font-bold rounded-xl cursor-pointer" onClick={ () => addItemCart(item) }>
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-36 h-36  rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
