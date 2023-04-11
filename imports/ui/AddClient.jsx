import React, { useState, useEffect } from "react";
import { Meteor } from "meteor/meteor";
import { ClientsCollection } from "../api/ClientsCollection";

export default function AddClient() {
  const [newClient, setNewClient] = useState({
    companyName: "",
    website: "",
    manager: "",
    firstName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call("clientsInsert", newClient, (error, result) => {
      console.log("in Meteor.call newCLient", newClient);
      if (error) {
        console.log(error);
      } else {
        console.log("Client added successfully!");
        console.log(result);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-addClient max-w-sm mx-auto my-4"
    >
      <div className="mb-4">
        <label
          htmlFor="companyName"
          className="block mb-1 font-medium text-gray-700"
        >
          Client Company Name:
        </label>
        <input
          type="text"
          id="companyName"
          required
          name="companyName"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setNewClient((prevClient) => ({
              ...prevClient,
              companyName: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="companyWebsite"
          className="block mb-1 font-medium text-gray-700"
        >
          Client Website:
        </label>
        <input
          type="text"
          id="companyWebsite"
          required
          name="companyWebsite"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setNewClient((prevClient) => ({
              ...prevClient,
              website: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="manager"
          className="block mb-1 font-medium text-gray-700"
        >
          Client Manager:
        </label>
        <select
          id="manager"
          name="manager"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setNewClient((prevClient) => ({
              ...prevClient,
              manager: e.target.value,
            }))
          }
        >
          <option>Choose a name</option>
          <option>Adriaan</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-1 font-medium text-gray-700"
        >
          Client First Name:
        </label>
        <input
          type="text"
          id="firstName"
          required
          name="firstName"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setNewClient((prevClient) => ({
              ...prevClient,
              firstName: e.target.value,
            }))
          }
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add client
      </button>
    </form>
  );
}
