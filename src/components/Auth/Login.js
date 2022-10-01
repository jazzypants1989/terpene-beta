import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../app/axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const LOGIN_URL = "/login";
  const { setAuth } = useAuth();
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const token = res.data.token;
      const roles = res.data.roles;
      setEmail("");
      setPassword("");
      setSuccess(true);
      setAuth({ email, password, token, roles });
    } catch (err) {
      console.log(err);
      setErrMsg(err.response.data.message);
      errRef.current.focus();
    }
  };

  return (
    <div className="register">
      {success ? (
        <section>
          <h1>Success</h1>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input
              placeholder="email"
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              placeholder="password"
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button>Submit</button>
          </form>
          <p>
            Need an acccount? <Link to="/register">Register</Link>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
