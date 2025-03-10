import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,decrementItem,removeItem,emptyCart} from "../redux/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [totalPriceVal, setotalPriceVal] = useState(0);

  const cartData = useSelector((state) => state.cartReducer);
  useEffect(() => {
    setotalPriceVal(
      cartData?.map((item) => item.totalPrice)?.reduce((a, b) => a + b, 0)
    );
  }, [cartData]);

  const decrementBtnClick =(product)=>{
    if(product.quantity>1){
      dispatch(decrementItem(product))
    }else{
      // remove item
    }
  }

  const onCheckoutClick =()=>{
    dispatch(emptyCart())
    alert("Successfully Ordered.....Thank you for purchasing with us")
    navigate('/')
  }

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
                            <button onClick={()=>decrementBtnClick(val)} className="font-bold">-</button>
                            <input
                              type="text"
                              style={{ width: "40px" }}
                              className="border m-2 font-bold rounded p-1 "
                              value={val.quantity}
                              readOnly
                            />
                            <button
                              onClick={() => dispatch(addToCart(val))}
                              className="font-bold "
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>{val.totalPrice}</td>
                        <td>
                          <button onClick={()=>dispatch(removeItem(val.id))}>
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
                <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 text-white font-bold rounded p-1 me-5">
                  Empty Cart
                </button>
                <Link to={'/'} className="bg-blue-600 text-white font-bold rounded p-1 me-5">
                  Shop More
                </Link>
              </div>
            </div>
            <div className="border rounded shadow p-5">
              <h1 className="text-xl font-bold">
                Total Amount :{" "}
                <span className="text-red-700">{totalPriceVal}</span>
              </h1>
              <hr />
              <button onClick={onCheckoutClick} className="bg-green-600 rounded p-1 w-full mt-2 text-white font-bold text-xl">
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
