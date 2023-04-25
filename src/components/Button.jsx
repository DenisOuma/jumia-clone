import React from "react";
import className from "classnames";
export const Button = ({
	children,
	primary,
	secondary,
	download,
	search,
	...rest
}) => {
	const classes = className(
		"flex text-[16px] hover:text-secondary-text-color  items-end py-2 font-[400]",
		{
			"bg-secondary-text-color text-white ml-[5px] px-4 hover:text-white ":
				search,
			" text-[16px]": primary,
			"text-[13px] px-[1.5rem] ml-[.7rem] py-2 download-border text-[.8rem]":
				secondary,
			"mr-3 rounded hover:text-secondary-text-color  px-[.5rem] download-border py-[.1rem]":
				download,
		},
		rest.className
	);
	return <button className={classes}>{children}</button>;
};
