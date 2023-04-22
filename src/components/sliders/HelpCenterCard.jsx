import React from "react";

export const HelpCenterCard = () => {
	const moreAddLink = [
		{
			iconlink:
				"https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/Webp.net-resizeimage-(1).png",
			titleLink: "help center",
			descriptionLink: "Guide To Customer Care",
		},
		{
			iconlink:
				"https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-return.png",
			titleLink: "Easy return",
			descriptionLink: "Quick Refund",
		},
		{
			iconlink:
				"https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-payment.png",
			titleLink: "Sell On Jumia",
			descriptionLink: "Millions of Visitors",
		},
	];

	const helpMoreOptions = moreAddLink.map((link) => {
		return (
			<div
				key={link.titleLink}
				className="flex items-center p-2 cursor-pointer"
			>
				<img
					src={link.iconlink}
					alt={link.descriptionLink}
					className="w-[2rem] h-[2rem] mt-0"
				/>
				<div className="ml-2">
					<h1 className=" text-primary-font-color text-[.9rem] font-normal uppercase ">
						{link.titleLink}
					</h1>
					<p className="text-primary-font-color capitalize text-[.7rem]">
						{link.descriptionLink}
					</p>
				</div>
			</div>
		);
	});
	return (
		<div className=" w-1/5">
			<div className="top-navbar bg-primary-page-color p-2 rounded">
				{helpMoreOptions}
			</div>
			<div className="img-add-botom w-1/5">
				<img
					src="https://ke.jumia.is/cms/2021/Personalization/PrimeCustomer/BF/KE_Cross_PrimeCustomer_Generic_1221_BF-under-5K.gif"
					alt="add card"
					className=""
				/>
			</div>
		</div>
	);
};
