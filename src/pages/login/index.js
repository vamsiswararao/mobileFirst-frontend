import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Action/authActions';
import { toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token,loading,error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

useEffect(()=>{
  if (token) {
      toast("login successful",{autoClose:1000})
      navigate('/');
  }
  },[token,navigate])

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="signin-button" >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <div className="links">
            <a href="/forgot-password">Forgot password?</a> <br/>
            <a href="/signup">Don't have an account? Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
