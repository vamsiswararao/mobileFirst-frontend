import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Action/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const {token} = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    history('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>Star Wars App</h1>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {token ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
