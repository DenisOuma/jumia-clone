import React from "react";
import { Button } from "../Button";
import { CardBoarder } from "../CardBoarder";
import { Icon } from "@iconify/react";
import { menuOptionsCategory } from "../../utils/sidebarMenuOption";
export const CategoryNavigationMenu = () => {
	return (
		<CardBoarder className="bg-primary-page-color w-1/5">
			{menuOptionsCategory.map((button) => {
				return (
					<Button
						key={button.btnName}
						primary
						className="text-primary-font-color text-xs pt-1"
					>
						<Icon
							icon={button.iconName}
							color="#313133"
							height="20"
							className="mx-[4px]"
						/>
						{button.btnName}
					</Button>
				);
			})}
		</CardBoarder>
	);
};
