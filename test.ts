/*
const CSVToJSON = require('csvtojson');
const axios = require('axios')


// convert users.csv file to JSON array
CSVToJSON().fromFile('newcustomer.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        //console.log(users);
       
        
//console.log(users);
//console.log(users[0])

const jsonCustomer = users.map(item => JSON.stringify(item))
console.log(jsonCustomer);
console.log(jsonCustomer[1]);
 
const payload = jsonCustomer;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 console.log(payload)
 const options = {
    headers : { 
    'Content-Type': 'application/json',
    'x-encrypted-key':'62726568a2e7d713d89e4357'}
     //'Authorization': `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9}` }

};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(payload)
 
//var userId = []
for (let i = 0; i < payload.length; i++) {
 axios.post('https://live.app.teka.net.in/cap/users/customer',payload[i] , options)
  .then((res) => {
  
     console.log("RESPONSE ==== : ", res);
   console.log(res.data);
  //const { _id } = res;
  //console.log(_id)
  //const data = res;
  //console.log(data?.response?.customer?._id)
  })
 .catch((err) => {
   console.log("ERROR: ====", err);

}) 
/*const walletpayload = {
              "user": {
                  "_id": "62b1a3e8a2b2814b6cef2a5a",
                  "category": "CUSTOMER"
              },
              "tenant": "62726568a2e7d713d89e4357",
              "description": "ADDED SOME AMOUNT",
              "amount": 100,
              "amountType": {
                  "key": "10100",
                  "value": "PROMOTIONAL"
              },
              "transactionRef": "PROMOTIONAL",
              "expireAt": null,
              "meta": {}
          };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 console.log(payload)
 const option = {
    headers : { 
    'Content-Type': 'application/json',
   // 'x-encrypted-key':'62726568a2e7d713d89e4357'}
     'Authorization': 'QjerP42QCa1lGn3MgXXyKg' }

};

for (let i = 0; i < payload.length; i++) {
 axios.post('https://live.app.teka.net.in/wallet/v2/wallet/internal/create-transaction',walletpayload[i] , option)
  .then((res) => {
  
   console.log("RESPONSE ==== : ", res);
   console.log(res.data);
   
 })
 .catch((err) => {
   console.log("ERROR: ====", err);
 })         
  }*/
 /*   }  
    })
    .catch(err => {
        // log error if any
        console.log(err);
    });

*/*/