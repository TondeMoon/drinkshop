import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

export const NavBar = () => {
  const history = useHistory();

  return (
    <div>
      <div className="navbar">
        <button
          className="button-navbar"
          onClick={() => history.push('/checkout')}
        >
          Cart
        </button>
        <button className="button-navbar" onClick={() => history.push('/')}>
          Shop
        </button>
      </div>
    </div>
  );
};
