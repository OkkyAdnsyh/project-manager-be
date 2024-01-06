const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mysql = require("mysql2");
const port = process.env.PORT;

app.listen(port, () => {console.log(`server run on port ${port}`)});