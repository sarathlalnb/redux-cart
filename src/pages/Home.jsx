import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, error } = useSelector(
    (state) => state.productReducer
  );

  console.log(allProducts, loading, error);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <>
      <Header fromHomeComponent={true} />
      <div style={{ paddingTop: "80px" }} className="ms-5 ">
        {loading ? (
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {allProducts?.length > 0 ? (
              allProducts?.map((products) => (
                <div key={products.id}>
                  <div className="border shadow rounded pb-3">
                    <img src={products.thumbnail} alt="" />
                    <div className="text-center">
                      <h3 className="font-bold text-xl mb-5">
                        {products.title}
                      </h3>
                      <Link
                        to={`/${products.id}/view`}
                        className="bg-yellow-500 rounded p-1 mt-3"
                      >
                        View More...
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flext justify-center">No Products Availble</div>
            )}
          </div>
        )}
        <></>
      </div>
    </>
  );
};

export default Home;
