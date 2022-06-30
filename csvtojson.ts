const CSVToJSON = require('csvtojson');
const axios = require('axios')


// convert users.csv file to JSON array
CSVToJSON().fromFile('newcustomer.csv')
    .then(users => {

        // users is a JSON array
        
        // console.log(users);
        
        const newUser = users.map(({ PROMOTIONAL_AMOUNT, AKSHAY_PATRA_AMOUNT, CASHBACK_AMOUNT, ...rest }) => {
            return rest;
        });
        
        //console.log(users[1]);
        //console.log(newUser[1])

        const jsonCustomer = newUser.map(item => JSON.stringify(item))
        
        //console.log(jsonCustomer[1]);

        const payload = jsonCustomer;
        console.log(payload)
        const options = {
            headers: { 
                'Content-Type': 'application/json',
                'x-encrypted-key': '62726568a2e7d713d89e4357'
            }
        };

        for (let i = 0; i < payload.length; i++) {
            axios.post('https://live.app.teka.net.in/cap/users/customer', payload[i], options)
                .then((res) => {
                    
                    console.log("RESPONSE ==== : ", res);
                    console.log(res.data)

                    //console.log(res.data.response.customer._id);
                    const userId = res.data.response.customer._id
                    
                   for (let i = 0; i < users.length; i++) {

                        const amountType1 = users[i].PROMOTIONAL_AMOUNT;
                 
                        const walletpayload = {
                            "user": {
                                "_id": userId,
                                "category": "CUSTOMER"
                            },
                            "tenant": "62726568a2e7d713d89e4357",
                            "description": "ADDED SOME AMOUNT",
                            "amount": amountType1,
                            "amountType": {
                                "key": "10100",
                                "value": "PROMOTIONAL"
                            },
                            "transactionRef": "PROMOTIONAL",
                            "expireAt": null,
                            "meta": {}
                        };
                    
                        const option = {
                            headers: { 
                                'Content-Type': 'application/json',
                            
                                'Authorization': 'QjerP42QCa1lGn3MgXXyKg'
                            }

                        };

                        axios.post('https://live.app.teka.net.in/wallet/v2/wallet/internal/create-transaction', walletpayload, option)
                            .then((res) => {
  
                                console.log("RESPONSE ==== : ", res);
                                console.log(res.data);
   
                            })
 
                    }  
                    for (let i = 0; i < users.length; i++) {

                 
                        const amountType2 = users[i].AKSHAY_PATRA_AMOUNT;
                 
                        const walletpayload = {
                            "user": {
                                "_id": userId,
                                "category": "CUSTOMER"
                            },
                            "tenant": "62726568a2e7d713d89e4357",
                            "description": "ADDED SOME AMOUNT",
                            "amount": amountType2,
                            "amountType": {
                                "key": "10100",
                                "value": "AKSHAY PATRA"
                            },
                            "transactionRef": "AKSHAY PATRA",
                            "expireAt": null,
                            "meta": {}
                        };
                    
                        const option = {
                            headers: { 
                                'Content-Type': 'application/json',
                                
                                'Authorization': 'QjerP42QCa1lGn3MgXXyKg'
                            }

                        };

                        axios.post('https://live.app.teka.net.in/wallet/v2/wallet/internal/create-transaction', walletpayload, option)
                            .then((res) => {
  
                                console.log("RESPONSE ==== : ", res);
                                console.log(res.data);
   
                            })

                    }  
                })
                .catch((err) => {
                    console.log("ERROR: ====", err);
                })

        }
    })
    .catch(err => {
        // log error if any
        console.log(err);
        /// <reference path="" />
    });