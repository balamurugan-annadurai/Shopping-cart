import React, { useContext } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';


//ProductsContainer Component
const ProductsContainer = ({ setProductCount }) => {
  const productsData = useSelector((state) => state.productStatus.productsData) || [];

  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        productsData.length > 0 ? (
          productsData.map((product, index) => (
            <Card key={index} product={product} />
          ))
        ) : (
          <p>No products available</p> 
        )
      }
    </div>
  )
}

export default ProductsContainer;
