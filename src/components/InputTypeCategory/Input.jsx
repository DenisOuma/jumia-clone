import React from "react";
import className from "classnames";
export const Input = ({ inputType, placeholder, ...rest }) => {
	const classes = className(
		" placeholder:text-slate-400 block bg-white  border border-gray-text-color rounded-[4px] py-[.6rem]  pr-3 shadow-sm focus:outline-none sm:text-sm",
		rest.className
	);
	return (
		<div>
			<input
				{...rest}
				type={inputType}
				className={classes}
				placeholder={placeholder}
			/>
		</div>
	);
};
