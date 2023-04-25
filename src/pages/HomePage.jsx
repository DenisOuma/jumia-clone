import React from "react";
import { AlcoholDrinkSliderAdd } from "../components/AddsComponents/AlcoholDrinkSliderAdd";
import FlashSalesSliderAdd from "../components/AddsComponents/FlashSalesSliderAdd";
import { LastSearchedSliderAdd } from "../components/AddsComponents/LastSearchedSliderAdd";
import { MultiImageCouresel } from "../components/MultiImageCouresel";
import { CategoryNavigationMenu } from "../components/NavigationMenu/CategoryNavigationMenu";
import { PageContainerPosition } from "../components/PageContainerPosition";
import { HelpCenterCard } from "../components/sliders/HelpCenterCard";
import { WelcomeSalesSlider } from "../components/sliders/WelcomeSalesSlider";
import { FashSalesOutfit } from "../components/StaticAddComponets/FashSalesOutfit";
import { StaticAddCard } from "../components/StaticAddComponets/StaticAddCard";

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
				<LastSearchedSliderAdd />
			</PageContainerPosition>
			<PageContainerPosition>
				<FlashSalesSliderAdd />
			</PageContainerPosition>
			<PageContainerPosition>
				<StaticAddCard />
			</PageContainerPosition>
			<PageContainerPosition>
				<AlcoholDrinkSliderAdd />
			</PageContainerPosition>
			<PageContainerPosition>
				<FashSalesOutfit />
			</PageContainerPosition>
		</div>
	);
};
