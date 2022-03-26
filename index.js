const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { setFlagsFromString } = require('v8');
const knex = require('knex')(require('./knexfile').development);

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.resolve(__dirname, 'dist')));

app.get("/api/products", (req, res) => {
    knex.select("*").from("products")
        .then((data) => res.status(200).send(data))
        .catch(err => res.status(500).send("Error: " + err));
});

app.get("/api/product/:id/details", (req, res) => {
    knex.select('*').from('products').where({
        id: req.params.id
    }).first()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send("Error: " + err));
});

app.get("/api/product/:id", (req,res) => {
    knex.select('*').from('products').where({
        id: req.params.id
    }).first()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send("Error: "+err));
});
app.get("/api/product/:id", (req, res) => {
    knex.select('*').from('products').where({
        id: req.params.id
    })
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send("Error: " + err));
});

app.post("/api/product", (req, res) => {
    let data = req.body;

    knex.table('products').insert(data)
        .then(() => res.status(200).send("Success"))
        .catch(err => res.status(500).send("Error: " + err));
});

app.delete("/api/product/:id", (req, res) => {
    knex.table('products').where('id', req.params.id).del()
        .then(() => res.status(200).send("Success"))
        .catch(err => res.status(500).send("Error: " + err));
});



app.listen(PORT, async () => {
    console.log("Server listening on *:" + PORT);
});