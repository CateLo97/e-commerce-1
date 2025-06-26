
import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'; 

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState(location.pathname.substring(1) || "shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
               <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/">Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link to="/mens">Men</Link>
                    {menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link to="/womens">Women</Link>
                    {menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids">Kids</Link>
                    {menu === "kids" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("cart")}>
                    <Link to="/cart">Cart</Link>
                    {menu === "cart" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-card-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;