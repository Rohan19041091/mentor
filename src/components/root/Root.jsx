import React from 'react'
import Footer from '../footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../header/Navbar'

const Root = () => {
  const location = useLocation();

  // Check if the current location is the Login page or Register page
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <>
      {/* Render Navbar only if not on the Login or Register page */}
      {!isLoginPage && !isRegisterPage && <Navbar />}
      <Outlet />
      {/* Render Footer only if not on the Login or Register page */}
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  )
}

export default Root;
