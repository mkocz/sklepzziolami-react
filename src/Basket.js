import React from 'react'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer";
import Product from './Product.js'
import './Basket.css'

function Basket() {
    const [{ basket }] = useStateValue()

    return (
        <div className="basket">
            {(basket?.length === 0) && <div className="basket__summaryEmpty">
                <h2 className="basket__header">Twój koszyk jest pusty</h2>
                <Link to="/shop" className="summary__button">Wróć do sklepu</Link>
            </div>
            }

            {(basket?.length !== 0) && <div className="basket__summary">
                <h2 className="basket__header">Stan koszyka</h2>
                <span>Liczba produktów: {basket?.length}</span>
                <span>Do zapłaty: {getBasketTotal(basket)}zł</span>
                <Link to="/order" className="summary__button">Zamów</Link>
            </div>}

            <div className="products">
                {basket.map((product, key) => {
                    return (
                        <>
                            <Product id={product.id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                inBasket="true"
                            />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Basket
