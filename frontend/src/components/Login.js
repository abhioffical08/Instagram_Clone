import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have your CSS file here
import instaLogo from '../assets/instaLogo.png';
import playStore from '../assets/playStore.png';
import getMicrosoft from '../assets/getMicrosoft.png';
import phoneImage from '../assets/IG.jpeg';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState('password'); // Default input type is password
  const [passwordIcon, setPasswordIcon] = useState('bx bx-show'); // Default icon is 'show'


  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!Email || !Password) {
      setMessage('Please fill in all fields');
      return;
  }

  setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                Email,
                Password,
            });

            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token);
            navigate('/Home');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
            // Clear the message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
        }

  };
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text'); // Show the password
      setPasswordIcon('bx bx-hide'); // Change icon to 'hide'
    } else {
      setPasswordType('password'); // Hide the password
      setPasswordIcon('bx bx-show'); // Change icon back to 'show'
    }
  };

  return (
    <main>
      <img src={phoneImage} alt="Phone" className="phoneImg" />
      <div className="form-div">
        <form onSubmit={handleLogin}>
          <img className="instaLogo" src={instaLogo} alt="Instagram Logo" />
          <input
            type="text"
            className="input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Phone number, username, or email"
            required
          />
          <div className="password-container">
            <input
              type={passwordType}
              className="input"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <i className={passwordIcon} onClick={togglePasswordVisibility}></i> {/* Toggle icon */}
          </div>
          <button className="login-btn" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
          </button>
          <p id="or">or</p>
          <a href="https://www.facebook.com/" className="fb-login">
            <i className="bx bxl-facebook-square"></i>Log in with Facebook
          </a>
          <a href='/forgot-password' id='FP'>
          <p >Forgot password?</p>
          </a>
          {message && <p className="message">{message}</p>}
        </form>
        <div className="sign-up">
          <p>Don't have an account? 
            <a href="/signup" className="sign-link">Sign up</a></p>
        </div>
        <div className="get-app">
          <p>Get the app</p>
          <div className="store">
            <img id="play" src={playStore} alt="Play Store" />
            <img id="microsoft" src={getMicrosoft} alt="Microsoft Store" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
