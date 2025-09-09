import React from 'react';
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo">ABU DHABI CUSTOMS</div>
        <h1>Amazing stuff are waiting for you.</h1>
        <p>
          Brilliant AI platform! Saves your hours with its smart automation —
          simple for beginners yet powerful for pros. Highly recommended!
        </p>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>Welcome to Abu Dhabi Customs</h2>
          <h3>AI Operations Center</h3>

          <form>
            <label>Account ID</label>
            <input type="email" placeholder="email@adcustoms.gov.ae" />

            <label>Password</label>
            <input type="password" placeholder="Enter Your password" />

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Statement</a>
          </div>

          <p className="copyright">
            © 2025 Abu Dhabi Government. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;