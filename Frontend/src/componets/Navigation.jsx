import React from "react";
import './navbar.css';
import logo from '../images/logo.png'; 
import{Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    
                        <img src={logo} alt="Second Motherland Logo" /><span>SECONDMOTHERLAND.ORG</span>
                      
                    
                    
                </li>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Matching</a></li>
                <Link to='/adddetails'> <li><a href="#about">AboutUs</a></li></Link>
                <li>
                    <a href="#about">
                       <Link to='/login'> <button class="btn">SignIn</button></Link>
                    </a>
                    <a href="#about">
                    <Link to='/signup'>  <button class="btn">SignUp</button></Link>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
