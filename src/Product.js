import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider"


function Product({ id, name, image, price, description, inBasket = false }) {
    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
            },
        });
    }

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="product">
            <img className="product__image" src={image} alt="" />
            <div className="product__info">
                <p className="product__name">{name}</p>
                {!inBasket && <div className="product__description">{description}</div>}
                <p className="product__price">{price} zł</p>
            </div>
            {!inBasket ? <button onClick={addToBasket}>Dodaj do koszyka</button> :
                <button onClick={() => removeFromBasket(id)}>Usuń</button>}
        </div>
    );
}

export default Product
