import React from "react";
import className from "classnames";
export const Button = ({ children, primary, search, ...rest }) => {
	const classes = className(
		"flex px-4 text-[12px] ml-[5px] items-end py-1.5  font-[400]",
		{
			"bg-primary-color-page text-white ": search,
		},
		rest.className
	);
	return <button className={classes}>{children}</button>;
};
