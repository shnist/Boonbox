<?php
header('Content-Type: application/json; charset=utf-8');
$json = '[
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		},
		{
			name: "foo",
			image: "../../assets/images/placeHolder1.jpg"
		}
	]'; 
echo json_encode($json);
?>