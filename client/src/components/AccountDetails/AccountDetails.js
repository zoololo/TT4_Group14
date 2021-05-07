import { ToastContainer, toast } from 'react-toastify';
import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

export default class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custID: '',
      accounts: [],
    };
  }

  componentDidMount() {
    this.setState({ custID: localStorage.getItem('custID')}, () => {
      this.checkAmountBalance();
    });
  }

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

  render() {
    return (
      <>
        <ToastContainer />
        <Jumbotron fluid>
          <Container>
            <h2 className="display-4">Account Details</h2>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>
                    <h5>Account Name</h5>
                  </th>
                  <th>
                    <h5>Account Number</h5>
                  </th>
                  <th>
                    <h5>Account Balance (SGD)</h5>
                  </th>
                  <th>
                    <h5>Is Linked?</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.accounts.map((account, i) => (
                  <tr key={i}>
                    <td>{account.accountName}</td>
                    <td>{account.accountNumber}</td>
                    <td>${account.availableBal}</td>
                    <td>{account.linked ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

