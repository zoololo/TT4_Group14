import React, {Component} from 'react';

class addTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // To be posted when transaction added
            custID: 14,
            accountKey: 'g1la0msi-ennf-t692-winw-b1h2utx82p2',
            // To be filled in by user
            payeeID: '',
            amount: '',
            eGift: false,
            message: ''
        };
        
        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // // Retrieve the user's `custID` and `accountKey`, given userName, Pass
    // componentDidMount(){
    //     fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",{
    //         "method": "POST",
    //         "headers": {
    //             'x-api-key': "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
    //         },
    //         "body": {
    //             "userName": "Group14",
    //             "accountKey": "BgQ%o_rF0$Fkv2U"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //         this.setState({
    //             custID: response['custID'],
    //             accountKey: response['accountKey']
    //         })
    //     })
    //     .catch(err => {console.log(err)});
    // }

    create(e) {
        e.preventDefault();

        if (typeof this.state.payeeID != "number"){
            console.log("Please enter only numbers as Payee ID.")
        } else if (typeof this.state.amount != "number"){
            console.log("Please enter only numbers as Amount.")
        }
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
        .then(response => response.json)
        // TODO: Display success message, maybe redirect to homepage
        .then(response => {
            console.log(response)
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
                            Add a Transaction
                        </h1>
                        <form className="d-flex flex-column">
                            <label htmlFor="name">
                                Payee ID:
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
                                Amount to send:
                                <input 
                                    name="amount"
                                    id="amount"
                                    type="number"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({amount: parseInt(e.target.value)})}
                                    required
                                />
                            </label>
                            {/* TODO: make this a yes/no button */}
                            <label htmlFor="gift">
                                Is this an eGift?: 
                                <input
                                    name="This is an eGift"
                                    type="checkbox"
                                    onChange={(e) => this.handleChange({eGift: e.target.value == "on" ? true : false})}
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