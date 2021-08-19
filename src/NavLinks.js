import React from 'react'
import { NavLink } from "react-router-dom";
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { useStateValue } from "./StateProvider"

function NavLinks() {
    const [{ basket }] = useStateValue();

    return (
        <div className="navlinks">
            <NavLink to='/shop'>
                <div className='navlinks__item' >Sklep</div>
            </NavLink>
            <NavLink to='/basket'>
                <div className='navlinks__item'>
                    <ShoppingBasketOutlinedIcon />
                    <span> {basket?.length} </span>
                </div>
            </NavLink>
        </div>
    )
}

export default NavLinks
