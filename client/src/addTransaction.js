'use strict';

class addTransaction extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // To be posted when transaction added
            "custID": '',
            "accountKey": '',
            // To be filled in by user
            "payeeID": '',
            "amount": '',
            "eGift": false,
            "message": ''
        };
        
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Retrieve the user's accounts (e.g. savings, multiplier account)
    componentDidMount(){
        fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",{
            "method": "POST",
            "headers": {
                'x-api-key': "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
            },
            "body": {
                "userName": "Group14",
                "accountKey": "BgQ%o_rF0$Fkv2U"
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                custID: response['custID'],
                accountKey: response['accountKey']
            })
        })
        .catch(err => {console.log(err)});
    }

    create(e) {
        e.preventDefault();

        fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",{
            "method": "POST",
            "headers": {
                'x-api-key': "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
            },
            "body": this.state
        })
        .then(response => response.json)
        .then(response => {
            console.log(response)
        })
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
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({payeeID: e.target.value})}
                                    required
                                />
                            </label>
                            <label htmlFor="amount">
                                Amount to send:
                                <input 
                                    name="amount"
                                    id="amount"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({amount: e.target.value})}
                                    required
                                />
                            </label>
                            {/* TODO: make this a yes/no button */}
                            <label htmlFor="gift">
                                Is this a gift?:
                                <input 
                                    name="gift"
                                    id="gift"
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={(e) => this.handleChange({eGift: e.target.value})}
                                    required
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

let domContainer = document.querySelector("#App");
ReactDOM.render(<addTransaction/>, domContainer);