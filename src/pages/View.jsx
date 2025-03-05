import React from "react";
import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2" style={{ paddingTop: "80px" }}>
        <div className=" ">
          <img
          width={'500px'}
            src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            alt=""
          />
          <div className="flex justify-around">
            <button className="bg-green-600 border rounder p-1">
              Add to Whishlist
            </button>
            <button className="bg-blue-600 border rounder p-1">
              Add to cart
            </button>
          </div>
        </div>
        <div className=" ">
        <div className="mt-10">
          <h6>PID:1</h6>
          <h1 className="font-bold  ">Essence Mascara Lash Princess</h1>
          <p className="text-red-950 font-bold text-2xl">$9.99</p>
          <h6>Brand : Essense</h6>
          <h6>Category : beauty</h6>
          <p className="w-[80%]">
            <span className="font-bold text-xl">Description : </span>Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laborum sunt in omnis ea quaerat laboriosam
            itaque, explicabo vero dolor! Itaque cupiditate nesciunt perferendis
            unde, quod quibusdam aliquam iste quae sapiente dignissimos maiores
            placeat. Harum esse earum in dignissimos fugit ipsum, fugiat veniam
            ratione et? Nihil vel minus blanditiis animi iure.
          </p>

          <h1>Client Reviews</h1>

          <div className="border rounded p-3 shadow mt-2 w-[80%]">
            <h1>John Doe: Very unhappy with my purchase</h1>
            <h1>Rating :2</h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default View;
