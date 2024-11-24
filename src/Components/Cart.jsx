import React, { useEffect, useState } from 'react';
import CartPageHeader from './CartPageHeader';
import { CardForCart } from './CardForCart';
import emptyCart from "../assets/cart-empty.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity } from '../Slices/ProductStatusSlice';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    
    const addedProducts = useSelector((state) => state.productStatus.addedProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        let totalAmount = 0;
        let totalQty = 0;

        addedProducts.forEach((product) => {
            // Calculate totals and quantities
            if (Number(product.quantity) > product.rating.count) {
                const productAddedCount = 1;
                const productId = product.id;
                dispatch(addQuantity({ productAddedCount, productId }));
                totalQty += Number(productAddedCount);
                totalAmount += (product.price * productAddedCount);
            } else {
                totalQty += Number(product.quantity);
                totalAmount += (product.price * product.quantity);
            }
        });

        setTotal(totalAmount);
        setTotalQuantity(totalQty);

    }, [addedProducts, dispatch]);

    return (
        <div className='container'>
            <CartPageHeader />
            <div className="row justify-content-center">
                {
                    addedProducts.length === 0 &&
                    <div className='d-flex flex-column align-items-center'>
                        <img className='empty-cart' src={emptyCart} alt="" />
                        <h6 className='mt-2 grey'>No products selected!</h6>
                    </div>
                }
                {
                    addedProducts.map((product, index) => (
                        <CardForCart key={index + 5} product={product} />
                    ))
                }
            </div>
            <div className="cart-bottom">
                <hr />
                <div className="subtotal">
                    <h6>SUBTOTAL:</h6>
                    <h6>${total.toFixed(2)}</h6>
                </div>
                <div className="subtotal">
                    <h6>TOTAL QUANTITY:</h6>
                    <h6>{totalQuantity}</h6>
                </div>
                <div className="shipping">
                    <h6>SHIPPING:</h6>
                    <h6 className='free'>FREE</h6>
                </div>
                <hr />
                <div className="total">
                    <h5>TOTAL:</h5>
                    <h4>${total.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
}

export default Cart;
