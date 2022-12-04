const express = require("express");
const app = express();
const {
  addOrUpdateCustomerer,
  getCustomerers,
  deleteCustomerer,
  getCustomererById,
} = require("./dynamo");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/customerers", async (req, res) => {
  try {
    const customerers = await getCustomerers();
    res.json(customerers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.get("/customerers/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const customerer = await getCustomererById(id);
    res.json(customerer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.post("/customerers", async (req, res) => {
  const customerer = req.body;
  try {
    const newCustomerer = await addOrUpdateCustomerer(customerer);
    res.json(newCustomerer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.put("/customerers/:id", async (req, res) => {
  const customerer = req.body;
  const { id } = req.params;
  customerer.id = id;
  try {
    const newCustomerer = await addOrUpdateCustomerer(customerer);
    res.json(newCustomerer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.delete("/customerers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await deleteCustomerer(id));
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port port`);
});
