import { Meteor } from "meteor/meteor";
import { ClientsCollection } from "/imports/api/ClientsCollection";
import { ReportsCollection } from "../imports/api/ReportsCollection";

Meteor.methods({
  clientsInsert: function (newClient) {
    ClientsCollection.insert(newClient);
  },
});
// Meteor.methods({
//   clientsDelete: function (newClient) {
//     let clientToDelete = newClient._id;
//     console.log("clientToDelete", clientToDelete);
//     ClientsCollection.remove({ _id: clientToDelete });
//   },
// });
Meteor.methods({
  clientsFind: function (myData) {
    myData = ClientsCollection.find().fetch();
    console.log("end of clientsFind");
    return myData;
  },
});
Meteor.methods({
  insertReportData: function (reportData) {
    ReportsCollection.insert(reportData);
    ReportsCollection.find().fetch();
  },
});

Meteor.methods({
  fetchReportData: function (reportData) {
    myData = ReportsCollection.find().fetch();
    return myData;
  },
});

export default Meteor.methods;
