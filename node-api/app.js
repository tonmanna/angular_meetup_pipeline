const express = require('express');
const http = require("http");
const path = require('path');
const cors = require('cors');
const { join } = require('path');

const sampleRouter = require('./routes/sample');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sample', sampleRouter);

const DIST_FOLDER = join(process.cwd(), '../dist');
const DIST_PATH = join(DIST_FOLDER, 'browser');
// Set the engine

const ngExpressEngine = require('./ssr');    
app.engine('html', (_, options, callback) => ngExpressEngine(options,callback));
app.set('views', DIST_PATH);

app.set('view engine', 'html');
app.use('/', express.static('../dist/browser', {
    index: false
}));

app.get('*', (req, res) => {
    res.render('index', {
        req,
        res
    });
});

var server = http.createServer(app);
server.listen(3000);