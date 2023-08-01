//Connecting the databe
const { MongoClient } = require('mongodb');


const username = "sarju";
const password = "Sarju@2023";
const clusterUrl = "cluster0.qajd6dg.mongodb.net";
const databaseName = "issueTracker";
const options = "retryWrites=true&w=majority";
const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterUrl}/${databaseName}?${options}`;
let db;

async function connectToDatabase() {
  try {
    const mongoClient = await new MongoClient(uri).connect();

    console.log(' Successfully connected to MongoDB Atlas!');

    db = mongoClient.db('issueTracker');

  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    throw error;
  }
}

function getDbConnection() {
  if (!db) {
    throw new Error('MongoDB connection not established. Call connectToDatabase() first.');
  }
  return db;
}

module.exports = { connectToDatabase, getDbConnection };
