import React from "react";
import { PageContainerPosition } from "../PageContainerPosition";
import {
	help,
	aboutJumia,
	sales,
	countries,
	socilaMedia,
	paymentMethod,
} from "../../utils/footerMenuLinks";
import { Icon } from "@iconify/react";
export const AllAbouJumiaFooter = () => {
	const helpLinks = help.map((link) => {
		return (
			<div className="links-texts" key={link}>
				{link}
			</div>
		);
	});
	const aboutLinks = aboutJumia.map((link) => {
		return (
			<div className="links-texts" key={link}>
				{link}
			</div>
		);
	});
	const salesLinks = sales.map((link) => {
		return (
			<div className="links-texts" key={link}>
				{link}
			</div>
		);
	});
	const countriestLinks = countries.map((link) => {
		return (
			<div className="links-texts " key={link}>
				{link}
			</div>
		);
	});
	// Social media render
	const socilaMediaLink = socilaMedia.map((link) => {
		return (
			<div key={link.icon} className="mr-6 cursor-pointer">
				<Icon icon={link.icon} width="25" />
			</div>
		);
	});
	const paymentMethodLink = paymentMethod.map((link) => {
		return (
			<div key={link} className="mr-6 cursor-pointer">
				<Icon icon={link} width="25" />
			</div>
		);
	});
	return (
		<div className="bg-footer-bg-color shadow-lg py-1 text-white text-uppercase pt-5">
			<PageContainerPosition>
				<div className="w-full">
					<div className="flex justify-between w-full">
						<div className="font-styling">
							<h1>LET US HELP YOU</h1>
							{helpLinks}
						</div>
						<div className="font-styling">
							<h1>ABOUT JUMIA</h1>
							{aboutLinks}
						</div>
						<div className="font-styling">
							<h1>MAKE MONEY WITH JUMIA</h1>
							{salesLinks}
						</div>
						<div className="font-styling">
							<h1>JUMIA INTERNATIONAL</h1>
							<div className="h-[7rem] grid grid-cols-2 grid-rows-2 w-[11rem]">
								{countriestLinks}
							</div>
						</div>
					</div>
					<div className="flex justify-between w-full mt-8">
						<div className="font-styling">
							<h1>JOIN US ON</h1>
							<div className="flex">{socilaMediaLink}</div>
						</div>
						<div className="font-styling">
							<h1>PAYMENT METHODS</h1>
							<div className="flex">{paymentMethodLink}</div>
						</div>
						<div className=""></div>
						<div className=""></div>
						<div className=""></div>

						<div className=""></div>
					</div>
				</div>
			</PageContainerPosition>
		</div>
	);
};
