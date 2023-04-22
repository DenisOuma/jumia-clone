import React from "react";
import className from "classnames";
export const CardBoarder = ({ children, ...rest }) => {
	const classes = className("rounded my-3 p-2", {}, rest.className);
	return <div className={classes}>{children}</div>;
};
