const express = require('express');
const router = express.Router();
const packageJson = require('../../package');


router.get('/', function(req, res, next) {
  let sampleData = {
    name : "Tonmanna",
    fullName : "Worawut Boontan",
    version : packageJson.version
  }
  res.send(sampleData);
});

module.exports = router;
