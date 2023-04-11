import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://adriaanbornman1:admin@cluster0.2t7irr1.mongodb.net/?retryWrites=true&w=majority"
);

Meteor.startup(() => {
  // Connect to MongoDB Atlas cluster
  client.connect((err) => {
    if (err) throw err;
    console.log("Connected to MongoDB Atlas");
  });
});
