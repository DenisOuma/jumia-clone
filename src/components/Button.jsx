import React from "react";
import className from "classnames";
export const Button = ({ children, primary, search, ...rest }) => {
	const classes = className(
		"flex  text-[12px]  items-end py-1.5  font-[400]",
		{
			"bg-primary-color-page text-white ml-[5px] px-4": search,
			"hover:text-secondary-text-color": primary,
		},
		rest.className
	);
	return <button className={classes}>{children}</button>;
};
