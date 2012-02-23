<?php
header('Content-Type: application/json; charset=utf-8');

$allProducts = array(
		  array('name'=>'Alarm Clock', 'price'=>'24.99', 'rating'=>'3', 'image'=>'../../assets/images/alarm.jpg',
				'tags'=>array('Mum', 'Dad', 'Birthday', 'Anniversary', 'Science', '24-30', '30-40')),
		  array('name'=>'Bag', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/bag.jpg',
				'tags'=>array('Friend', 'Sister', '16-29', '20-23', '24-30', 'Birthday', 'Graduation')),
		  array('name'=>'Cocktail Glass', 'price'=>'9.99', 'rating'=>'4', 'image'=>'../../assets/images/bday-cocktail.jpg',
				'tags'=>array('Friend', 'Sister', 'Girlfriend', 'Birthday', '20-23')),
		  array('name'=>'Brain Master', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/brain-master.jpg',
				'tags'=>array('Brother', 'Dad', 'Son', 'Friend', 'Birthday', 'New Job', 'Science', '30-40', '41-55')),
		  array('name'=>'Yasmin Candle', 'price'=>'8.99', 'rating'=>'2', 'image'=>'../../assets/images/candle.jpg',
				'tags'=>array('Mum', 'Sister', 'Birthday', 'Retirement', '30-40', '56-70')),
		  array('name'=>'Charging Station', 'price'=>'39.99', 'rating'=>'5', 'image'=>'../../assets/images/charge-station.jpg',
				'tags'=>array('Sister', 'Brother', 'Son', 'Boyfriend', 'Birthday', '16-19', '20-23', '24-30', '30-40', 'Music')),
		  array('name'=>'Charm Bracelet', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/charm-bracelet.jpg',
				'tags'=>array('Girlfriend', 'Sister', 'Daughter', 'Birthday', 'Christmas', '16-19', '20-23')),
		  array('name'=>'Girls Charm Bracelet', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/charmbraclet2.jpg',
				'tags'=>array('Girlfriend', 'Sister', 'Daughter', 'Birthday', '16-19', '20-23')),
		  array('name'=>'Cheese Board', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/cheese.jpg',
				'tags'=>array('Mum', '30-40', '56-70', 'Retirement', 'Birthday', 'Food', 'Cooking')),
		  array('name'=>'Funky Clock', 'price'=>'18.99', 'rating'=>'2', 'image'=>'../../assets/images/clock.jpg',
				'tags'=>array('Brother', 'Dad', '30-40', 'Birthday', 'Christmas', 'Valentines', 'Science')),
		  array('name'=>'Cool Cocktail Glass', 'price'=>'9.99', 'rating'=>'5', 'image'=>'../../assets/images/cocktail.jpg',
				'tags'=>array('Sister', 'Daughter', 'Friend', 'Birthday', '20-23')),
		  array('name'=>'Hand Cream', 'price'=>'12.99', 'rating'=>'3', 'image'=>'../../assets/images/cream.jpg',
				'tags'=>array('Mum', '41-55', 'Birthday', 'New Job', 'Retirement', 'Holidays')),
		  array('name'=>'Cross Cufflinks', 'price'=>'17.99', 'rating'=>'3', 'image'=>'../../assets/images/cufflinks.jpg',
				'tags'=>array('Brother', 'Boyfriend', 'Dad', 'Birthday','Valentines','Christmas', 'New Job', '30-40')),
		  array('name'=>'Dog Statue', 'price'=>'24.99', 'rating'=>'1', 'image'=>'../../assets/images/dog.jpg',
				'tags'=>array('Mum', 'Dad', 'Birthday', 'Anniversary', '41-55', 'Art')),
		  array('name'=>'Ear Phones', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/ear-phones.jpg',
				'tags'=>array('Brother', 'Sister', 'Boyfriend', 'Girlfriend', 'Birthday', 'New Job', 'Music', '16-19', '20-23', '24-30')),
		  array('name'=>'Glass Clock', 'price'=>'22.99', 'rating'=>'2', 'image'=>'../../assets/images/elegant-clock.jpg',
				'tags'=>array('Mum', 'Anniversary', 'Birthday', 'Anniversary', '41-55')),
		  array('name'=>'England Cufflinks', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/england-cufflinks.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Birthday', 'New Job', 'Sport', '30-40')),
		  array('name'=>'Football Table', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/football.jpg',
				'tags'=>array('Brother', 'Boyfriend', 'Dad', 'Birthday', 'Sport','11-15', '20-23', '24-29')),
		  array('name'=>'Fragrance Lamp', 'price'=>'12.99', 'rating'=>'1', 'image'=>'../../assets/images/fragrance-lamp.jpg',
				'tags'=>array('Mum', 'Anniversary', 'Birthday', '41-55', '56-70')),
		  array('name'=>'Love Frame', 'price'=>'9.99', 'rating'=>'3', 'image'=>'../../assets/images/frame.jpg',
				'tags'=>array('Girlfriend', 'Valentines', 'Anniversary', '24-29', '30-40')),
		  array('name'=>'Spot the Intro Game', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/game.jpg',
				'tags'=>array('Brother', 'Boyfriend', 'Birthday', '30-40', 'Music')),
		  array('name'=>'Garden Apron', 'price'=>'16.99', 'rating'=>'4', 'image'=>'../../assets/images/garden-apron.jpg',
				'tags'=>array('Mum', 'Retirement', 'Birthday', '41-55', '56-70', '71+', 'Science')),
		  array('name'=>'Helicopter', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/helicopter.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son',  'Birthday','11-15', '24- 29', '30-40', 'Sport', 'Cars')),
		  array('name'=>'Fun Helicopter', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/helicopter2.jpg',
				'tags'=>array('Brother', 'Boyfriend', 'Birthday','11-15', '24- 29', '30-40', 'Sport', 'Cars')),
		  array('name'=>'Jewellery Holder', 'price'=>'7.99', 'rating'=>'1', 'image'=>'../../assets/images/holder.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'New Job', '20-23', '24-29')),
		  array('name'=>'Jewellery Box', 'price'=>'23.99', 'rating'=>'2', 'image'=>'../../assets/images/jewellerybox.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'New Job','6-10', '20-23', '24-29', '30-40')),
		  array('name'=>'Key Finder', 'price'=>'4.99', 'rating'=>'3', 'image'=>'../../assets/images/keys.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Birthday', '24-29', '30-40', '41-55', 'Cars')),
		  array('name'=>'Mercedes Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/merc.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Birthday', '24-29', '30-40', 'Cars', 'Sport')),
		  array('name'=>'Mini Cooper Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/minicar.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Birthday', '24-29', '30-40', 'Cars', 'Sport')),
		  array('name'=>'Mirror', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/mirror.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'New Baby', 'New Job', '20-23', '24-29', '30-40')),
		  array('name'=>'Car Mouse', 'price'=>'7.99', 'rating'=>'5', 'image'=>'../../assets/images/mouse.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Dad', 'Birthday','6-10', '11-15', '24-29', '30-40', 'Cars', 'Sport')),
		  array('name'=>'Camera Mug', 'price'=>'14.99', 'rating'=>'5', 'image'=>'../../assets/images/mug.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Dad', 'Birthday', '24-29', '30-40', '41-55')),
		  array('name'=>'Necklace', 'price'=>'29.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'Anniversary', 'New Job', '20-23', '24-29', '30-40')),
		  array('name'=>'Chunky Necklace', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace2.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'Anniversary', 'New Job', '20-23', '24-29', '30-40')),
		  array('name'=>'Organiser', 'price'=>'20.00', 'rating'=>'2', 'image'=>'../../assets/images/organiser.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'New Job', '30-40', '41-55', 'Holidays')),
		  array('name'=>'PC Kit', 'price'=>'24.00', 'rating'=>'4', 'image'=>'../../assets/images/pc-kit.jpg',
				'tags'=>array('Mum', 'Sister', 'Girlfriend', 'Birthday', 'Christmas', 'New Job', '20-23', '24-29', '30-40')),
		  array('name'=>'Camera Pen', 'price'=>'30.00', 'rating'=>'5', 'image'=>'../../assets/images/pen.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Dad', 'Birthday','Christmas', '20-23', '24-29', '30-40', 'Graduation')),
		  array('name'=>'Phone Charger', 'price'=>'15.00', 'rating'=>'2', 'image'=>'../../assets/images/phone-charger.jpg',
				'tags'=>array('Brother', 'Boyfriend','Son', 'Dad', 'Birthday','Christmas', '20-23', '24-29', '30-40')),
		  array('name'=>'Photo Frame', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/photo-gallery.jpg',
				'tags'=>array('Mum', 'Dad', 'Brother','Son', 'Sister', 'Boyfriend', 'Girlfriend', 'Birthday', 'New Job', 'Graduation')),
		  array('name'=>'Picnic Kit', 'price'=>'25.00', 'rating'=>'3', 'image'=>'../../assets/images/picnic.jpg',
				'tags'=>array('Mum', 'Dad', 'Birthday', 'Retirement', '41-55')),
		  array('name'=>'Speakers Pillow', 'price'=>'32.99', 'rating'=>'4', 'image'=>'../../assets/images/pillow.jpg',
				'tags'=>array('Girlfriend', 'Boyfriend', 'Sister', 'Brother','Christmas', '16-19', '20-23', 'Music')),
		  array('name'=>'Remote Control Car', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/racingcar.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son','11-15', '16-19', '20-23', 'Birthday', 'Cars', 'Sport')),
		  array('name'=>'Robot Kit', 'price'=>'30.00', 'rating'=>'3', 'image'=>'../../assets/images/robot-kit.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son', '16-19', '20-23', 'Birthday', 'Graduation', 'Science')),
		  array('name'=>'Salt and Pepper', 'price'=>'10.00', 'rating'=>'2', 'image'=>'../../assets/images/sandp.jpg',
				'tags'=>array('Mum', 'Dad', 'Birthday', 'Retirement', 'Anniversary', '41-55', 'Cooking', 'Food')),
		  array('name'=>'Cosy Slippers', 'price'=>'16.00', 'rating'=>'3', 'image'=>'../../assets/images/slippers.jpg',
				'tags'=>array('Girlfriend', 'Mum', 'Sister', 'Birthday','Christmas', '16-19', '20-23', '30-40', '41-55', 'Holidays')),
		  array('name'=>'Electric T-Shirt', 'price'=>'20.00', 'rating'=>'4', 'image'=>'../../assets/images/t-shirt.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son', '16-19', '20-23', '24-29', 'Birthday', 'Music')),
		  array('name'=>'Telescope', 'price'=>'70.00', 'rating'=>'3', 'image'=>'../../assets/images/telescope.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son','11-15', '16-19', '20-23', '24-29', 'Birthday', 'Graduation','Christmas', 'Science')),
		  array('name'=>'Tent', 'price'=>'40.00', 'rating'=>'4', 'image'=>'../../assets/images/tent.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son', '16-19', '20-23', '24-29', '30-40', 'Birthday','Christmas', 'Holidays', 'Sport')),
		  array('name'=>'Leather Wallet', 'price'=>'29.99', 'rating'=>'3', 'image'=>'../../assets/images/wallet.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son', '20-23', '24-29', '30-40', 'Birthday','Christmas', 'New Job', 'Graduation')),
		  array('name'=>'Weather Clock', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/weather.jpg',
				'tags'=>array('Boyfriend', 'Brother','Son', '30-40', '41-55', '56-70', 'Birthday', 'New Job', 'Science'))	,
		  array('name'=>'Xylophone', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/xylophone.jpg',
				'tags'=>array('Son', 'Daughter', '0-5', '6-10', 'Birthday', 'Music'))		,
		  array('name'=>'Drawing Pad', 'price'=>'9.99', 'rating'=>'3', 'image'=>'../../assets/images/drawing-pad.jpg',
				'tags'=>array('Son', 'Daughter', '0-5', '6-10', 'Birthday', 'Art'))		,
		  array('name'=>'Hopper', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/hopper.jpg',
				'tags'=>array('Son', 'Daughter', '0-5', '6-10', 'Birthday', 'Sport'))		,
		  array('name'=>'Wooden Cars', 'price'=>'24.99', 'rating'=>'3', 'image'=>'../../assets/images/wooden-cars.jpg',
				'tags'=>array('Son', 'Daughter', '0-5', '6-10', 'Birthday', 'Sport', 'Cars'))	,	
		  array('name'=>'Lego', 'price'=>'24.99', 'rating'=>'4', 'image'=>'../../assets/images/lego.jpg',
				'tags'=>array('Son', 'Daughter', '0-5', '6-10', 'Birthday', 'Science'))			
		);

$tags = array();

if($_GET['relationship']){
	// find the relationship selected
	$tags[] = $_GET['relationship'];

}
if($_GET['age']){
	// find the relationship selected
	$tags[] = $_GET['age'];

}
if($_GET['occasion']){
	// find the relationship selected
	$tags[] = $_GET['occasion'];

}
if($_GET['interest']){
	// find the relationship selected
	$interests = count($_GET['interest']);
	for ($i = 0; $i < $interests; $i++){
		$tags[] = $_GET['interest'][$i];
	}
	
}
if($_GET['price']){
	// this will remove items from the newly created array
	//echo 'search tags for price';
}

// array for the filtered products
$selectedProducts = array();
$finalProducts = array();
for ($i = 0; $i < count($tags); $i++) {
	if ($i === 0){
		for ($j = 0; $j < count($allProducts); $j++){
			for ($k = 0; $k < count($allProducts[$j]['tags']); $k++){
				$currentTag = $allProducts[$j]['tags'][$k];
				if ($currentTag == $tags[$i]){	
					// add the found item to the new array
					//$selectedProducts[] = array_slice($allProducts, $j, 1, true);
					$selectedProducts[] = $allProducts[$j];
					// remove it from the old so it's not selected twice
					unset($allProducts[$j]);
				}
			}
		}
		//echo var_dump($selectedProducts);
	} else {
		for ($l = 0; $l < count($selectedProducts); $l++){
			for ($m = 0; $m < count($selectedProducts[$l][0]['tags']); $m++){
				$currentTag = $selectedProducts[$l][0]['tags'][$m];
				if ($currentTag == $tags[$i]){
					// add the found item to the new array
					$finalProducts[] = $selectedProducts[$l];
					//$finalProducts[] = array_slice($selectedProducts, $l, 1, true);
					// remove it from the old so it's not selected twice
					unset($selectedProducts[$l]);
				}
			}
		}
	}
}

// simulates delay - in seconds
sleep(3);

if (count($tags) === 1){
	$jsonFinal = json_encode($selectedProducts);
} else {
	$jsonFinal = json_encode($finalProducts);
}

echo $jsonFinal;
?>