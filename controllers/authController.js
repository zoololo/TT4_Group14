require('dotenv').config();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

exports.login = (req, res) => {
    const data = req.body;
    console.log(data);
    const config = {
        headers: {
            'x-api-key': process.env.API_KEY,
        },
    };
    axios
        .post(
            'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
            data,
            config
        )
        .then(async (response) => {
            const token = jwt.sign({ userAccKey: response.data.accountKey }, "someSecretHash");
            const remembermeToken = null;
            if (req.body.check == true) { remembermeToken = jwt.sign({ data }, "anotherSecretHash"); }
            res.json({ userDetails: response.data, auth: true, token: token, remembermeToken});
        })
        .catch((error) => {
            console.log(error);
        });
};

