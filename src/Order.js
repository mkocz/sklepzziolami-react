import React from 'react'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { getBasketTotal } from "./reducer";
import './Order.css'

function Order() {
    const [{ basket }, dispatch] = useStateValue()
    const emptyBasket = () => {
        (dispatch({ type: 'EMPTY_BASKET' }))
    }

    return (
        <div className="order">
            <div className='order__container'>
                <h2 className="order__header">Uzupełnij swoje dane</h2>
                <form>
                    <h5>Imię</h5>
                    <input type='text' defaultValue='Jan' />
                    <h5>Nazwisko </h5>
                    <input type='text' defaultValue='Kowalski' />
                    <h5>Adres</h5>
                    <input type='text' defaultValue='Wiłkowyje 361' />
                    <h5>E-mail</h5>
                    <input type='text' />
                </form>
            </div>

            <div className='order__summary'>
                <h2 className="summary__header">Twoje zamówienie</h2>
                <span>Liczba produktów: {basket?.length}</span>
                <span>Do zapłaty: {getBasketTotal(basket)}zł</span>
                <Link to="/final" onClick={emptyBasket} className='summary__button'>Złóż zamówienie</Link>
            </div>
        </div>
    )
}





export default Order
