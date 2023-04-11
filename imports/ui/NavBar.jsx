import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              exact
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/add-client"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              Add Client
            </NavLink>
            <NavLink
              to="/clients"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              Clients
            </NavLink>
            <NavLink
              to="/projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
