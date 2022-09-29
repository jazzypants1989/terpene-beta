import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Home/Layout";
import Home from "./components/Home/Home";
import PagesList from "./components/Pages/PagesList";
import Pages from "./components/Pages/Pages";
import Page from "./components/Pages/Page/Page";
import Form from "./components/Form/Form";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Admin from "./components/Home/Admin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
