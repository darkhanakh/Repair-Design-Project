<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

// Load Composer's autoloader
date_default_timezone_set('Etc/UTC');
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/class.phpmailer.php';
require 'phpmailer/class.smtp.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;
    $mail->CharSet = 'UTF-8';                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host = gethostbyname('ssl://smtp.gmail.com');                   // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'darkhan.akhmetovthree@gmail.com';          // SMTP username
    $mail->Password   = 'Dar050811!';                               // SMTP password
    $mail->SMTPSecure = "ssl";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465; 
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
        );                                   // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('darkhan.akhmetovthree@gmail.com', 'Дархан');
    $mail->addAddress('difiki9213@gilfun.com');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}, его почта: ${userEmail}";

    
    if ($mail -> send()) {
        echo "ok";
    }else{
        echo "Сообщение не отправлено. Код ошибки: {$mail->ErrorInfo}";
    }
} catch (Exception $e) {
    echo "Сообщение не отправлено. Код ошибки: {$mail->ErrorInfo}";
}