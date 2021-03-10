<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "bottlebits"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$postRequest = $_POST;
if(isset($postRequest['sign_up'])){
	$firstName = (isset($postRequest['first_name'])) ? $postRequest['first_name'] :'';
	$lastName = (isset($postRequest['last_name'])) ? $postRequest['last_name'] :'';
	$email = (isset($postRequest['email'])) ? $postRequest['email']  :'';
	$gender = (isset($postRequest['gender'])) ? $postRequest['gender'] :'';;
	$ageGroup = (isset($postRequest['age_group'])) ? $postRequest['age_group'] :'';
	$country = (isset($postRequest['country'])) ? $postRequest['country'] :'';

	$date = new DateTime();
	$createdAt = $date->format('Y-m-d H:i:s') . "\n";

	 // Attempt insert query execution
	$sql = "INSERT INTO users (first_name, last_name, email, gender, age_group, country, created_date) VALUES
	            ('".$firstName."', '".$lastName."', '".$email."', '".$gender."', '".$ageGroup."', '".$country."', '".$createdAt."')";

	if ($conn->query($sql) === TRUE) {
	  	$last_id = $conn->insert_id;
	  	$_SESSION['user_id'] = $last_id;
	  	$response = ['success'=>true,'code'=> 'user_signup','message'=>'User successfully signed up'];
	  	echo json_encode($response);
	  	exit;
	} else {
		$response = ['success'=>false,'code'=> 'user_signup','message'=>'Failed to create user'];
	  	echo json_encode($response);
	  	exit;
	}


}

if(isset($postRequest['step_1'])){
	$whiskyKnowledge = (isset($postRequest['whisky_knowledge'])) ? $postRequest['whisky_knowledge'] :'';
	$userId = $_SESSION['user_id'];


	//check if survey is created
	$sql = "SELECT * FROM survey where user_id = '".$userId."'";
	$result = $conn->query($sql);
	if ($result->num_rows == 0) {
		$sql = "INSERT INTO survey (user_id, whisky_industry_knowledge) VALUES
	            ('".$userId."', '".$whiskyKnowledge."')";
	}
	else{
		$sql = "UPDATE survey SET whisky_industry_knowledge='".$whiskyKnowledge."' WHERE id= '".$userId."'";
	}

	if ($conn->query($sql) === TRUE) {;
	  	$response = ['success'=>true,'code'=> 'step_1','message'=>'Answer successfully saved.'];
	  	echo json_encode($response);
	  	exit;
	} else {
		$response = ['success'=>false,'code'=> 'step_1','message'=>'Failed to save Answer'];
	  	echo json_encode($response);
	  	exit;
	}


}

if(isset($postRequest['step_2'])){
	$bottlebitsHelpMe = (isset($postRequest['bottlebits_help_me'])) ? $postRequest['bottlebits_help_me'] :'';
	$userId = $_SESSION['user_id'];
	if(is_array($bottlebitsHelpMe)) 
		$bottlebitsHelpMe = implode(", ", $bottlebitsHelpMe);


	//check if survey is created
	$sql = "SELECT * FROM survey where user_id = '".$userId."'";
	$result = $conn->query($sql);
	if ($result->num_rows == 0) {
		$sql = "INSERT INTO survey (user_id, bottlebits_help_me) VALUES
	            ('".$userId."', '".$bottlebitsHelpMe."')";
	}
	else{
		$sql = "UPDATE survey SET bottlebits_help_me='".$bottlebitsHelpMe."' WHERE id= '".$userId."'";
		print_r($row);
	}

	if ($conn->query($sql) === TRUE) {;
	  	$response = ['success'=>true,'code'=> 'step_2','message'=>'Answer successfully saved.'];
	  	echo json_encode($response);
	  	exit;
	} else {
		$response = ['success'=>false,'code'=> 'step_2','message'=>'Failed to save Answer'];
	  	echo json_encode($response);
	  	exit;
	}


}

if(isset($postRequest['step_3'])){
	$initialInvestmentIntention = (isset($postRequest['initial_investment_intention'])) ? $postRequest['initial_investment_intention'] :'';
	$userId = $_SESSION['user_id'];


	//check if survey is created
	$sql = "SELECT * FROM survey where user_id = '".$userId."'";
	$result = $conn->query($sql);
	if ($result->num_rows == 0) {
		$sql = "INSERT INTO survey (user_id, initial_investment_intention) VALUES
	            ('".$userId."', '".$initialInvestmentIntention."')";
	}
	else{
		$sql = "UPDATE survey SET initial_investment_intention='".$initialInvestmentIntention."' WHERE id= '".$userId."'";
	}

	if ($conn->query($sql) === TRUE) {;
	  	$response = ['success'=>true,'code'=> 'step_3','message'=>'Answer successfully saved.'];
	  	echo json_encode($response);
	  	exit;
	} else {
		$response = ['success'=>false,'code'=> 'step_3','message'=>'Failed to save Answer'];
	  	echo json_encode($response);
	  	exit;
	}


}
 
// // Close connection
$conn->close();
?>


