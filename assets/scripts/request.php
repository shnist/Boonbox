<?php
header('Content-Type: application/json; charset=utf-8');

$json = array(array('name'=>'Monster Toys', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Mina Nishimura', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'),array('name'=>'Johanna Elise Oja', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Aaron Faber', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Beth Williams', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Kingsley', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Laura', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'), array('name'=>'Monster Toys', 'price'=>'25.99', 'rating'=>'4', 'image'=>'../../assets/images/placeHolder1.jpg'));

// simulates delay - in seconds
sleep(4);
$jsonFinal = json_encode($json);
//echo $jsonFinal;
?>