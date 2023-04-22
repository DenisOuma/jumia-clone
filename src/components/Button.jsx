import React from "react";
import className from "classnames";
export const Button = ({ children, primary, search, ...rest }) => {
	const classes = className(
		"flex text-[16px]  items-end py-2 font-[400]",
		{
			"bg-secondary-text-color text-white ml-[5px] px-4": search,
			"hover:text-secondary-text-color text-[16px]": primary,
		},
		rest.className
	);
	return <button className={classes}>{children}</button>;
};
