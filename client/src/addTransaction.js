import React from 'react';

class addTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // To be posted when transaction added
            // custID: 14,
            // accountKey: 'g1la0msi-ennf-t692-winw-b1h2utx82p2',

            // Uncomment and replace above when routing complete
            custID: localStorage.getItem('custID'),
            accountKey: localStorage.getItem('accountKey'),
            
            // To be filled in by user
            payeeID: '',
            amount: '',
            eGift: false,
            message: ''
        };
        
        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    parse(response){
        if (typeof response['message'] !== "undefined"){
            return (response['message'] + `. ${this.state.amount} SGD was successfully transferred to Payee ID ${this.state.payeeID}.`);
        } else {
            var errorCode = response['statusCode'].toString()
            if (errorCode == 400){
                if (this.state.payeeID != 22) {
                    return ("Please only use 22 as Payee ID.");
                }
            } else {
                return ("Error " + errorCode + ": " + response['body']);
            }
        }
    }

    create(e) {
        e.preventDefault();

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
        // TODO: Display success message, maybe redirect to homepage
        .then(response => {
            window.alert(this.parse(response))
        })
        // TODO: Display error, do not redirect
        .catch(err => {
            console.log(err);
        });
    }

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
                                    required
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
                                    required
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