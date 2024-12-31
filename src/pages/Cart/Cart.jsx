import React, { useContext, useState } from "react";
import { StoreConext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, cartTotalAmount } = useContext(StoreConext);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-4/5 m-auto">
        <Navbar />
        <div className="my-10">
          <div className="grid grid-cols-6 text-center">
            <p>Items </p>
            <p>Title</p>
            <p>Price </p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="grid grid-cols-6 text-center items-center mb-2 mt-2">
                    <img className="w-20" src={item.image} alt="" />
                    <p className="text-sm">{item.name}</p>
                    <p className="text-sm">${item.price}</p>
                    <p className="text-sm">{cartItems[item._id]}</p>
                    <p className="text-sm">{cartItems[item._id] * item.price}</p>
                    <div onClick={() => removeFromCart(item._id)}>
                      <p className="cursor-pointer">x</p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="mb-10 grid gap-24  grid-cols-2">
          <div className="">
            <h2 className="text-[20px] font-bold mb-5">Cart Totals</h2>
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

            <button
              onClick={() => navigate("/order")}
              className="text-sm  text-white font-medium bg-orange-500 w-full py-2"
            >
              PROCEED CHECKOUT
            </button>
          </div>
          <div className="mt-12">
            <p>if you have a promo code</p>
            <div className="flex mt-5">
              <input
                className="border-2 bg-gray-200 p-2 w-full"
                type="text"
                placeholder="promo code"
              />
              <button className="bg-black text-white px-8">submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
