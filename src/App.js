import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Layout from "./components/Home/Layout";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Admin from "./components/Users/Admin";
import Editor from "./components/Users/Editor";
import Lounge from "./components/Users/Lounge";
import Linkpage from "./components/Home/Linkpage";
import Missing from "./components/Auth/Missing";
import Unauthorized from "./components/Auth/Unauthorized";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* {Public Routes} */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* {Private Routes} */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="feed" element={<Feed />} />
        <Route path="editor" element={<Editor />} />
        <Route path="lounge" element={<Lounge />} />
        <Route path="link" element={<Linkpage />} />
        {/* {Admin Routes} */}
        <Route path="admin" element={<Admin />} />
        {/* {Missing Routes} */}

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
