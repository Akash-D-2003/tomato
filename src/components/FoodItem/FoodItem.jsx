import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreConext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreConext);
  return (
    <div className="mt-8 shadow-md rounded-t-2xl overflow-hidden">
      <div className="relative">
        <img className="w-full" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className="absolute bottom-4 right-4 w-9 cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
            alt=""
          ></img>
        ) : (
          <div className="absolute flex p-1.5 bottom-4 right-4 rounded-[50px] cursor-pointer gap-2 items-center bg-white">
            <img
              className="w-7"
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img className="w-7" src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between py-2">
          <p className="text-xl font-medium">{name}</p>
          <img
            className="lg:w-[3.5vw] lg:h-[1vw] md:w-14 md:h-4"
            src={assets.rating_starts}
            alt="rating"
          />
        </div>
        <p>{description}</p>
        <p className="mt-3 text-xl font-medium mb-6 text-orange-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
