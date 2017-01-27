<?php
if( isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage']) ){
	$name = $_POST['inputName'];
	$email = $_POST['inputEmail'];
	$msg = nl2br($_POST['inputMessage']);
	$to = "jimmydelosangeles@me.com";
	$from = $email;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$name.' <br><b>Email:</b> '.$email.' <p>'.$msg.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>
