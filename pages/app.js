const { StepFunctions } = require("aws-sdk");
const cors = require("cors");
const express = require("express");

const app = express();
const { addOrUpdateCustomer } = require("./dynamo");

app.use(express.json());
app.use(cors());

//! above we are importing every module and function that is involved with the functions we will use

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/donate", async (req, res) => {
  console.log("donation called", req.body);
  const donation = req.body;
  try {
    const newCustomer = await addOrUpdateCustomer(donation);
    res.json(newCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
