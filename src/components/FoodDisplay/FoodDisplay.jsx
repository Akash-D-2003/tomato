import React, { useContext } from "react";
import { StoreConext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreConext);

  return (
    <div id="food-display">
      <h2 className="text-2xl mt-4 font-medium">Top dishes near you</h2>
      <div className="animate-[fadeIn_3s] grid gap-8 lg:grid-cols-4 md:grid-cols-2 mb-20">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
