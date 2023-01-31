import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../content/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
