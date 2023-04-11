import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import AddClient from "./AddClient";
import Client from "./Client";
import Projects from "./Projects";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};
