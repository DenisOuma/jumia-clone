import React from "react";
import ImageLogo from "../../assets/images/jumia-group-logo-new.png";
export const Logo = () => {
	return (
		<div className="py-4">
			<img
				src={ImageLogo}
				alt="Jumia Logo"
				className="w-[10rem] h-[2rem] mt-0"
			/>
		</div>
	);
};
