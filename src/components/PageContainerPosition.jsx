import React from "react";

export const PageContainerPosition = ({ children }) => {
	return (
		<div className="flex items-center justify-between  container  max-w-6xl mx-auto">
			{children}
		</div>
	);
};
