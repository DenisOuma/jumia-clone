import React from "react";
import Carousel from "react-image-carousel";
import "../styles/CarouselSlider.css";
export const CarouselSlider = ({ images }) => {
	return (
		<div className="my-carousel">
			<Carousel
				// className="w-2/4"
				images={images}
				thumb={false}
				loop={true}
				autoplay={10000}
				arrow={true}
			/>
		</div>
	);
};
