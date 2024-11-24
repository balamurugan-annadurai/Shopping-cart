import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Header Component
const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    
    const addedProductsCount = useSelector((state) => state.productStatus.addedProductsCount);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScroll(true);
            }
            else {
                setIsScroll(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate('/cart');
    }

    return (
        <header className={isScroll ? 'scrolled' : ""}>
            <div className='header'>
                <div className="left">
                    <h1>logo</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className='cart' onClick={handleCartClick}>
                    <span className='icon'><i className='bx bxs-cart'></i></span>
                    <p className='cart-title'>Cart</p>
                    <p className='count'>{addedProductsCount}</p>
                </div>
            </div>
        </header>

    )
}

export default Header