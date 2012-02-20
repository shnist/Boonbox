<?php
header('Content-Type: application/json; charset=utf-8');

$allProducts = array(
		  array('name'=>'Alarm Clock', 'price'=>'24.99', 'rating'=>'3', 'image'=>'../../assets/images/alarm.jpg'),
		  array('name'=>'Bag', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/bag.jpg'),
		  array('name'=>'Cocktail Glass', 'price'=>'9.99', 'rating'=>'4', 'image'=>'../../assets/images/bday-cocktail.jpg'),
		  array('name'=>'Brain Master', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/brain-master.jpg'),
		  array('name'=>'Yasmin Candle', 'price'=>'8.99', 'rating'=>'2', 'image'=>'../../assets/images/candle.jpg'),
		  array('name'=>'Charging Station', 'price'=>'39.99', 'rating'=>'5', 'image'=>'../../assets/images/charge-station.jpg'),
		  array('name'=>'Charm Bracelet', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/charm-bracelet.jpg'),
		  array('name'=>'Girls Charm Bracelet', 'price'=>'14.99', 'rating'=>'3', 'image'=>'../../assets/images/charmbraclet2.jpg'),
		  array('name'=>'Cheese Board', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/cheese.jpg'),
		  array('name'=>'Funky Clock', 'price'=>'18.99', 'rating'=>'2', 'image'=>'../../assets/images/clock.jpg'),
		  array('name'=>'Cool Cocktail Glass', 'price'=>'9.99', 'rating'=>'5', 'image'=>'../../assets/images/cocktail.jpg'),
		  array('name'=>'Hand Cream', 'price'=>'12.99', 'rating'=>'3', 'image'=>'../../assets/images/cream.jpg'),
		  array('name'=>'Cross Cufflinks', 'price'=>'17.99', 'rating'=>'3', 'image'=>'../../assets/images/cufflinks.jpg'),
		  array('name'=>'Dog Statue', 'price'=>'24.99', 'rating'=>'1', 'image'=>'../../assets/images/dog.jpg'),
		  array('name'=>'Ear Phones', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/ear-phones.jpg'),
		  array('name'=>'Glass Clock', 'price'=>'22.99', 'rating'=>'2', 'image'=>'../../assets/images/elegant-clock.jpg'),
		  array('name'=>'England Cufflinks', 'price'=>'14.99', 'rating'=>'4', 'image'=>'../../assets/images/england-cufflinks.jpg'),
		  array('name'=>'Football Table', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/football.jpg'),
		  array('name'=>'Fragrance Lamp', 'price'=>'12.99', 'rating'=>'1', 'image'=>'../../assets/images/fragrance-lamp.jpg'),
		  array('name'=>'Love Frame', 'price'=>'9.99', 'rating'=>'3', 'image'=>'../../assets/images/frame.jpg'),
		  array('name'=>'Spot the Intro Game', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/game.jpg'),
		  array('name'=>'Garden Apron', 'price'=>'16.99', 'rating'=>'4', 'image'=>'../../assets/images/garden-apron.jpg'),
		  array('name'=>'Helicopter', 'price'=>'49.99', 'rating'=>'4', 'image'=>'../../assets/images/helicopter.jpg'),
		  array('name'=>'Fun Helicopter', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/helicopter2.jpg'),
		  array('name'=>'Jewellery Holder', 'price'=>'7.99', 'rating'=>'1', 'image'=>'../../assets/images/holder.jpg'),
		  array('name'=>'Jewellery Box', 'price'=>'23.99', 'rating'=>'2', 'image'=>'../../assets/images/jewellerybox.jpg'),
		  array('name'=>'Key Finder', 'price'=>'4.99', 'rating'=>'3', 'image'=>'../../assets/images/keys.jpg'),
		  array('name'=>'Mercedes Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/merc.jpg'),
		  array('name'=>'Mini Cooper Remote Control Car', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/minicar.jpg'),
		  array('name'=>'Mirror', 'price'=>'15.99', 'rating'=>'3', 'image'=>'../../assets/images/mirror.jpg'),
		  array('name'=>'Car Mouse', 'price'=>'7.99', 'rating'=>'5', 'image'=>'../../assets/images/mouse.jpg'),
		  array('name'=>'Camera Mug', 'price'=>'14.99', 'rating'=>'5', 'image'=>'../../assets/images/mug.jpg'),
		  array('name'=>'Necklace', 'price'=>'29.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace.jpg'),
		  array('name'=>'Chunky Necklace', 'price'=>'19.99', 'rating'=>'4', 'image'=>'../../assets/images/necklace2.jpg'),
		  array('name'=>'Organiser', 'price'=>'20.00', 'rating'=>'2', 'image'=>'../../assets/images/organiser.jpg'),
		  array('name'=>'PC Kit', 'price'=>'24.00', 'rating'=>'4', 'image'=>'../../assets/images/pc-kit.jpg'),
		  array('name'=>'Camera Pen', 'price'=>'30.00', 'rating'=>'5', 'image'=>'../../assets/images/pen.jpg'),
		  array('name'=>'Phone Charger', 'price'=>'15.00', 'rating'=>'2', 'image'=>'../../assets/images/phone-charger.jpg'),
		  array('name'=>'Photo Frame', 'price'=>'34.99', 'rating'=>'4', 'image'=>'../../assets/images/photo-gallery.jpg'),
		  array('name'=>'Picnic Kit', 'price'=>'25.00', 'rating'=>'3', 'image'=>'../../assets/images/picnic.jpg'),
		  array('name'=>'Speakers Pillow', 'price'=>'32.99', 'rating'=>'4', 'image'=>'../../assets/images/pillow.jpg'),
		  array('name'=>'Remote Control Car', 'price'=>'19.99', 'rating'=>'3', 'image'=>'../../assets/images/racingcar.jpg'),
		  array('name'=>'Robot Kit', 'price'=>'30.00', 'rating'=>'3', 'image'=>'../../assets/images/robot-kit.jpg'),
		  array('name'=>'Salt and Pepper', 'price'=>'10.00', 'rating'=>'2', 'image'=>'../../assets/images/sandp.jpg'),
		  array('name'=>'Cosy Slippers', 'price'=>'16.00', 'rating'=>'3', 'image'=>'../../assets/images/slippers.jpg'),
		  array('name'=>'Electric T-Shirt', 'price'=>'20.00', 'rating'=>'4', 'image'=>'../../assets/images/t-shirt.jpg'),
		  array('name'=>'Telescope', 'price'=>'70.00', 'rating'=>'3', 'image'=>'../../assets/images/telescope.jpg'),
		  array('name'=>'Tent', 'price'=>'40.00', 'rating'=>'4', 'image'=>'../../assets/images/tent.jpg'),
		  array('name'=>'Leather Wallet', 'price'=>'29.99', 'rating'=>'3', 'image'=>'../../assets/images/wallet.jpg'),
		  array('name'=>'Weather Clock', 'price'=>'39.99', 'rating'=>'3', 'image'=>'../../assets/images/weather.jpg')
		);

// simulates delay - in seconds
sleep(4);
$jsonFinal = json_encode($allProducts);
echo $jsonFinal;
?>