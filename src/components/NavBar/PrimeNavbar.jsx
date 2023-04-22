import React from "react";
import { Logo } from "../JumiaLogo/Logo";
import { PageContainerPosition } from "../PageContainerPosition";

export const PrimeNavbar = () => {
	return (
		<div className="bg-primary-page-color shadow-lg">
			<PageContainerPosition>
				<Logo />
			</PageContainerPosition>
		</div>
	);
};
