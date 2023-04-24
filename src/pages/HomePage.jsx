import React from "react";
import FlashSalesSliderAdd from "../components/AddsComponents/FlashSalesSliderAdd";
import { MultiImageCouresel } from "../components/MultiImageCouresel";
import { CategoryNavigationMenu } from "../components/NavigationMenu/CategoryNavigationMenu";
import { PageContainerPosition } from "../components/PageContainerPosition";
import { HelpCenterCard } from "../components/sliders/HelpCenterCard";
import { WelcomeSalesSlider } from "../components/sliders/WelcomeSalesSlider";

export const HomePage = () => {
	return (
		<div>
			<PageContainerPosition>
				<CategoryNavigationMenu />
				<WelcomeSalesSlider />
				<HelpCenterCard />
			</PageContainerPosition>
			<PageContainerPosition>
				<MultiImageCouresel />
			</PageContainerPosition>
			<PageContainerPosition>
				<FlashSalesSliderAdd />
			</PageContainerPosition>
		</div>
	);
};
