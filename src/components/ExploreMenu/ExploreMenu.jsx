import React from "react";
import { menu_list } from "../../assets/assets/";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-2xl">Explore our menu</h1>
      <p className="lg:w-3/5 w-full text-black ">
        Lorem ipsum dolor sit amet, consectetur doloremque quam et, eveniet praesentium tempore cum
        fuga provident modi accusamus iure blanditiis expedita!
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-scroll scroolbar-none scrollbar-hide">
        {menu_list.map((menu, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prve) => (prve === menu.menu_name ? "All" : menu.menu_name));
              }}
              key={index}
            >
              <img
                className={`w-[7.5vw] min-w-20 cursor-pointer transition-all	rounded-[50%] ${
                  category === menu.menu_name ? "p-0.5 border-4 border-orange-500" : ""
                }`}
                src={menu.menu_image}
                alt={menu.menu_name}
              />
              <p className="mt-2.5 lg:text-[1.4vw] text-xs cursor-pointer">{menu.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
