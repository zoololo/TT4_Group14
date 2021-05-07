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
					<li class="selected">
						<a href="index.php">Login</a>
					</li>
					<li class="menu">
						<a href="viewTransactions.php">View Transaction History</a>
					</li>
					<li class="menu">
						<a href="pay.php">Add Transaction</a>
					</li>
					<li>
						<a href="account.php">View Account Details</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="body" class="home">
			<div class="body">
				<div>
					<div>
						<h1>Welcome, please login</h1>
						<form id="processLogin" action="processLogin.php" method="post">
							<p>Enter Username <input type="text" name='username' value="Group14" required> </p>							
							<br/>
							<p>Enter Password <input type="text" name='password' value="BgQ%o_rF0$Fkv2U" required> </p>	
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
