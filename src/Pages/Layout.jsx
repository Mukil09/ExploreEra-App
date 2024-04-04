import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Popup from "../Components/Popup/Popup";
import { Outlet } from "react-router-dom";

function Layout() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Outlet />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default Layout;
