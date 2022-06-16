// const axios = require('axios')
// const fs = require("fs");
// const { parse } = require("csv-parse");
// const CSVToJSON = require('csvtojson');

// //const users = [];
// fs.createReadStream("./Customer.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//    // console.log(row);
//     //console.log(row[0]);

//     let data =  {
//     "name": {
//         "first": row[0],
//         "last": row[1]
//     },
//     "authentication": {
//         "securityQuestions": {
//         "question": row[2],
//         "answer": row[3]
//         },
//     "userName": row[4],
//     "phone": row[5],
//     "email": row[6],
//     "password": row[7]
//     }
// }
//   //users.push(row)
    
//     const options = {
//     headers : { 
//     'Content-Type': 'application/json',
//     'x-encrypted-key':'625eb5a345a967b0ed7b5418'}
// };

// axios.post('https://lirs.dev.app.nipige.com/cap/users/customer', data , options)
//   .then((res) => {
//    console.log("RESPONSE ==== : ", res);
//  })
//  .catch((err) => {
//   console.log("ERROR: ====", err);
//  })
  
// console.log(data[1]);

//   })
//   .on("end", function () {
//     console.log("finished");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
