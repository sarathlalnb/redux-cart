import React from "react";
import Header from "../components/Header";

const Whishlist = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }} className="ms-3">
        <>
          <h1>My Wishlist</h1>
          <div className="grid grid-cols-4 gap-5">
            <div className="border shadow rounded pb-3">
              <img
                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                alt=""
              />
              <div className="text-center">
                <h3 className="font-bold text-xl mb-5">
                  Essence Mascara Lash Princess
                </h3>
              </div>
              <div className="flex justify-evenly">
                <button className="text-xl">
                <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                </button>
                <button className="text-xl"><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Whishlist;
