import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios({
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:2121/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:2121/users",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Submit</button>

      <button onClick={getUser}>Get User</button>
    </div>
  );
}

export default Login;
