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
			<div
				key={image}
				className="h-[8rem] w-[8rem] overflow-hidden hover:shadow-lg cursor-pointer"
			>
				<img src={image} alt="Option" className="h-full w-full mt-0" />
			</div>
		);
	});
	return (
		<div className="bg-primary-page-color p-2  max-w-6xl">
			<div className="w-3 text-[1px] text-primary-page-color">s</div>
			<Carousel responsive={responsive}>{imageProducts}</Carousel>
		</div>
	);
};
