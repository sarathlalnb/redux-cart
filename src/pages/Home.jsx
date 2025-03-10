import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage,setCurrentPage] = useState(1)

  const { allProducts, loading, error } = useSelector(
    (state) => state.productReducer
  );

  console.log(allProducts, loading, error);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  let productsPerPage = 8;
  let totalPage = Math.ceil(allProducts?.length/productsPerPage)
  let lastIndexofCurrentPage =  currentPage * productsPerPage
  let firstIndexofCurrentPage = lastIndexofCurrentPage- productsPerPage  

  let paginatedArray = allProducts?.slice(firstIndexofCurrentPage,lastIndexofCurrentPage)

  const onBackwardClick =()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  const onForwardClick =()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }

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
          <>
            <div className="grid grid-cols-4 gap-5">
              {allProducts?.length > 0 ? (
                paginatedArray?.map((products) => (
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
            <div className="text-center text-xl font-bold m-5  ">
              <span onClick={onBackwardClick}>
                <i className=" cursor-pointer fa-solid fa-backward me-3"></i>
              </span>
              <span className="me-3">{currentPage} of {totalPage}</span>
              <span onClick={onForwardClick}>
                <i className="cursor-pointer fa-solid fa-forward"></i>
              </span>
            </div>
          </>
        )}
        <></>
      </div>
    </>
  );
};

export default Home;
