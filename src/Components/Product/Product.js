import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
  // console.log(props.product.name)
  const {handleAddToCart}=props
  const {name,img,price,seller,ratings} = props.product;
  return (
    <div className='product'>
      <img src={img} alt=""></img>
      <div className='product-info'>
        
      <p className='product-name'>{name}</p>
      <p>Price: ${price}</p>
      <p><small>Seller: {seller}</small></p>
      <p><small>Ratings: {ratings}</small></p>
      </div>
      <button onClick={()=>handleAddToCart(props)} className='btn-cart'>
        <p style={{marginRight:"10px"}}>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>

  );
};

export default Product;