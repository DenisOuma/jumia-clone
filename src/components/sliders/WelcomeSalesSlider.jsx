import React from "react";
import { CarouselSlider } from "../CarouselSlider";
import { addsSlideImages } from "../../utils/sliderAdvertImagesGf";
import { CardBoarder } from "../CardBoarder";
export const WelcomeSalesSlider = () => {
	return (
		<CardBoarder>
			<CarouselSlider images={addsSlideImages} />
		</CardBoarder>
	);
};
