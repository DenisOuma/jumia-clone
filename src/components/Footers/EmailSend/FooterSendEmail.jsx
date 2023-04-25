import { Input } from "../../InputTypeCategory/Input";
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../../Button";
export const FooterSendEmail = () => {
	return (
		<div>
			<h1>NEW TO JUMIA?</h1>
			<p>Subscribe to our newsletter to get updates on our latest offers!</p>
			<div className="flex items-center">
				<div className="relative">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<Icon icon="mdi:email" color="#75757A" height="20" />
					</span>
					<Input
						inputType="text"
						placeholder="Enter E-mail Address"
						className="w-[17rem] pl-7 "
					/>
				</div>
				<Button
					search
					className="shadow-lg shadow-gray-text-color-[500] uppercase border rounded-[5px]"
				>
					Male
				</Button>
				<Button
					search
					className="shadow-lg shadow-gray-text-color-[500] uppercase border rounded-[5px]"
				>
					Female
				</Button>
			</div>
		</div>
	);
};
