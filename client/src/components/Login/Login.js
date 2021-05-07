import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [username, setUser] = useState("Enter Username");
    const [password, setPass] = useState("");
    const [check, setCheck] = useState(false);
    let history = useHistory();
    useEffect(()=>{
        async function checkRememberMe(){
            try{
                const res = await axios.post('/api/checkRememberMe');
                if(res===200){
                    
                }
            }
            catch(err){
            }
        }
        checkRememberMe();
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            userName: username,
            userPass: password
        };
        const config = {
            headers: {
                "x-api-key": "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"
            }
        }
        try {
            const res = await axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', data, config);
            if (res.status === 200) {
                console.log(res);
                localStorage.setItem('accountKey', res.data.accountKey);
                localStorage.setItem('address', res.data.address);
                localStorage.setItem('age', res.data.age);
                localStorage.setItem('custID', res.data.custID);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('firstName', res.data.firstName);
                localStorage.setItem('lastName', res.data.lastName);
                localStorage.setItem('nric', res.data.nric);
                localStorage.setItem('phoneNumber', res.data.phoneNumber);
                // for remember me function, node.js and express used to set cookie containing jwt of userName and userPass. 
                // each time a user opens the loginPage, cookie is verified with jwt.verify and userName and userPass is obtained from payload 
                // and used to populate the username and password fields
            }
        }
        catch (err) {
            if(err.response.status===403){
                alert("Credentials entered are invalid!");
            }
            else if(err.response.status===401){
                alert("Missing Credentials!");
            }
            else{
                alert(err.message);
            }
        }
    }

    const updatePass = (e) => {
        setPass(e.target.value);
    }
    const updateUser = (e) => {
        setUser(e.target.value);
    }
    const updateCheck = () => {
        setCheck(!check);
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus type="text"
                        size="lg"
                        value={username}
                        onChange={updateUser}
                        required
                    />
                </Form.Group>
                <Form.Group size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoFocus type="password"
                        value={password}
                        size="lg"
                        onChange={updatePass}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" onChange={updateCheck} />
                </Form.Group>
                <Button block size="lg" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;