import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { Icon } from "@iconify/react";
import { Button } from "../Button";
function FlashSalesSliderAdd() {
	return (
		<div className="w-full mt-4 border-rounded">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="bg-danger-add-color align-middle font-normal text-[1.2rem] capitalise">
					<div className="flex items-center text-40">
						<Icon icon="ion:pricetags-sharp" color="#f90" height="25" />
						<span className="ml-2">Flash Sales</span>
					</div>
					<div className="">Time Left</div>

					<Button className="uppercase">
						See All
						<Icon icon="material-symbols:chevron-right-rounded" height="25" />
					</Button>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				Images
			</AddsSalesTitle>
		</div>
	);
}

export default FlashSalesSliderAdd;
