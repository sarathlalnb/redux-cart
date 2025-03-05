import React from "react";
import Header from "../components/Header";

const Cart = () => {
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
                  <tr>
                    <td>1</td>
                    <td> Essence Mascara Lash Princess</td>
                    <td>
                      <img
                        width={"70px"}
                        src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                        alt=""
                      />
                    </td>
                    <td>
                      <div className="flex">
                        <button className="font-bold">-</button>
                        <input
                          type="text"
                          style={{ width: "40px" }}
                          className="border m-2 font-bold rounded p-1 "
                          value={0}
                          readOnly
                        />
                        <button className="font-bold ">+</button>
                      </div>
                    </td>
                    <td>$ 9.99</td>
                    <td>
                      <button>
                        <i className="fa-solid fa-trash text-red-600"></i>
                      </button>
                    </td>
                  </tr>
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
                Total Amount : <span className="text-red-700"> $ 9.99</span>
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
