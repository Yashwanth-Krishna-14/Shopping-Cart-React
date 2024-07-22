import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>

      <div className="topline"></div>
      
      <div className="navbar">
      
        <div className="links1">
        <div className="logo">
        <Link to="/">Belle Bloom💮 </Link>
      
        </div>
       
        </div>
        
        <div className="navbar1">
          <h1 className="desc">Belle Bloom's<span className="Pink"> Pink</span> Sale is Now Live!</h1>
        <div className="links">
        
        <Link to="/cart">
        <div className="cartBox">
        <ShoppingCart size={32} className="hi"/>
         </div>
         
        </Link>
        </div>
      </div>
    </div>
    </div>
  
  );
};
