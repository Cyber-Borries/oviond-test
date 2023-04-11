// import { Meteor } from "meteor/meteor";
import { ClientsCollection } from "../imports/api/ClientsCollection.js";
import { ReportsCollection } from "../imports/api/ReportsCollection.js";
import "./facebook.js";
import "./db.js";
// import "./methods";

Meteor.methods({
  clientsInsert: function (newClient) {
    ClientsCollection.insert(newClient);
  },
});
Meteor.methods({
  clientsDelete: function (clientToDelete) {
    console.log("clientToDelete", clientToDelete);
    ClientsCollection.remove({ _id: clientToDelete });
  },
});
Meteor.methods({
  clientsFind: function (myData) {
    myData = ClientsCollection.find().fetch();
    return myData;
  },
});
Meteor.methods({
  insertReportData: function (reportData) {
    ReportsCollection.insert(reportData);
    console.log("insertReportData method", reportData);
    // ReportsCollection.find().fetch();
  },
});
Meteor.methods({
  removeReportData: function (deleteReport) {
    ReportsCollection.remove({ _id: deleteReport });
    console.log("insertReportData method", deleteReport);
    // ReportsCollection.find().fetch();
  },
});
Meteor.methods({
  fetchReportData: function (reportData) {
    myData = ReportsCollection.find().fetch();
    return myData;
  },
});

Meteor.startup(() => {
  ClientsCollection.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
  });
  ReportsCollection.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
  });
});

// mongodb+srv://adriaanbornman1:admin@cluster0.2t7irr1.mongodb.net/?retryWrites=true&w=majority
