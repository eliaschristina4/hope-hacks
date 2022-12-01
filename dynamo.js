const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyID: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "client-saves";

const getDocuments = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const documents = await dynamoClient.scan(params).promise();
  console.log(documents);
  return documents;
};

const getDocumentById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};

const addOrUpdateDocument = async (document) => {
  const params = {
    TableName: TABLE_NAME,
    Item: document,
  };
  return await dynamoClient.put(params).promise();
};

const deleteDocument = async (id) => {
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
  getDocuments,
  getDocumentById,
  addOrUpdateDocument,
  deleteDocument,
};
