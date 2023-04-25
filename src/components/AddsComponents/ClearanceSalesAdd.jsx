import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { Icon } from "@iconify/react";
import { Button } from "../Button";
import { ImagesSlidesAddsList } from "../SlidesImagesFlashDescription/ImagesSlidesAddsList";
import { clearanceSales } from "../../utils/FlashSalesDataAdds";
export const ClearanceSalesAdd = () => {
	return (
		<div className="w-full mt-4 border-rounded rounded bg-primary-page-color ">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="bg-primary-color-page text-primary-font-color align-middle font-normal text-[1.2rem] capitalise">
					<div className="flex items-center text-40">
						<span className="ml-2">Clearance Sale</span>
					</div>

					<Button className="uppercase font-light">
						See All
						<Icon icon="material-symbols:chevron-right-rounded" height="25" />
					</Button>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				<ImagesSlidesAddsList images={clearanceSales} />
			</AddsSalesTitle>
		</div>
	);
};
