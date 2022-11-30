// express server, CRUD stuff

const express = require('express');
const cors = require('cors'); // cors module (npm i cors) allows you to make api calls from FE to BE
const axios = require("axios");
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5200;

const app = express();
dotenv.config();

app.use(cors()); // so when we have an incoming API, it won't block it & we'll be able to send data to BE
app.use(express.json()); // so we'll be able to send it in json format
app.use(express.urlencoded({ extended : false })); // what does this do?
app.use(express.static('pages')) // serves up all the files in that directory



// create
// app.post('/insert', (request, response) => {
//     // console.log(request.body);
//     const { name } = request.body;
//     const db = dbService.getDbServiceInstance();

//     const result = db.insertNewName(name);

//     result.then(data => response.json({ data : data }))
//     .catch( err => console.log(err));
// });



// read
// app.get('/getAll', (request, response) => {
//     const db = dbService.getDbServiceInstance();

//     const result = db.getAllData();

//     result.then(data => response.json({ data : data}))
//     .catch(err => console.log(err));
// });



// update
// app.patch('/update', (request, response) => {
//     const { id, name } = request.body;
//     const db = dbService.getDbServiceInstance();

//     const result = db.updateNameById(id, name);

//     result.then(data => response.json({ success : data }))
//     .catch(err => console.log(err));
// });



// delete
// app.delete('/delete/:id', (request, response) => {
//     const { id } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.deleteRowById(id);

//     result.then(data => response.json({ success : data}))
//     .catch(err => console.log(err));
// });



// search (get request)
// app.get('/search/:name', (request, response) => {
//     const { name } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.searchByName(name);
    
//     result
//     .then(data => response.json({data : data}))
//     .catch(err => console.log(err));
// })

// start server
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});