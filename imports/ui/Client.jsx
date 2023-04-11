import React, { useEffect, useState } from "react";
import AddClient from "./AddClient";
import Reports from "./Reports";
import { ClientsCollection } from "../api/ClientsCollection";
import Projects from "./Projects";

export default function Client() {
  const [isShow, setIsShow] = useState(false);
  const [clients, setClients] = useState();
  const [clientName, setClientName] = useState();
  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  const [myData, setMyData] = useState([]);

  const handleClientsFind = () => {
    Meteor.call("clientsFind", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        setMyData(result);
      }
    });
  };

  useEffect(() => {
    handleClientsFind();
  }, []);

  const handleClientDelete = (e) => {
    let id = e.target.dataset.client;
    console.log(id);
    // clientsDelete;
    Meteor.call("clientsDelete", id, (error, result) => {
      console.log("in Meteor.call newCLient", id);
      if (error) {
        console.log(error);
      } else {
        console.log("Client removed successfully!");
      }
    });
  };

  return (
    <>
      {isShow ? (
        <AddClient
          isShow={isShow}
          setIsShow={setIsShow}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      ) : (
        <div className="h-screen flex flex-row-reverse items-center justify-center">
          <div className="flex flex-row-reverse"></div>
          <div className="client-body client display container mx-auto">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">All clients</h2>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleShow}
              >
                Add client
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {myData.map((client) => (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg border border-black p-5"
                  key={client._id}
                >
                  <div className="text-center">{client.companyName}</div>
                  <div className="text-center">
                    <h2>{client.manager}</h2>
                    <h2>{client.website}</h2>
                  </div>
                  <div className="text-center">{client.firstName}</div>
                  <div className="flex flex-row-reverse">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                      onClick={handleClientDelete}
                      data-client={client._id}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Projects clientName={clientName} />
      {/* <Reports myData={myData} /> */}
    </>
  );
}
