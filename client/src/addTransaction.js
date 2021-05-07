import React from 'react';

class addTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // Uncomment and replace above when routing complete
            custID: parseInt(localStorage.getItem('custID')),
            accountKey: localStorage.getItem('accountKey'),
            
            // To be filled in by user
            payeeID: NaN,
            amount: NaN,
            eGift: false,
            message: ''
        };
        
        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Prepares string for popup notifying result of transaction
    parse(response){
        if (typeof response['message'] !== "undefined"){
            return (response['message'] + `. ${this.state.amount} SGD was successfully transferred to Payee ID ${this.state.payeeID}.`);
        } else {
            var errorCode = response['statusCode']
            if (errorCode === 400){
                if (parseInt(this.state.payeeID) !== 22) {
                    return ("Please only use 22 as Payee ID.");
                }
            } else if (typeof errorCode !== "undefined") {
                return ("Error " + errorCode.toString() + ": " + response['body']);
            } else {
                return ("Request timed out. Please try again.");
            }
        }
    }

    // POST the transaction API
    create(e) {
        e.preventDefault();
        if (isNaN(this.state.payeeID)){
            alert("Please enter a payeeID.");
        } else if (isNaN(this.state.amount)){
            alert("Please enter an amount to transfer.");
        } else if (this.state.amount * 100 % 1 !== 0) {
            alert("Please enter a valid amount. (smallest denomination of 1 cent)")
        } else{
            fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",{
                "method": "POST",
                "headers": {
                    'x-api-key': "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
                },
                "body": JSON.stringify({
                    custID: this.state.custID,
                    accountKey: this.state.accountKey,
                    payeeID: this.state.payeeID,
                    amount: this.state.amount,
                    eGift: this.state.eGift,
                    message: this.state.message
                })
            })
            .then(response => response.json())
            .then(response => {
                window.alert(this.parse(response))
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    // Update state value based on field entries
    handleChange(changeObject){
        this.setState(changeObject)
    }

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center">
                            Make a Transaction
                        </h1>
                        <form className="d-flex flex-column">
                            <label htmlFor="name">
                                Payee ID: (Please only enter 22)
                                <input 
                                    name="payeeID"
                                    id="payeeID"
                                    type="number"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({payeeID: parseInt(e.target.value)})}
                                    required="required"
                                />
                            </label>
                            <label htmlFor="amount">
                                Amount to send (SGD):
                                <input 
                                    name="amount"
                                    id="amount"
                                    type="number"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({amount: parseFloat(e.target.value)})}
                                    required="required"
                                />
                            </label>
                            <label htmlFor="gift">
                                Is this an eGift?: &nbsp;
                                <input
                                    name="This is an eGift"
                                    type="checkbox"
                                    onChange={(e) => this.handleChange({eGift: e.target.value === "on" ? true : false})}
                                />
                            </label>
                            <label htmlFor="msg">
                                Message:
                                <input 
                                    name="message"
                                    id="message"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({message: e.target.value})}
                                    required
                                />
                            </label>
                            <button 
                                className="btn btn-primary" 
                                type="button" 
                                onClick={(e) => this.create(e)}>
                                    Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default addTransaction;