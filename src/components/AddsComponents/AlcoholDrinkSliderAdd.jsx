import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { ImagesSlidesAddsList } from "../SlidesImagesFlashDescription/ImagesSlidesAddsList";
import { flashSalesAlcoholData } from "../../utils/FlashSalesDataAdds";
import { Icon } from "@iconify/react";
import { Button } from "../Button";

export const AlcoholDrinkSliderAdd = () => {
	return (
		<div className="w-full mt-4 border-rounded rounded bg-primary-page-color ">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="bg-alcohol-theme-color text-primary-font-color align-middle font-normal text-[1.2rem] capitalise">
					<div className="flex items-center text-40">
						<span className="ml-2">
							Sherehe iko Jumia | Up to 40% Off on Alcoholic Drinks
						</span>
					</div>

					<Button className="uppercase font-light">
						See All
						<Icon icon="material-symbols:chevron-right-rounded" height="25" />
					</Button>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				<ImagesSlidesAddsList images={flashSalesAlcoholData} />
			</AddsSalesTitle>
		</div>
	);
};
