const CSVToJSON = require('csvtojson');
const axios = require('axios')


// convert users.csv file to JSON array
CSVToJSON().fromFile('Customer.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        //console.log(users);
       // console.log(users[0])
        
console.log(users);
//console.log(users[0])
//const  array = users;
//console.log(array)
const jsonCustomer = users.map(item => JSON.stringify(item))
console.log(jsonCustomer);
console.log(jsonCustomer[1]);

 const options = {
    headers : { 
    'Content-Type': 'application/json',
    'x-encrypted-key':'625eb5a345a967b0ed7b5418'}
};

axios.post('https://lirs.dev.app.nipige.com/cap/users/customer', jsonCustomer[6], options)
  .then((res) => {
   console.log("RESPONSE ==== : ", res);
   console.log(res.data);
 })
 .catch((err) => {
   console.log("ERROR: ====", err);
 })

  
    }).catch(err => {
        // log error if any
        console.log(err);
    });

