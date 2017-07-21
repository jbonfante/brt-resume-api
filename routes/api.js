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
  "Email Address":"juan.bonfante@gmail.com"};

let solvePuzzle = function(puzzle){
  let solve, a,b,c,d;
  [, solve, a, b, c, d] = puzzle.split('\n');

  let solution = ` ABCD
A=>>>
B<=<<
C<>=>
D<><=`;

  return solution;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  let responseText = "";
  console.log(req.query);
  let query = req.query.q;

  if (query == "Puzzle"){
   responseText = solvePuzzle(req.query.d)
  }
  else {
    responseText = requestMap[query] || "";
  }
  res.send(responseText);
});

module.exports = router;
