import React from 'react'
import { Link } from "react-router-dom";
import './Final.css'

function Final() {
    return (
        <div className="final__container">
            <div className="final">Dziękujemy za złożenie zamówienia.
                Produkty zostaną wysłane na podany adres po otrzymaniu płatności.</div>
            <Link to="/shop" className="summary__button">Wróć do sklepu</Link>
        </div>
    )
}

export default Final
