const express = require('express');
// const knex = require('knex')({
//     client: 'better-sqlite3',
//     useNullAsDefault: true,
//     connection: {
//         filename: './database.sqlite'
//     }
// });
const knex = require('knex')(require('./knexfile').development);

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/new", (req,res) => {
    let name = req.query.name;
    knex('pizza').insert({type: name})
    .then(() =>res.status(200).send("Success!"))
    .catch(err => {res.status(500).send("Error: "+err)});
});

app.get("/", (req,res) => {
    knex('pizza').select('*')
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send("Error: "+err));
});

app.listen(PORT, async () => {
    console.log("Server listening on *:" + PORT);
});