import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';   // your public-site Navbar, not the dashboard one
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton ';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton/>
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;