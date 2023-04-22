import React from "react";
import { CategoryNavigationMenu } from "../components/NavigationMenu/CategoryNavigationMenu";
import { PageContainerPosition } from "../components/PageContainerPosition";
import { HelpCenterCard } from "../components/sliders/HelpCenterCard";
import { WelcomeSalesSlider } from "../components/sliders/WelcomeSalesSlider";

export const HomePage = () => {
	return (
		<PageContainerPosition>
			<CategoryNavigationMenu />
			<WelcomeSalesSlider />
			<HelpCenterCard />
		</PageContainerPosition>
	);
};
