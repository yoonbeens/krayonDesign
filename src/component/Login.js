import React from "react";
import "../resource/Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="id" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="password" required />
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default Login;
