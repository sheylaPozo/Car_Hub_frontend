import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/image.png';

const SideNavb = () => (
  <div className="sideNav">
    <div className="logo_div">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <nav>
      <ul className="nav_ul">
        <li className="nav_li selected_nav" id="login_Navlink">
          <NavLink className="nav_Navlink" to="/login">Login</NavLink>
        </li>
        <li className="nav_li" id="signup_Navlink">
          <NavLink className="nav_Navlink" to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
    <div />
    <div />
  </div>
);

export default SideNavb;
