import React, { useState } from "react";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Category from "./Category";
import Product from "./Product";
import Slider from "./Slider";
import Contactdetails from "./Contactdetails";
import Userdetails from "./Userdetails";

function Dashboard() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" }; // Fallback to "Guest" if name is undefined
  const [currentView, setCurrentView] = useState("Hero");

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case "Logo":
        return <Logo />;
      case "Slider":
            return <Slider />;
      case "Products":
        return <Product/>;
      case "Category":
        return <Category/>;
      case "Contactdetails":
        return< Contactdetails/>;
      case "Userdetails":
        return<Userdetails/>;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar-content">
        <h1>Sidebar Menu</h1>
        <ul>
          <li onClick={() => handleMenuClick("Logo")}>Logo</li>
          <li onClick={()=> handleMenuClick("Slider")}>Slider</li>
          <li onClick={() => handleMenuClick("Category")}>Category</li>
          <li onClick={() => handleMenuClick("Products")}>Products</li>
          <li onClick={() => handleMenuClick("Contactdetails")}>Contactdetails</li>
          <li onClick={() => handleMenuClick("Userdetails")}>Userdetails</li>
          
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <div className="section1">
              <h2>Welcome to Dashboard</h2>
            </div>
            <div className="section2">
              <img src="" alt="Profile" />
              <h3>{name}</h3>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="main-content-display">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
