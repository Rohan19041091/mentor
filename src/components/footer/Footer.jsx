// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="logo-container">
                <Link to="/">
                    <img
                        src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-dark.svg&w=1080&q=75"
                        alt="Logo"
                        className="logo"
                    />
                </Link>
                <div className="bottom-text">
                <p>548 Market St PMB 30073, San Francisco</p>
                <p>©2024 Topmate</p>
            </div>
            </div>
            <div className="links-container">
                <div>
                  
                    <ul> 
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contect us">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="#">Terms &amp; Conditions</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                  
                    <ul>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/report">Creator Report</Link>
                        </li>
                        <li>
                            <Link to="/carousel">Carousel Maker</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    );
}
