import React from "react";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";
const images = [
	"https://ke.jumia.is/cms/2023/W11/HP/JBP/PRKS.png",
	"https://ke.jumia.is/cms/2023/W11/HP/JBP/_1168.png",
	"https://ke.jumia.is/cms/2023/W11/HP/JBP/NiveaS.png",
	"https://ke.jumia.is/cms/2023/W11/HP/JBP/RingS.png",
];
function BottomSliderCard() {
	return (
		<div className="max-w-6xl mx-auto mt-4">
			<SimpleCarouselSlider
				images={images}
				autoplay={true}
				width="1150px"
				height="400px"
				autplayDelay={7000}
				parallax={true}
			/>
		</div>
	);
}

export default BottomSliderCard;
