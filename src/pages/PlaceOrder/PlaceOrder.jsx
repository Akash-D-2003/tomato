import React, { useContext } from "react";
import { StoreConext } from "../../context/StoreContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PlaceOrder = () => {
  const { cartTotalAmount } = useContext(StoreConext);
  return (
    <>
      <div className="w-4/5 m-auto">
        <Navbar />
        <form className="my-20 grid grid-cols-2 gap-10">
          <div>
            <p className="text-[20px] font-medium mb-5">Delivery Information</p>
            <div className="flex gap-3">
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="First name"
              />
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="Last name "
              />
            </div>
            <input
              className="border-2 outline-none  p-1 w-full mb-4"
              type="email"
              placeholder="Email address"
            />
            <input
              className="border-2 outline-none  p-1 w-full mb-4"
              type="text"
              placeholder="Street"
            />
            <div className="flex gap-3">
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="Sity"
              />
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="flex gap-3">
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="Zip code"
              />
              <input
                className="border-2 outline-none  p-1 w-full mb-4"
                type="text"
                placeholder="Country"
              />
            </div>
            <input type="text" className="border-2 p-1 outline-none w-full" placeholder="Phone" />
          </div>
          <div className="mt-8 flex justify-end">
            <div className="w-3/4">
              <h2 className="text-[20px] font-medium mb-5">Cart Totals</h2>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${cartTotalAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>${cartTotalAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr />
              <div className="flex justify-between mb-3">
                <p>Total</p>
                <p>${cartTotalAmount() === 0 ? 0 : cartTotalAmount() + 5}</p>
              </div>
              <button className="text-sm  text-white font-medium bg-orange-500 w-full py-2">
                PROCEED PAYMENT
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
