import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/style.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Login </button>
          {err && <small>Something went wrong!!</small>}
        </form>
        <p>
          You don't have an account?{" "}
          <Link style={{ textDecoration: "none", fontWeight: 500 }} to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
