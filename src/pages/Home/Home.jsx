import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [categorey, setCategory] = useState("All");
  return (
    <>
      <div className="w-4/5 m-auto">
        <Navbar />
        <Header />
        <ExploreMenu category={categorey} setCategory={setCategory} />

        <FoodDisplay category={categorey} />
        <AppDownload />
      </div>
      <Footer />
    </>
  );
};

export default Home;
