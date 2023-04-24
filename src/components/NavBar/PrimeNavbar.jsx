import { Input } from "../InputTypeCategory/Input";
import React from "react";
import { Logo } from "../JumiaLogo/Logo";
import { PageContainerPosition } from "../PageContainerPosition";
import { Icon } from "@iconify/react";
import { Button } from "../Button";

export const PrimeNavbar = () => {
	return (
		<div id="navbar" className="bg-primary-page-color shadow-lg py-1">
			<PageContainerPosition>
				<Logo />
				<div className="flex items-center">
					<div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<Icon icon="ic:baseline-search" color="#75757A" height="20" />
						</span>
						<Input
							inputType="text"
							placeholder="Search products, brands and categories"
							className="w-[33rem] pl-7 "
						/>
					</div>
					<Button
						search
						className="shadow-lg shadow-gray-text-color-[500] uppercase border rounded-[5px]"
					>
						Search
					</Button>
					<Button primary className="pl-2">
						<Icon
							icon="clarity:avatar-line"
							color="#313133"
							height="26"
							className="mr-[4px] "
						/>
						Account
						<Icon
							icon="material-symbols:keyboard-arrow-down-rounded"
							color="#313133"
							height="20"
							className="mx-[4px]"
						/>
					</Button>
					<Button primary>
						<Icon
							icon="material-symbols:help-outline"
							color="#313133"
							height="26"
							className="mx-[4px]"
						/>
						Help
						<Icon
							icon="material-symbols:keyboard-arrow-down-rounded"
							color="#313133"
							height="20"
							className="mx-[4px]"
						/>
					</Button>
					<Button primary>
						<Icon
							icon="ic:outline-shopping-cart"
							color="#313133"
							height="26"
							className="mx-[4px]"
						/>
						Cart
					</Button>
				</div>
			</PageContainerPosition>
		</div>
	);
};
