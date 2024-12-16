import React from "react";
import './Dashboard.css';

function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="sidebar-content">
                <h1>Sidebar Menu</h1>
                <ul>
                    <li>Logo</li>
                    <li>Products</li>
                    <li>Category</li>
                </ul>
            </div>
            <div className="main-container">
                <header className="header">
                    <div className="header-container">
                        <div className="section1"><h2>Welcome to Dashboard</h2></div>
                        <div className="section2">
                        <img src="" alt="Profile picture"/>
                        <h3>Guest..</h3>
                        </div>
                    </div>
                </header>
                <main className="main-content-display">
                    <h1>Main Content.... display here</h1>
                </main>
            </div>
        </div>
    )
};
export default Dashboard;