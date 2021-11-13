import React, { useState } from "react";
import "../SaSS/login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("changing event", event.target.value, event.target.id);
    //Here we initializing LoginInfo state with an object that already contains properties.
    // setFullname((prevalue) => {
    //     return {
    //       ...prevalue,   // Spread Operator
    //       [name]: value
    //     }
    setLoginInfo({...loginInfo, [event.target.id]: event.target.value });
    //console.log(loginInfo);
  };

  const handleSubmit = (event) => {
    console.log("Form submitted", loginInfo);
    event.preventDefault();
  };
  return (
    <div className="center-item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={loginInfo.username}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={loginInfo.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          // disabled={!loginInfo.username || !loginInfo.password}
        >
          Login
        </button>
        <p>
          Not Registered ?<a href="#">Create account Now!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
