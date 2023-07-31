import React from "react";
import { FaBars, FaBell, FaCog, FaEnvelope, FaSearch} from "react-icons/fa";
import logo from './Logo.svg';
 


function Navbar () {
   return (

<nav>
<div className="search">


<FaBars className="menu" color="grey" size={22}/>  

<div className="input">
<input type="text" 
placeholder =  
"search for product & artist" className="input"
/>
</div>

<div className="search-icon">
<FaSearch className ="icon1" 
size={12} color="white" />
</div> 

<div className="logo-img">
<img src={logo} alt="svg.logo" fill = "red"
style={{height : 70, width:70 }} />
</div>

<div className="nav-icons">
<FaCog  color="gray" size={15}/>
<FaBell color="gray" size={15}/>
<FaEnvelope color="gray"size={15} />
<div className="nav-img">
<img src="spiderman.png"  alt ='spiderman' className="img"
 height={26} width={29} /></div>
 </div>
<h5 className="nav-text">LiqAir Studio</h5>



</div>
</nav>

 );
}

export default Navbar;