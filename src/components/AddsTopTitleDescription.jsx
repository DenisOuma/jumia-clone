import React from "react";
import className from "classnames";
function AddsTopTitleDescription({ children, ...rest }) {
	const classes = className(
		"flex justify-between w-full text-white p-3 rounded-t-lg",
		rest.className
	);
	return <div className={classes}> {children}</div>;
}

export default AddsTopTitleDescription;
