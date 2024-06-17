import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast} from "react-toastify"
import './index.css';
import { signupUser } from '../../Action/authActions';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token,error,loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({ username, email, password }));
  };

useEffect(()=>{
  if (token) {
    toast("signup successful",{autoClose:1000})
    navigate('/');
  }
},[token,navigate])

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
           {error && <p className="error">{error}</p>}
          <button type="submit" className="signup-button" >
          {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <div className="links">
            <a href="/Login">Already have an account? Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
