import React from "react";
import { AddsSalesTitle } from "../AddsSalesTitle";
import AddsTopTitleDescription from "../AddsTopTitleDescription";
import { Icon } from "@iconify/react";
function FlashSalesSliderAdd() {
	return (
		<div className="w-full mt-4 border-rounded">
			<AddsSalesTitle>
				<AddsTopTitleDescription className="bg-danger-add-color ">
					<div className="flex text-40">
						<Icon icon="ion:pricetags-sharp" color="#f90" height="25" />
						<h2 className="ml-2">Flash Sales</h2>
					</div>
					<div className="">Flash Sales</div>
					<div className="">Flash Sales</div>
				</AddsTopTitleDescription>
				{/* Images sliders goes here */}
				Images
			</AddsSalesTitle>
		</div>
	);
}

export default FlashSalesSliderAdd;
