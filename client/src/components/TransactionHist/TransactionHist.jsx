import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';



class TransactionHist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionHistory: [],            
            showTable: false
        }

          
        this.redirectToHome = this.redirectToHome.bind(this);
        this.getTransactionHistory = this.getTransactionHistory.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.showTransactions = this.showTransactions.bind(this);
    };

    checkAmountBalance = async () => {
        const custID = this.state.custID;
        const payload = { 
            custID : parseInt(localStorage.getItem('custID')),
            accountKey : localStorage.getItem('accountKey')
        }
        try {
          const res = await axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts', payload, {
            headers: {
                'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
            },
          });
          if (res.status === 200) {
            const accounts = res.data;
            this.setState({ accounts });
            console.log(this.state.accounts);
          }
        } catch (err) {
          console.log('AccountDetails-checkAmountBalance err: ' + err);
          if (err.message === 'Request failed with status code 401') {
            toast.error('Access token expired. Please sign out and login again');
          }
        }
      };

    componentDidMount() {
        this.setState({ custID: localStorage.getItem('custID')}, () => {
          this.checkAmountBalance();
        });
      }


    getTransactionHistory = async () => {
        //const custID = this.state.custID;
        const payload = { 
            custID : parseInt(localStorage.getItem('custID')),
            accountKey : localStorage.getItem('accountKey')
        }
        try {
          const res = await axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', payload, {
            headers: {
                'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
            },
          });
          if (res.status === 200) {
            const transactionHistory = res.data;
            this.setState({ transactionHistory });
            console.log(this.state.transactionHistory);
          }
        } catch (err) {
          console.log('AccountDetails-checkAmountBalance err: ' + err);
          if (err.message === 'Request failed with status code 401') {
            toast.error('Access token expired. Please sign out and login again');
          }
        }
    }

    redirectToHome = () => {
        this.props.history.push('/');
    }

    showTransactions = () => {
        this.setState({ transactionHistory: [] })
        this.getTransactionHistory();
        if (!this.state.showTable) {
            this.setState({ showTable: true })
        } else {
            this.setState({ showTable: false });
        }
    }

    renderContent() {
        var tableTransactions = ( //to show table of transactions
            <div>
                <table className="striped centered teal lighten-4 class">

                    <thead>
                        <tr>
                            <th>Transaction Date</th>
                            <th>Transaction Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.transactionHistory.map(transactionHistory => <tr key={transactionHistory.custID}><td>{transactionHistory.date}</td><td>{transactionHistory.amount}</td></tr>)}
                    </tbody>

                </table>
            </div>
        )

        var tableNothing = (
            <div>
                <h6>Click on "Show Transaction History" to see view your previous transactions</h6>
            </div>
        )

        if (this.state.showTable) {
            return (
                <div>
                    {tableTransactions}
                </div>
            )
        } else {
            return (
                <div>
                    {tableNothing}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <br />
                <button onClick={this.showTransactions}>Show Transaction History</button>
                <br />
                <br />
                <button onClick={this.redirectToHome}>Back to Home</button>
                <br />
                <br />
                {this.renderContent()}
            </div>
        )
    }
}


export default withRouter(TransactionHist)