import React from "react";
import { PageContainerPosition } from "../PageContainerPosition";
import {
	help,
	aboutJumia,
	sales,
	countries,
} from "../../utils/footerMenuLinks";
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
			<div className="links-texts" key={link}>
				{link}
			</div>
		);
	});
	return (
		<div className="bg-footer-bg-color shadow-lg py-1 text-white text-uppercase pt-5">
			<PageContainerPosition>
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
						{countriestLinks}
					</div>
				</div>
			</PageContainerPosition>
		</div>
	);
};
