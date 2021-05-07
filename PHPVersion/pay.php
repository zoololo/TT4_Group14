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
				<a href="index.html" class="logo"><img src="" alt=""></a>
				<ul id="navigation">
				<li class="menu">
						<a href="index.php">Log Out</a>
					</li>
					<li class="menu">
						<a href="viewTransactions.php">View Transaction History</a>
					</li>
					<li class="selected">
						<a href="pay.php">Add Transaction</a>
					</li>
					<li class="menu">
						<a href="account2.php">View Account Balance</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="body" class="home">
			<div class="body">
				<div>
					<div>
						<h1>Who would you like to pay to?</h1>
						<form id="processPayment" action="processPayment.php" method="post">
							<p>Enter Payee ID &nbsp; &nbsp; &nbsp;<input type="text" name='payeeID' placeholder="22" required> </p>							
							<br/>
							<p>Enter Amount ($) <input type="text" name='amount' placeholder="12" required> </p>
							<p>eGift? <input type="checkbox" id="egift" name="egift" value="true">  </p>
							<p>Enter message <input type="text" name='msg' value="Hello. Here is some money!"> </p>
						<button type="submit" name="Login">Submit</button>
						</form>
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
