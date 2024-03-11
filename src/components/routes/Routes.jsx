import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../home/Home';
import Pricing from '../pricing/Pricing';
import Earnings from '../earnings/Earnings';
import Login from '../login/Login';
import Register from '../register/Register';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="earning" element={<Earnings />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
