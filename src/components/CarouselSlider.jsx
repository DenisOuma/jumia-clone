import React, { useState, useEffect } from "react";
import Carousel from "react-image-carousel";
export const CarouselSlider = ({ images }) => {
	return (
		<div className="my-carousel">
			<Carousel images={images} thumb={false} loop={true} autoplay={2000} />
		</div>
	);
};
