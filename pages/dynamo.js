const AWS = require("aws-sdk");
require("dotenv").config();
// const formJSON = require("./donations");
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

//? Above we are importing the modules that will be used as well as telling the functions what database to connect to

//? Below pulling the DynamoDB client module along with directing the code on what table to use
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "client-saves";
const getCustomers = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const customers = await dynamoClient.scan(params).promise();
  return customers;
};

//? This is the function that will be used by the table function to add the information to the database
const addOrUpdateCustomer = async (customer) => {
  const params = {
    TableName: TABLE_NAME,
    Item: customer,
  };
  return await dynamoClient.put(params).promise();
};

//? Here we are exporting the functions so that they can be utilized in app.js for CRUD functions
module.exports = {
  dynamoClient,
  getCustomers,
  addOrUpdateCustomer,
};
