import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Balance = () => {
    const [bankBalance, setBankBalance] = useState(null);

    if (sessionStorage.getItem("accountKey")) {
        const key = sessionStorage.getItem("accountKey");

        const checkBalance = async (key) => {
            const payload = {
            accountKey : key
            }
            const response = await axios.post("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", payload, { headers : {'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"}})
            setBankBalance(response.data.bankBalance);
        }
        checkBalance(key)
    }


    return(
    <div className="container" style={{border:"solid black 5px"}}>
        <h1>BALANCE</h1>
        <br/>
        Bank Balance : {bankBalance ? 
        <div>
            <h2>{bankBalance}</h2>
        </div>
         : null }
    </div>
    );
}

export default withRouter(Balance);