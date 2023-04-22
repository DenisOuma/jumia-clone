import React from "react";

export const PageContainerPosition = ({ children }) => {
	return (
		<div className="flex items-center justify-between  container w-3/4  mx-auto">
			{children}
		</div>
	);
};
