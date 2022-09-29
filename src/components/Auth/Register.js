import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        userName: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      },
      withCredentials: true,
      url: "http://localhost:2121/signup",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={register}>Submit</button>
    </div>
  );
};
export default Register;
