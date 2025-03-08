import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Cart = () => {
  const [totalPriceVal, setotalPriceVal] = useState(0);

  const cartData = useSelector((state) => state.cartReducer);
  useEffect(() => {
    setotalPriceVal(cartData?.map((item) => item.totalPrice)?.reduce((a, b) => a + b));
  },[cartData]);

  console.log(totalPriceVal);
  

  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <div className="m-5">
          <h1 className="text-yellow-600 font-bold text-5xl ">Cart Summary</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 border rounded shadow p-5">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.length > 0 ? (
                    cartData?.map((val, index) => (
                      <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td> {val.title}</td>
                        <td>
                          <img width={"70px"} src={val.thumbnail} alt="" />
                        </td>
                        <td>
                          <div className="flex">
                            <button className="font-bold">-</button>
                            <input
                              type="text"
                              style={{ width: "40px" }}
                              className="border m-2 font-bold rounded p-1 "
                              value={val.quantity}
                              readOnly
                            />
                            <button className="font-bold ">+</button>
                          </div>
                        </td>
                        <td>{val.totalPrice}</td>
                        <td>
                          <button>
                            <i className="fa-solid fa-trash text-red-600"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className="flex justify-center">
                      <img
                        src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif"
                        alt="empty cart"
                      />
                    </div>
                  )}
                </tbody>
              </table>
              <div className="float-right">
                <button className="bg-red-600 text-white font-bold rounded p-1 me-5">
                  Empty Cart
                </button>
                <button className="bg-blue-600 text-white font-bold rounded p-1 me-5">
                  Shop More
                </button>
              </div>
            </div>
            <div className="border rounded shadow p-5">
              <h1 className="text-xl font-bold">
                Total Amount : <span className="text-red-700">{totalPriceVal}</span>
              </h1>
              <hr />
              <button className="bg-green-600 rounded p-1 w-full mt-2 text-white font-bold text-xl">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
