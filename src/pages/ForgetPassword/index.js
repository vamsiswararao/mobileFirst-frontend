import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { forgotPassword } from '../../Action/authActions';
import './index.css';
import PopUp from '../PopUp';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [popup, setPopup]=useState(false)
  const dispatch = useDispatch();
  const { loading, error, message,status } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }));
  };

  useEffect(()=>{
    if(status){
      setPopup(true)
    }
  },[status])


  const handleClose=()=>{
    setPopup(false)
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
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
          {error && <p className="error">{error}</p>}
          {message && <p className="message">{message}</p>}
          <button type="submit" className="forgot-password-button" >
            {loading ? 'Loading...' : 'Send Reset Link'}
          </button>
          <div className="links">
            <a href="/login">Back to Sign In</a>
          </div>
        </form>
      </div>
      <PopUp popup={popup} onClose={handleClose}/>
    </div>
  );
};

export default ForgotPassword;
