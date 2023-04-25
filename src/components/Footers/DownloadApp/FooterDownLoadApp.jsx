import React from "react";
import Logo from "../../../assets/images/JMIA.png";
import { Button } from "../../Button";
import { Icon } from "@iconify/react";
export const FooterDownLoadApp = () => {
	return (
		<div className="">
			<div className="flex items-center">
				<img src={Logo} alt="" className="h-[2.5rem] w-[2.5rem]" />
				<div className="ml-5 mt-5">
					<h1 className="text-[.8rem] font-bold">DOWNLOAD JUMIA FREE APP</h1>
					<p className="text-[.7rem]">Get access to exclusive offers!</p>
				</div>
			</div>
			<div className="flex mt-3">
				<Button download>
					<Icon icon="ic:baseline-apple" width="25" />
					<div className="text-left ml-2">
						<p className="text-[.4rem]">Download on the</p>
						<h1 className="text-[.8rem]">App Store</h1>
					</div>
				</Button>
				<Button download>
					<Icon icon="mdi:google-play" width="25" />
					<div className="text-left ml-2 rm-sp">
						<p className="text-[.4rem] my-0">GET IT ON</p>
						<h1 className="text-[.8rem]">Google Play</h1>
					</div>
				</Button>
			</div>
		</div>
	);
};
