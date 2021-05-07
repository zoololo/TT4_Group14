import React, { useState } from 'react';

import axios from 'axios';

 

const AccountDetails = () => {

    const [availableBal, setAvailableBal] = useState(null);

    const [accountName, setAccountName] = useState(null);

    const [accountNumber, setAccountNumber] = useState(null);

 

    if (localStorage.getItem('accountKey')){

        const key = localStorage.getItem('accountKey')

        

        const checkDetails = async (key) => {

            const payload = { 

                custID : localStorage.getItem('custID'),

                accountKey : localStorage.getItem('accountKey')

            }

            const response = await axios.post("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", payload, { headers : {'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"}})

            setAccountName(response.data.accountName)

            setAccountNumber(response.data.accountNumber)

            setAvailableBal(response.data.availableBal)

        }

        checkDetails(key)

    }

 

    return(

        <div>

            <h1>Account Details:</h1>

            <p>Name: {accountName}</p>

            <p>Number: {accountNumber}</p>

            <p>Balance: {availableBal}</p>

        </div>

    )

}

 

export default AccountDetails;