<?php
header('Content-Type: application/json; charset=utf-8');
$json = '[
		{
			name: "Monster Toys",
			price: 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "Monster Toys",
			price: 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "Monster Toys",
			price: 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "Monster Toys",
			price: 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "Monster Toys",
			price : 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "Monster Toys",
			price: 25.99,
			rating: 4,
			image: "../../assets/images/placeHolder1.jpg"
		}
	]';
// simulates delay - in seconds
sleep(4);
echo json_encode($json);
?>