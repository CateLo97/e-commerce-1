import React, { useContext, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'; 
import { FaBars, FaTimes } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState(location.pathname.substring(1) || "shop");
    const {getTotalCartItems}= useContext(ShopContext); 
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setMobileMenuOpen(false); // cierra hamburguesa
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>

            {/* Hamburguesa */}
            <div className="nav-hamburger" onClick={handleToggle}>
                {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </div>

            {/* Menú de navegación */}
            <ul className={mobileMenuOpen ? "nav-menu nav-menu-active" : "nav-menu"}>
            <Link className="list-link" to="/" onClick={() => handleMenuClick("shop")}>
                <li className="list-item">
                Shop
                {menu === "shop" && <hr className="nav-menu-hr" />}
                </li>
            </Link>
            <Link className="list-link" to="/mens" onClick={() => handleMenuClick("mens")}>
                <li className="list-item">
                Men
                {menu === "mens" && <hr className="nav-menu-hr" />}
                </li>
            </Link>
            <Link className="list-link" to="/womens" onClick={() => handleMenuClick("womens")}>
                <li className="list-item">
                Women
                {menu === "womens" && <hr className="nav-menu-hr" />}
                </li>
            </Link>
            <Link className="list-link" to="/kids" onClick={() => handleMenuClick("kids")}>
                <li className="list-item">
                Kids
                {menu === "kids" && <hr className="nav-menu-hr" />}
                </li>
            </Link>

            {/* login SOLO en mobile dentro del menú hamburguesa */}

            <Link className="list-link nav-cart-link" to="/cart" onClick={() => handleMenuClick("cart")}>
                <li className="list-item">
                Cart
                {menu === "cart" && <hr className="nav-menu-hr" />}
                </li>
            </Link>
            
            <Link className="list-link nav-login-link" to="/login" onClick={() => handleMenuClick("login")}>
                <li className="list-item">
                Login
                {menu === "login" && <hr className="nav-menu-hr" />}
                </li>
            </Link>
            </ul>

            <div className="nav-login-cart">
            {/* login SOLO en desktop como botón */}
            <Link to="/login" className="nav-login-button">
                <button>Login</button>
            </Link>
            <Link to="/cart">
                <img src={cart_icon} alt="cart" />
            </Link>
            <div className="nav-card-count">{getTotalCartItems()}</div>
            </div>

        </div>
    );
}

export default Navbar;
