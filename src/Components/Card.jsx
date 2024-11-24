import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, removeProducts, toggle } from '../Slices/ProductStatusSlice';

//Card Component
const Card = ({ product }) => {

  //Function to update button and cart status
  const productStatus = useSelector((state) => state.productStatus[product.id] || false);

  const dispatch = useDispatch();

  const addProduct = () => {

    dispatch(toggle(product.id));
    if (!productStatus) {
      dispatch(addProducts(product));
    }
    else {
      dispatch(removeProducts(product.id));
    }

  }

  return (
    <div className='card col-xl-4 col-lg-6 col-md-6'>
      <div className='card-content'>
        <img className='product-img' src={product.image} alt="" />
        <h6 className='mt-3 product-title text-center'>{product.title}</h6>
        <p>${product.price}</p>
        <button onClick={addProduct}
          className={productStatus ? 'btn border-dark' : 'btn btn-dark'}>
          {productStatus ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export default Card