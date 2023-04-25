import { Input } from "../../InputTypeCategory/Input";
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "../../Button";
export const FooterSendEmail = () => {
	return (
		<div className="mt-8">
			<h1 className="font-bold text-[.8rem]">NEW TO JUMIA?</h1>
			<p className="text-[.7rem] my-2">
				Subscribe to our newsletter to get updates on our latest offers!
			</p>
			<div className="flex items-center pb-3">
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
					secondary
					className="shadow-lg shadow-gray-text-color-[500] uppercase border rounded-[5px]"
				>
					Male
				</Button>
				<Button
					secondary
					className="shadow-lg shadow-gray-text-color-[500] uppercase border rounded-[5px]"
				>
					Female
				</Button>
			</div>
		</div>
	);
};
