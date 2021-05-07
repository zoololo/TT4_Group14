<?php

$user = $_POST['username'];
$pass = $_POST['password'];

$curl = curl_init();

$postData = [ "userName" => $user,
    "userPass" => $pass
];

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => json_encode($postData),
    CURLOPT_HTTPHEADER => array(
      'x-api-key: ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg',
      'Content-Type: application/json'
    ),
  ));

curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($curl);

if ($response === false) 
    $response = curl_error($curl);

curl_close($curl);

// hardcoded response for testing to prevent unnecessary API calls
//$response = '{"phoneNumber":"(+65) 98321062","accountKey":"g1la0msi-ennf-t692-winw-b1h2utx82p2","custID":14,"lastName":"Blackburn","address":"589 Justin Crossroad Apt. 580\nEast Helen, VA 59128","email":"gina@hotmail.com","gender":"Female","nric":"S7253851E","firstName":"Gina","age":49}';
//'{"phoneNumber":"(+65) 98321062","accountKey":"g1la0msi-ennf-t692-winw-b1h2utx82p2","custID":14,"lastName":"Blackburn","address":"589 Justin Crossroad Apt. 580\nEast Helen, VA 59128","email":"gina@hotmail.com","gender":"Female","nric":"S7253851E","firstName":"Gina","age":49}'

// echo $response['phoneNumber']; 

$response = json_decode($response, true);

$check = "(+65) 98321062"; // real user

// echo $check;

if ($response['phoneNumber']==$check){
  header("Location: account.php");
}
else{
  header("Location: index.php");
}


?>