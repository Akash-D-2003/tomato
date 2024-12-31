import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div id="app-download" className="flex flex-col text-center  my-24 ">
      <p className="font-medium text-[3vw]">
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex  gap-6 mt-8 text-center justify-center">
        <div>
          <img src={assets.play_store} alt="playstore" />
        </div>
        <div>
          <img src={assets.app_store} alt="appstore" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
