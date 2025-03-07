import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchProducts } from "../redux/slices/productSlice";


const Header = ({ fromHomeComponent }) => {
  
  const dispatchSearch = useDispatch()

 


  return (
    <nav className="flex bg-yellow-600 w-full fixed p-3 justify-between">
      <Link to={"/"} className="text-white font-bold">
        <i className="fa-solid fa-truck-fast "></i> Daily Cart
      </Link>
      <ul className="flex gap-5">
        {fromHomeComponent ? (
          <li className="bg-white">
            <input
            onChange={(e)=>{ dispatchSearch(searchProducts(e.target.value.toLowerCase()))}}
              type="text"
              style={{ width: "300px" }}
              className=" rounded p-1 "
              placeholder="Search Products Here....."
            />
          </li>
        ) : (
          ""
        )}

        <li>
          <Link to={"/whishlist"}>
            <i className="fa-solid fa-heart text-red-600"></i>Whishlist{" "}
            <span className="bg-black text-white p-1">0</span>
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            {" "}
            <i className="fa-solid fa-cart-shopping text-green-600"></i>Cart{" "}
            <span className="bg-black text-white p-1">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
