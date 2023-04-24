import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imagesList } from "../utils/firstImagesOptions";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 8,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 8,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export const MultiImageCouresel = () => {
	const imageProducts = imagesList.map((image) => {
		return (
			<div key={image}>
				<img src={image} alt="Option" className="h-[10rem] w-[10rem] mt-0" />
			</div>
		);
	});
	return (
		<div className="bg-primary-page-color p-2  max-w-6xl">
			<Carousel responsive={responsive}>{imageProducts}</Carousel>
		</div>
	);
};
