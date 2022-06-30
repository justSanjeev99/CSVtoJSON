after creating one user store his email id to new csv with 2 more columns/
after the comlition of user part merge those csv on the basisi of email 
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
        //console.log(jsonCustomer);
        //console.log(jsonCustomer[1]);
 
        const payload = jsonCustomer;
        //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  console.log(payload)
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
                    console.log(userId)
                    // console.log(arrId.push(userId));
                    const walletpayload = {
                        "user": {
                            "_id": userId,
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
                    
                    const option = {
                        headers: { 
                            'Content-Type': 'application/json',
                            // 'x-encrypted-key':'62726568a2e7d713d89e4357'}
                            'Authorization': 'QjerP42QCa1lGn3MgXXyKg'
                        }

                    };

                    axios.post('https://live.app.teka.net.in/wallet/v2/wallet/internal/create-transaction', walletpayload, option)
                        .then((res) => {
  
                            console.log("RESPONSE ==== : ", res);
                            console.log(res.data);
   
                        })

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