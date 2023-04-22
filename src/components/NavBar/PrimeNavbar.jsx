import { Input } from "../InputTypeCategory/Input";
import React from "react";
import { Logo } from "../JumiaLogo/Logo";
import { PageContainerPosition } from "../PageContainerPosition";
import { Icon } from "@iconify/react";
export const PrimeNavbar = () => {
	return (
		<div className="bg-primary-page-color shadow-lg">
			<PageContainerPosition>
				<Logo />
				<div className="relative">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<Icon icon="ic:baseline-search" color="#75757A" height="20" />
					</span>
					<Input
						inputType="text"
						placeholder="Search products, brands and categories"
						className="w-[30rem] pl-7 "
					/>
				</div>
			</PageContainerPosition>
		</div>
	);
};
