import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { Icon } from "@iconify/react";
import { Button } from "../Button";
import { CountdownTimer } from "../CountdownTimer";
import { ImagesSlidesAddsList } from "../SlidesImagesFlashDescription/ImagesSlidesAddsList";
import { flashSalesData } from "../../utils/FlashSalesDataAdds";
function FlashSalesSliderAdd() {
	return (
		<div className="w-full mt-4 border-rounded rounded bg-primary-page-color ">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="bg-danger-add-color text-white align-middle font-normal text-[1.2rem] capitalise">
					<div className="flex items-center text-40">
						<Icon icon="ion:pricetags-sharp" color="#f90" height="25" />
						<span className="ml-2">Flash Sales</span>
					</div>
					<div
						className="flex
                    "
					>
						Time Left:
						<CountdownTimer />
					</div>
					<Button className="uppercase font-light">
						See All
						<Icon icon="material-symbols:chevron-right-rounded" height="25" />
					</Button>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				<ImagesSlidesAddsList images={flashSalesData} />
			</AddsSalesTitle>
		</div>
	);
}

export default FlashSalesSliderAdd;
