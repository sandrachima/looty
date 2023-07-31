import React from "react";
import { FaSearch } from "react-icons/fa";


function Hero () {
    return (
<div className="hero-section">
 <div className="hero">
<li className="hero-li">GENERAL</li>
<li className="hero-list">AFFILATES</li>
<li className="hero-list">REQUEST</li> 
</div>
<div className="hero-search">
<input type="text"id ='item-search'
placeholder="search for User via name or email" 

/>
 

<FaSearch className="fasearch" color="white"/>
</div>
</div>


    )
}

export default Hero;