import React from "react";
import ImageLogo from "../../assets/images/jumia-group-logo-new.png";
export const Logo = () => {
	return (
		<div className="py-3">
			<img src={ImageLogo} alt="Jumia Logo" className="w-[8rem] " />
		</div>
	);
};
