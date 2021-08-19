import React from 'react'
import products from './data';
import Product from './Product.js'
import EcoIcon from '@material-ui/icons/Eco';
import './Shop.css'

function Shop() {
    return (
        <>
            <div className="products_container">
                <div className="home__info">
                    <div className="home__infoContainer">
                        <h2>Zasmakuj natury</h2>
                        <EcoIcon className="ecoIcon" />
                        <div className="home__infoText">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="products">
                    {products.map((product, key) => {
                        return (
                            <Product key={product.id}
                                id={product.id}
                                description={product.description}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Shop
