import React from "react";
import { Icon } from "@iconify/react";
export const SellBuyFoodNavBar = () => {
	return (
		<div className="flex items-center justify-between py-1.5">
			<div className="flex items-center cursor-pointer hover:underline hover:decoration-secondary-text-color ">
				<Icon
					icon="material-symbols:stars-rounded"
					color="#FF9900"
					height="15"
				/>
				<span className="text-[10px] text-secondary-text-color ml-1">
					Sell on Jumia
				</span>
			</div>
			<div className="flex text-[15px] items-center font-mono ">
				<Icon icon="majesticons:shooting-star" color="#FF9900" height="15" />
				<span className="text-secondary-text-color ml-1 cursor-pointer font-semibold">
					FOOD
				</span>
				<span className="flex text-gray-text-color ml-2 cursor-pointer">
					<Icon icon="mdi:shield-search" color="#FF9900" height="15" />
					PAY
				</span>
			</div>
			<div className=""></div>
		</div>
	);
};
