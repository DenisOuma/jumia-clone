import React from "react";
import { Icon } from "@iconify/react";
export const SellBuyFoodNavBar = () => {
	return (
		<div className="flex items-center justify-between py-1.5 container w-5/6  mx-auto">
			<div className="flex items-center cursor-pointer hover:underline hover:decoration-secondary-text-color ">
				<Icon
					icon="material-symbols:stars-rounded"
					color="#FF9900"
					height="17"
				/>
				<span className="text-[11px] text-secondary-text-color ml-1">
					Sell on Jumia
				</span>
			</div>
			<div className="flex text-[14px] items-center font-mono ">
				<Icon icon="majesticons:shooting-star" color="#FF9900" height="17" />
				<span className="text-secondary-text-color ml-1 pt-1 cursor-pointer font-semibold">
					FOOD
				</span>
				<span className="flex text-gray-text-color ml-2 pt-1 cursor-pointer">
					<Icon icon="mdi:shield-search" color="#75757A" height="17" />
					PAY
				</span>
			</div>
			<div className=""></div>
		</div>
	);
};
