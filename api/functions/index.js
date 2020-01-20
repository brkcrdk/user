const { https } = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const gqlServer = require("./graphql/server");
const server = gqlServer();

exports.api = https.onRequest(server);
