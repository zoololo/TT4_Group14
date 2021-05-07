# Getting Started
npm install
cd client
npm install
create required components in client/src/components to secure working react app
npm run start in client directory to test
login
transfer
view transaction hist
view balances

# roles
Login - Cheng
Khai - view transaction

# api call

var axios = require('axios');
var data = JSON.stringify({
  "userName": "Group14",
  "userPass": "BgQ%o_rF0$Fkv2U"
});

var config = {
  method: 'post',
  url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
  headers: { 
    'x-api-key': 'ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
