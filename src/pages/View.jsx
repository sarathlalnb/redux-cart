import React, { useEffect } from "react";
import Header from "../components/Header";
import { fetchProductById } from "../redux/slices/singleProductSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWhishList } from "../redux/slices/whishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const View = () => {
  const { product } = useSelector((state) => state.singleProductReducer);

  const whishlistState = useSelector((state) => state.whishListReducer);

  const cartData = useSelector((state)=>state.cartReducer)

  let { id } = useParams();
  const disp = useDispatch();
  useEffect(() => {
    disp(fetchProductById(id));
  }, []);

  const onAddtoWhishlist = (product) => {
    const existingProduct = whishlistState.find((val) => val.id == product.id);
    if (existingProduct) {
      alert("Product Already Added to Whishlist");
    } else {
      disp(addToWhishList(product));
    }
  };

  const onCartClick =(product)=>{
    let existingProduct = cartData.find((val)=>val.id==product.id)
    disp(addToCart(product))
    if(existingProduct){
      alert("Product quantity is incrementing in your cart!!!")
    }else{
      alert("Product Successfully Added to CART")
    }
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20 pt-20">
        {/* Left Section: Product Image & Buttons */}
        <div className="flex flex-col items-center">
          <img
            className="w-[20rem] md:w-[25rem] rounded-lg shadow-lg"
            src={product?.thumbnail}
            alt="Essence Mascara Lash Princess"
          />
          <div className="flex gap-5 mt-5">
            <button
              onClick={() => onAddtoWhishlist(product)}
              className="bg-violet-700 hover:bg-violet-900 transition px-5 py-3 rounded-lg text-white font-semibold shadow"
            >
              ❤️ Add to Wishlist
            </button>
            <button onClick={()=>onCartClick(product)} className="bg-green-700 hover:bg-green-900 transition px-5 py-3 rounded-lg text-white font-semibold shadow">
              🛒 Add to Cart
            </button>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="mt-5 md:mt-0">
          <p className="text-gray-600">PID: {id}</p>
          <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
            {product?.title}
          </h1>
          <p className="text-red-600 font-bold text-xl mt-2">$9.99</p>
          <p className="text-gray-700 mt-1">
            <span className="font-semibold">Brand:</span> {product?.brand}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {product?.category}
          </p>

          {/* Description Section */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            <span className="font-semibold">Description:</span>{" "}
            {product.description}
          </p>

          {/* Client Reviews Section */}
          <h2 className="mt-6 text-lg font-semibold text-gray-800">
            Client Reviews
          </h2>

          {product.reviews?.map((obj) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md mt-2 bg-gray-100 w-[90%]"
            >
              <h3 className="font-semibold text-gray-800">
                {obj.reviewerName}
              </h3>
              <p className="text-gray-600 text-sm italic">{obj.comment}</p>
              <p className="text-yellow-600 font-semibold mt-1">
                ⭐ Rating: {obj.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default View;
