const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/api/v1/users", (req, res) => {
  res.send([
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "bhavik"
    }
  ]);
})

exports.expApi = functions.https.onRequest(app);