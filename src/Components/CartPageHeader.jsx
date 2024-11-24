import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Header Component
const CartPageHeader = () => {
    
    const [isScroll, setIsScroll] = useState(false);

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
    const handleClick = () => {
        navigate('/');
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
                <div className='cart custom-for-cart' onClick={handleClick}>
                    <span className='cart-icon'><i className='bx bxs-chevrons-left' ></i></span>
                    <p className='cart-title'>Products</p>
                </div>
            </div>
        </header>

    )
}

export default CartPageHeader