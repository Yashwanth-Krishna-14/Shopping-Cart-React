import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css"

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className='product'>
    <div className='imgBox'>
    <img src ={productImage} className='img1' alt = {productName}></img>
    </div>
   
<div className='descp'>
    <p className='inm'>{productName}</p>
    <p className="green">In Stock</p>
    <p  className='inm'>Rs {price}</p>
     
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
    </div>
    </div>
  );
};
