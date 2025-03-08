import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeWhishListItem } from "../redux/slices/whishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const Whishlist = () => {
  const dispatch = useDispatch()
  const whishlistState = useSelector((state) => state.whishListReducer);
   const cartData = useSelector((state)=>state.cartReducer)

    const onCartClick =(product)=>{
      dispatch(removeWhishListItem(product))
      let existingProduct = cartData.find((val)=>val.id==product.id)
      dispatch(addToCart(product))
      if(existingProduct){
        alert("Product quantity is incrementing in your cart!!!")
      }else{
        alert("Product Successfully Added to CART")
      }
    }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px" }} className="ms-3">
        {
          whishlistState?.length>0?<>
          <h1 className="text-3xl text-green-600 ">My Wishlist</h1>
          <div className="grid grid-cols-4 gap-5">
          { whishlistState?.map((val)=>(
       <div key={val?.id}  className="border shadow rounded pb-3">
         <img
           src={val?.thumbnail}
           alt=""
         />
         <div className="text-center">
           <h3 className="font-bold text-xl mb-5">
            {val?.title}
           </h3>
         </div>
         <div className="flex justify-evenly">
           <button onClick={()=>dispatch(removeWhishListItem(val))} className="text-xl">
           <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
           </button>
           <button onClick={()=>onCartClick(val)} className="text-xl"><i className="fa-solid fa-cart-shopping text-green-600"></i></button>
         </div>
       </div>
          ))
     
          }
          </div>
          
        </>:  <div className="flex justify-center"><img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="empty cart" />
<h1 className="text-3xl text-red-600">Cart IS Empty</h1></div>
        }
        
      </div>
    </>
  );
};

export default Whishlist;
