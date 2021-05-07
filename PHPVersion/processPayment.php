<?php

// $payeeID = $_POST['payeeID'];
// $amount = $_POST['amount'];
$boo = $_POST['egift'];

if ($boo==="true"){
  $boo=true;
} else $boo=false;

// echo $boo;
// echo $payeeID;

$curl = curl_init();

$postData = [ "custID" => 14,
    "accountKey" => "g1la0msi-ennf-t692-winw-b1h2utx82p2",
    "payeeID" => (int)$_POST['payeeID'],
    "amount" => (int)$_POST['amount'],
    "eGift" => $boo,
    "message" => $_POST['msg']
];

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
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

$response = json_decode($response, true);

var_dump($response);

$check = "Successful transaction";

if ($response['message']==$check){
  header("Location: processPaymentSuccess.php");
}
else{
  header("Location: processPayment.php");
}


?>