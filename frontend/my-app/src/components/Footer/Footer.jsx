import React from 'react';
import './Footer.css';
import { GrInstagram } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import footerLogo from '../Assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <img src={footerLogo} alt="Shopper logo" />
                <p>SHOPPER</p>
            </div>

            <nav>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="footer-social-icon">
                <div className="footer-icons-container" title="Instagram" aria-label="Instagram">
                    <GrInstagram size={25} />
                </div>
                <div className="footer-icons-container" title="Pinterest" aria-label="Pinterest">
                    <FaPinterest size={25} />
                </div>
                <div className="footer-icons-container" title="WhatsApp" aria-label="WhatsApp">
                    <FaWhatsapp size={25} />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>&copy; 2025 Shopper. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
