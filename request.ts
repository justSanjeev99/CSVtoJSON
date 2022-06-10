const axios = require('axios')
const fs = require("fs");
const { parse } = require("csv-parse");
const CSVToJSON = require('csvtojson');

fs.createReadStream("./Customer.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
    console.log(row[0]);
let data =  { "name.firstname" : row[0],
    "name.lastname"  : row[1],
    "userName"  : row[2],
    "phone"     : row[3],
    "email"     : row[4],
    "password"  : row[5]
  }
    const options = {
    headers : { 
    'Content-Type': 'application/json',
    'x-encrypted-key':'625eb5a345a967b0ed7b5418'}
};

axios.post('https://lirs.dev.app.nipige.com/cap/users/customer', data, options)
  .then((res) => {
   console.log("RESPONSE ==== : ", res);
 })
 .catch((err) => {
   console.log("ERROR: ====", err);
 })

  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
