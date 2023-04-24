import React from "react";
import { StatticCard } from "./StatticCard";
import { staticAddDisplay } from "../../utils/statciAddDisplay1";
export const StaticAddCard = () => {
	return (
		<div className="w-full bg-primary-page-color mt-4 rounded">
			<StatticCard className=" w-full " images={staticAddDisplay} />
		</div>
	);
};
