const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mysql = require("mysql2");
const port = process.env.PORT;
const parser = require("body-parser");

const corsOptions = {
    "origin" :  "*",
    "method" : "GET,HEAD,PUT,PATCH,POST,DELETE",
    "allowedHeaders" : ['Content-Type', 'Authorization'],
};

app.use('/api/v1', cors(corsOptions), parser.json(), parser.urlencoded({extended : true}));

app.listen(port, () => {console.log(`server run on port ${port}`)});