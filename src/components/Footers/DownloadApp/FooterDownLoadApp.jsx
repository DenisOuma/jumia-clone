import React from "react";
import Logo from "../../../assets/images/JMIA.png";
import { Button } from "../../Button";
export const FooterDownLoadApp = () => {
	return (
		<div className="">
			<div className="flex">
				<img src={Logo} alt="" className="h-[2.5rem] w-[2.5rem]" />
				<div className="">
					<h1>DOWNLOAD JUMIA FREE APP</h1>
					<p>Get access to exclusive offers!</p>
				</div>
			</div>
			<div className="flex">
				<Button>App Store</Button>
				<Button>App Store</Button>
			</div>
		</div>
	);
};
