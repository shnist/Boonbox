<?php
header('Content-Type: application/json; charset=utf-8');

$allProducts = array(
		  array('name'=>'Alarm Clock', 'price'=>'24.99', 'rating'=>'3', 'image'=>'../../assets/images/alarm.jpg',
				'tags'=>array('Mum', 'Dad', 'Birthday', 'Anniversary', 'Science', '24-30', '30-40')),
		  array('name'=>'Bag', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/bag.jpg',
				'tags'=>array('Friend', 'Sister')),
		  array('name'=>'Cocktail Glass', 'price'=>'9.99', 'rating'=>'4', 'image'=>'../../assets/images/bday-cocktail.jpg',
				'tags'=>array('Friend', 'Sister')),
		  array('name'=>'Brain Master', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/brain-master.jpg',
				'tags'=>array()),
		  array('name'=>'Yasmin Candle', 'price'=>'8.99', 'rating'=>'2', 'image'=>'../../assets/images/candle.jpg',
				'tags'=>array()),
		  array('name'=>'Charging Station', 'price'=>'39.99', 'rating'=>'5', 'image'=>'../../assets/images/charge-station.jpg',
				'tags'=>array()),
		  array('name'=>'Charm Bracelet', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/charm-bracelet.jpg',
				'tags'=>array()),
		  array('name'=>'Girls Charm Bracelet', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/charmbraclet2.jpg',
				'tags'=>array()),
		  array('name'=>'Cheese Board', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/cheese.jpg',
				'tags'=>array()),
		  array('name'=>'Funky Clock', 'price'=>'18.99', 'rating'=>'2', 'image'=>'../../assets/images/clock.jpg',
				'tags'=>array()),
		  array('name'=>'Cool Cocktail Glass', 'price'=>'9.99', 'rating'=>'5', 'image'=>'../../assets/images/cocktail.jpg',
				'tags'=>array()),
		  array('name'=>'Hand Cream', 'price'=>'12.99', 'rating'=>'3', 'image'=>'../../assets/images/cream.jpg',
				'tags'=>array()),
		  array('name'=>'Cross Cufflinks', 'price'=>'17.99', 'rating'=>'3', 'image'=>'../../assets/images/cufflinks.jpg',
				'tags'=>array()),
		  array('name'=>'Dog Statue', 'price'=>'24.99', 'rating'=>'1', 'image'=>'../../assets/images/dog.jpg',
				'tags'=>array()),
		  array('name'=>'Ear Phones', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/ear-phones.jpg',
				'tags'=>array()),
		  array('name'=>'Glass Clock', 'price'=>'22.99', 'rating'=>'2', 'image'=>'../../assets/images/elegant-clock.jpg',
				'tags'=>array()),
		  array('name'=>'England Cufflinks', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/england-cufflinks.jpg',
				'tags'=>array()),
		  array('name'=>'Football Table', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/football.jpg',
				'tags'=>array()),
		  array('name'=>'Fragrance Lamp', 'price'=>'12.99', 'rating'=>'1', 'image'=>'../../assets/images/fragrance-lamp.jpg',
				'tags'=>array()),
		  array('name'=>'Love Frame', 'price'=>'9.99', 'rating'=>'3', 'image'=>'../../assets/images/frame.jpg',
				'tags'=>array()),
		  array('name'=>'Spot the Intro Game', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/game.jpg',
				'tags'=>array()),
		  array('name'=>'Garden Apron', 'price'=>'16.99', 'rating'=>'4', 'image'=>'../../assets/images/garden-apron.jpg',
				'tags'=>array()),
		  array('name'=>'Helicopter', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/helicopter.jpg',
				'tags'=>array()),
		  array('name'=>'Fun Helicopter', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/helicopter2.jpg',
				'tags'=>array()),
		  array('name'=>'Jewellery Holder', 'price'=>'7.99', 'rating'=>'1', 'image'=>'../../assets/images/holder.jpg',
				'tags'=>array()),
		  array('name'=>'Jewellery Box', 'price'=>'23.99', 'rating'=>'2', 'image'=>'../../assets/images/jewellerybox.jpg',
				'tags'=>array()),
		  array('name'=>'Key Finder', 'price'=>'4.99', 'rating'=>'3', 'image'=>'../../assets/images/keys.jpg',
				'tags'=>array()),
		  array('name'=>'Mercedes Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/merc.jpg',
				'tags'=>array()),
		  array('name'=>'Mini Cooper Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/minicar.jpg',
				'tags'=>array()),
		  array('name'=>'Mirror', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/mirror.jpg',
				'tags'=>array()),
		  array('name'=>'Car Mouse', 'price'=>'7.99', 'rating'=>'5', 'image'=>'../../assets/images/mouse.jpg',
				'tags'=>array()),
		  array('name'=>'Camera Mug', 'price'=>'14.99', 'rating'=>'5', 'image'=>'../../assets/images/mug.jpg',
				'tags'=>array()),
		  array('name'=>'Necklace', 'price'=>'29.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace.jpg',
				'tags'=>array()),
		  array('name'=>'Chunky Necklace', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace2.jpg',
				'tags'=>array()),
		  array('name'=>'Organiser', 'price'=>'20.00', 'rating'=>'2', 'image'=>'../../assets/images/organiser.jpg',
				'tags'=>array()),
		  array('name'=>'PC Kit', 'price'=>'24.00', 'rating'=>'4', 'image'=>'../../assets/images/pc-kit.jpg',
				'tags'=>array()),
		  array('name'=>'Camera Pen', 'price'=>'30.00', 'rating'=>'5', 'image'=>'../../assets/images/pen.jpg',
				'tags'=>array()),
		  array('name'=>'Phone Charger', 'price'=>'15.00', 'rating'=>'2', 'image'=>'../../assets/images/phone-charger.jpg',
				'tags'=>array()),
		  array('name'=>'Photo Frame', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/photo-gallery.jpg',
				'tags'=>array()),
		  array('name'=>'Picnic Kit', 'price'=>'25.00', 'rating'=>'3', 'image'=>'../../assets/images/picnic.jpg',
				'tags'=>array()),
		  array('name'=>'Speakers Pillow', 'price'=>'32.99', 'rating'=>'4', 'image'=>'../../assets/images/pillow.jpg',
				'tags'=>array()),
		  array('name'=>'Remote Control Car', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/racingcar.jpg',
				'tags'=>array()),
		  array('name'=>'Robot Kit', 'price'=>'30.00', 'rating'=>'3', 'image'=>'../../assets/images/robot-kit.jpg',
				'tags'=>array()),
		  array('name'=>'Salt and Pepper', 'price'=>'10.00', 'rating'=>'2', 'image'=>'../../assets/images/sandp.jpg',
				'tags'=>array()),
		  array('name'=>'Cosy Slippers', 'price'=>'16.00', 'rating'=>'3', 'image'=>'../../assets/images/slippers.jpg',
				'tags'=>array()),
		  array('name'=>'Electric T-Shirt', 'price'=>'20.00', 'rating'=>'4', 'image'=>'../../assets/images/t-shirt.jpg',
				'tags'=>array()),
		  array('name'=>'Telescope', 'price'=>'70.00', 'rating'=>'3', 'image'=>'../../assets/images/telescope.jpg',
				'tags'=>array()),
		  array('name'=>'Tent', 'price'=>'40.00', 'rating'=>'4', 'image'=>'../../assets/images/tent.jpg',
				'tags'=>array()),
		  array('name'=>'Leather Wallet', 'price'=>'29.99', 'rating'=>'3', 'image'=>'../../assets/images/wallet.jpg',
				'tags'=>array()),
		  array('name'=>'Weather Clock', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/weather.jpg',
				'tags'=>array())
		);

if($_GET['relationship']){
	echo 'search tags for relationship';
}
if($_GET['age']){
	echo 'search tags for age';
}
if($_GET['occasion']){
	echo 'search tags for age';
}
if($_GET['interest']){
	echo 'search tags for age';
}
if($_GET['price']){
	echo 'search tags for age';
}


// simulates delay - in seconds
sleep(4);
$jsonFinal = json_encode($allProducts);
//echo $jsonFinal;
?>