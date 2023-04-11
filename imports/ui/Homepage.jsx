import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./NavBar";

const Homepage = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
    </div>
  );
};

export default Homepage;
