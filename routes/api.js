var express = require('express');
var router = express.Router();

var requestMap = {"Ping":"OK",
  "Name":"Juan Bonfante",
  "Years":"+12",
  "Referrer":"Addison Search",
  "Position":"Software Engineer",
  "Status":"US Citizen",
  "Phone":"773-679-4909",
  "Resume":"http://bit.ly/2gO9Y9j",
  "Source":"https://github.com/jbonfante/brt-resume-api",
  "Degree":"None",
  "Puzzle":"Not Sure yet",
  "Email+Address":"juan.bonfante@gmail.com"}

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var responseText = requestMap[req.query.q] || "nothing";
  res.send(responseText);
});

module.exports = router;
