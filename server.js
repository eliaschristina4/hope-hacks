// // only installed node/express so far, nothing else like axios or uuid
// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// app.use(express.json());

// const PORT = process.env.PORT || 4000;

// app.get("/ping", (_, res) => {
//   res.json({ status: "ok", message: "pong" });
// });

// app.listen(PORT, () => console.log(`? server running on ${PORT}`));

// // MySQL Connection Configuration
// const connectionConfig = {
//   host: "localhost",
//   user: "devuser",
//   password: "password",
//   database: "Blockbuster",
// };
// // Create a connection driver
// const connetion = mysql.createConnection(connectionConfig);
// // Connect to the MySQL Server
// connetion.connect((err) => {
//   if (err) {
//     console.log("ERROR:: " + err);
//     return;
//   }

//   console.log(`✅ database connection successful!`);
// });
