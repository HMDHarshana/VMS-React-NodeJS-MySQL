import React from "react";
import './LoginNav.css';
import logo from '../images/logo.png';
import profile from '../images/profile.png';

function LoginNavbar({ customerName }) {
    return (
        <div>
            <nav>
                <ul>
                    <li className="welcome-section">
                        <span className="welcome">Welcome {customerName}!</span>
                        <img src={logo} alt="Second Motherland Logo" className="logo" />
                        <span className="website-name">SECONDMOTHERLAND.ORG</span>
                    </li>
                    <li className="nav-links">
                        <a className="active" href="#home">Home</a>
                        <a href="#matching">Opportunity</a>
                        <a href="#about">About Us</a>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn">
                            <img src={profile} alt="profile" className="profile" />
                        </button>
                        <div className="dropdown-content">
                            <a href="#personal-details">Personal Details</a>
                            <a href="#create-project">Create new Project</a>
                            <a href="#review">Review</a>
                            <a href="#logout">Log Out</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LoginNavbar;
