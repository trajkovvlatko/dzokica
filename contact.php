<?php
$to = "contact@rewindproduction.mk";
$subject = "Contact form mail";
$message = $_POST['message'];
$from = $_POST['email'];
$headers = "From:" . $_POST['email'];
mail($to, $subject, $message, $headers);
echo "Mail successfully sent.";
?>
