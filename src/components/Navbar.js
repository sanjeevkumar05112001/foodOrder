import React from 'react';
import '../styles/Navbar.css'
const Navbar = ({setShow,size}) => {
    return ( 
      <nav>
          <div className="nav_box">
              <span className="my_shop" onClick={()=>setShow(true)}>AMMA'S HOTEL</span>
              <div className="cart" onClick={()=>setShow(false)}>
                  <span>
                  <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>{size}</span>
              </div>
          </div>
      </nav>
    );
}
 
export default Navbar;