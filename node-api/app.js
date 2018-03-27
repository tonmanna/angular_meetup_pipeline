const express = require('express');
const http = require("http");
const path = require('path');
const cors = require('cors');

const sampleRouter = require('./routes/sample');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sampleRouter);

var server = http.createServer(app);
server.listen(3000);