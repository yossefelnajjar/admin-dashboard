import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Friends from "./pages/Friends";
import Files from "./pages/Files";
import Plans from "./pages/Plans";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Sidebar />
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/files" element={<Files />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  </>
);
