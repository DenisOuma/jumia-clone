import React from "react";
import { StatticCard } from "./StatticCard";
import { staticAddFlashSales } from "../../utils/statciAddDisplay1";
export const FashSalesOutfit = () => {
	return (
		<div className="w-full bg-primary-page-color mt-4 rounded">
			<StatticCard className=" w-full " images={staticAddFlashSales} />
		</div>
	);
};
