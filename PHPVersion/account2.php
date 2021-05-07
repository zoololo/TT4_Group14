<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>DBS Hackathon E-Wallet System</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
	<div id="page">
		<div id="header">
			<div>
				<a href="index.html" class="logo"><img src="images/logo.png" alt=""></a>
				<ul id="navigation">
					<li class="menu">
						<a href="index.php">Log Out</a>
					</li>
					<li class="menu">
						<a href="about.html">View Transaction History</a>
					</li>
					<li class="menu">
						<a href="pay.php">Add Transaction</a>
					</li>
					<li class="selected">
						<a href="account2.php">View Account Balance</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="body" class="home">
			<div class="body">
				<div>
					<div>
						<?php 
							$curl = curl_init();

							$postData = [ "custID" => 14,
								"accountKey" => "g1la0msi-ennf-t692-winw-b1h2utx82p2"
							];
							
							curl_setopt_array($curl, array(
								CURLOPT_URL => 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
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
							// var_dump ($response);
						?>
						<h1><?php echo ($response[0]['accountName']);?> </h1>
						<h2>Account Number: $<?php echo ($response[0]['accountNumber']);?> </h2>
						<h2>Account Balance: $<?php echo ($response[0]['availableBal']);?> </h2>

						<h1><?php echo ($response[1]['accountName']);?> </h1>
						<h2>Account Number: $<?php echo ($response[1]['accountNumber']);?> </h2>
						<h2>Account Balance: $<?php echo ($response[1]['availableBal']);?> </h2>

						<h1><?php echo ($response[2]['accountName']);?> </h1>
						<h2>Account Number: $<?php echo ($response[2]['accountNumber']);?> </h2>
						<h2>Account Balance: $<?php echo ($response[2]['availableBal']);?> </h2>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div>
			</div>
		</div>
	</div>
</body>
</html>
