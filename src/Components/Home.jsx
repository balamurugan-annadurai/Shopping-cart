import React from 'react'
import Header from './Header'
import ProductsContainer from './ProductsContainer'
import Banner from './Banner'

//Home Component to display all products
const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Banner />
                <ProductsContainer />
            </div>
        </>
    )
}

export default Home