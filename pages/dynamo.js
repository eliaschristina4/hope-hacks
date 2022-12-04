const AWS = require("aws-sdk");
require("dotenv").config();
const formJSON = require("./donations");
AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAQ7G4MIBQEQEZTLHQ",
  secretAccessKey: "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",
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "client-saves";
const getCustomers = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const customers = await dynamoClient.scan(params).promise();
  return customers;
};

const getCustomerById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};

const addOrUpdateCustomer = async (customer) => {
  const params = {
    TableName: TABLE_NAME,
    Item: customer,
  };
  return await dynamoClient.put(params).promise();
};

const deleteCustomer = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

module.exports = {
  dynamoClient,
  getCustomers,
  getCustomerById,
  addOrUpdateCustomer,
  deleteCustomer,
};

const test1 = {
  id: "1",
  fName: "Jack",
  lName: "Gurling",
  email: "email@gmail.com",
  Amount: "100",
  occurance: "One-Time",
  optIns: ["Email Receipt", "Anonymous", "Email List"],
};
addOrUpdateCustomer(formJSON);
