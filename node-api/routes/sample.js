const express = require('express');
const router = express.Router();
const packageJson = require('../package');



router.get('/', function(req, res, next) {  
  res.send("HELLO WORLD");
});

router.get('/sample', function(req, res, next) {
  let sampleData = {
    Name : "Tonmanna",
    FullName : "Worawut Boontan",
    Version : packageJson.version
  }
  res.send(sampleData);
});

module.exports = router;
