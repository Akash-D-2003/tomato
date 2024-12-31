import React from "react";

const Header = () => {
  return (
    <div id="home" className="h-[34vw] header relative my-[30px] mx-auto bg-contain bg-no-repeat">
      <div className="animate-[fadeIn_3s] absolute flex flex-col items-start g-[1.5vh] w-[50%] bottom-[10%] left-[30px] ">
        <h2 className="text-[4.5vw] text-white font-medium">order your favourite food here</h2>
        <p className="text-white lg:text-[1vw] md:text-sm mt-4 lg:block  hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis ratione soluta vero
          sed dolor, dolores magnam, ipsa quidem iure placeat nobis consequatur. Architecto sed,
          perspiciatis a laudantium voluptate id.
        </p>
        <button className="mt-7 border-none text-black bg-white lg:px-[2.3vw] lg:py-[1vw] py-2 px-4 lg:text-[1vw] text-xs rounded-[50px]">
          Vive menu
        </button>
      </div>
    </div>
  );
};

export default Header;
