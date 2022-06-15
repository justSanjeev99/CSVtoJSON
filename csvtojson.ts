
const CSVToJSON = require('csvtojson');
const axios = require('axios')


// convert users.csv file to JSON array
CSVToJSON().fromFile('Customer.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        //console.log(users);
       
        
//console.log(users);
//console.log(users[0])

const jsonCustomer = users.map(item => JSON.stringify(item))
//console.log(jsonCustomer);
//console.log(jsonCustomer[1]);
 
const payload = jsonCustomer;
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  console.log(payload)
 const options = {
    headers : { 
    'Content-Type': 'application/json',
    'x-encrypted-key':'62726568a2e7d713d89e4357'}
};

for (let i = 0; i < payload.length; i++) {
 axios.post('https://dev.app.tekatime.com/cap/users/customer',payload[i] , options)
  .then((res) => {
  
   console.log("RESPONSE ==== : ", res);
   console.log(res.data);
   
 })
 .catch((err) => {
   console.log("ERROR: ====", err);
 })

  }
    })
    .catch(err => {
        // log error if any
        console.log(err);
    });