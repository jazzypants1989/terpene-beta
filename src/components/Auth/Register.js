import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "../../app/axios";

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const REGISTER_URL = "/signup";

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)$/;

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === confirmPassword;
    setValidConfirmPassword(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, confirmPassword, email]);

  const register = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry!!! GO AWAY, YA JERK!");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          userName: username,
          password: password,
          email: email,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
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
          <h1>Hooray! You are now registered.</h1>
          <p>
            <Link to="/login">Click here to login</Link>
          </p>
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
          <h1>Register</h1>
          <form onSubmit={register}>
            <label htmlFor="username">
              Username
              <span className={validName ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validName || !username ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Username must be between 4 and 20 characters and
              must start with a letter. It can only contain letters, numbers,
              dashes, and underscores, hyphens are allowed.
            </p>
            <label htmlFor="email">
              Email
              <span className={validEmail ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validEmail || !email ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              placeholder="email"
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              id="uidnote"
              className={
                userFocus && email && !validEmail ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> Email must be a valid email address.
            </p>
            <label htmlFor="password">
              Password
              <span className={validPassword ? "valid" : "hide"}>
                <FaCheck />
              </span>
              <span className={validPassword || !password ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              placeholder="password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> 8 to 24 characters. Must include uppercase and
              lowercase letters, a number and a special character. Allowed
              special characters: <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirmPassword">
              Confirm Password
              <span
                className={
                  validConfirmPassword && confirmPassword ? "valid" : "hide"
                }
              >
                <FaCheck />
              </span>
              <span
                className={
                  validConfirmPassword || !confirmPassword ? "hide" : "invalid"
                }
              >
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              required
              aria-invalid={validConfirmPassword ? "false" : "true"}
              aria-describedby="confirmnote"
              placeholder="confirm password"
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              disabled={
                !(
                  validName &&
                  validPassword &&
                  validConfirmPassword &&
                  validEmail
                )
              }
            >
              Submit
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};
export default Register;
