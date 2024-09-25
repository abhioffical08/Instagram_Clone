import React, { useState } from "react";
import "./Signup.css"; // Assuming you have your CSS file here
import instaLogo from "../assets/instaLogo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import playStore from "../assets/playStore.png";
import getMicrosoft from "../assets/getMicrosoft.png";
import phoneImage from "../assets/IG.jpeg";

const Signup = () => {
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password"); // Default input type is password
  const [passwordIcon, setPasswordIcon] = useState("bx bx-show"); // Default icon is 'show'
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateEmail = (Email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(Email);
  };

  const validatePassword = (Password) => {
    return Password.length >= 8; // Example: Password should be at least 8 characters
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!Email || !FullName || !Username || !Password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(Email)) {
      setError("Please enter a valid Email address");
      return;
    }

    if (!validatePassword(Password)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        Email,
        FullName,  
        Username,
        Password
      });
      setSuccess(response.data.message);
      navigate('/Login');
      setEmail('');
      setFullName('');
      setUsername('');
      setPassword('');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    if (passwordType === "password") {
      setPasswordType("text"); // Show the password
      setPasswordIcon("bx bx-hide"); // Change icon to 'hide'
    } else {
      setPasswordType("password"); // Hide the password
      setPasswordIcon("bx bx-show"); // Change icon back to 'show'
    }
  };

  return (
    <main id="Signup">
      <img src={phoneImage} alt="Phone" className="phoneImg" />
      <div className="form-div-Signup">
        <form onSubmit={handleSubmit}>
          <img className="instaLogo" src={instaLogo} alt="Instagram Logo" />
          <div className="info-div">
            <p className="info">Sign up to see photos and videos</p>
            <p className="info">from your friends.</p>
          </div>

          <a href="https://www.facebook.com/" className="fb-login-r">
            <i className="bx bxl-facebook-square"></i>Log in with Facebook
          </a>

          <input
            type="text"
            value={Email}
            className="input"
            placeholder="Mobile Number or Email"
            onChange={(e) => setEmail(e.target.value)} // onChange added
            disabled={loading}
          />
          <input
            type="text"
            value={FullName}
            className="input"
            onChange={(e) => setFullName(e.target.value)} // Fixed onChange to setFullName
            placeholder="Full Name"
            disabled={loading}
          />
          <input
            type="text"
            value={Username}
            className="input"
            onChange={(e) => setUsername(e.target.value)} // onChange added for Username
            placeholder="Username"
            disabled={loading}
          />

          <div className="password-container">
            <input
              type={passwordType}
              value={Password}
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} // onChange added
              disabled={loading}
            />
            <i className={passwordIcon} onClick={togglePasswordVisibility}></i>{" "}
            {/* Toggle icon */}
          </div>

          <div className="notes">
            <div id="p-1">
              <p>People who use our service may have uploaded your</p>
              <p>
                contact information to Instagram.<span>Learn More </span>
              </p>
            </div>

            <div id="p-2">
              <p>
                By signing up, you agree to our Terms ,<span> Privacy</span>
              </p>
              <p>
                <span>Policy </span> and <span>Cookies Policy.</span>
              </p>
            </div>
          </div>

          <button
            className="Signup-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>

        <div className="Log-in">
          <p>
            Have an account?{" "}
            <a href="/Login" className="sign-link">
              Log in
            </a>
          </p>
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

export default Signup;
