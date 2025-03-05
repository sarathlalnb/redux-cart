import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }} className="ms-5 ">
        <>
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
                <Link
                  to={"/id/view"}
                  className="bg-yellow-500 rounded p-1 mt-3"
                >
                  View More...
                </Link>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
