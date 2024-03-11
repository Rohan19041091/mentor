import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <header>
      <nav>
        <div className="navbar">
          <div>
            <ul>
              <div className="nav-logo">
                <Link to="/">
                  <img
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-light.svg&w=256&q=75"
                    alt="Logo"
                  />
                </Link>
              </div>

              <li>
                <Link onClick={toggleShowMore} className="dropdown-toggle">
                For Creator ▼
                </Link>
                {showMore && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-content">
                      <li>
                        <NavLink className="sideManu" to="/frontend">
                          Front end
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="sideManu" to="/backend">
                          Backend
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/earning">Earnings calculator</NavLink>
              </li>
            </ul>
          </div>
          <div className="login">
          <Link to="/" className="ai-btn">
              Ai search
            </Link>
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/register" className="register-btn">
              Sign up free
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar