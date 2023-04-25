import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { ImagesSlidesAddsList } from "../SlidesImagesFlashDescription/ImagesSlidesAddsList";
import { Icon } from "@iconify/react";
import { lastSearched } from "../../utils/LastSearchedOptions";

import { Button } from "../Button";
export const LastSearchedSliderAdd = () => {
	return (
		<div className="w-full mt-4 border-rounded rounded bg-primary-page-color ">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="text-black align-middle font-normal text-[1.2rem] capitalise">
					<div className="flex items-center text-40">
						<span className="ml-2">Last Searched | Apple MacBook Air MG</span>
					</div>

					<Button className="uppercase font-light text-secondary-text-color">
						See All
						<Icon icon="material-symbols:chevron-right-rounded" height="25" />
					</Button>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				<ImagesSlidesAddsList images={lastSearched} />
			</AddsSalesTitle>
		</div>
	);
};
