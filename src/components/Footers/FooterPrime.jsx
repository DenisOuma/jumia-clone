import React from "react";
import { BottomLogo } from "../JumiaLogo/BottomLogo";
import { PageContainerPosition } from "../PageContainerPosition";
import { FooterDownLoadApp } from "./DownloadApp/FooterDownLoadApp";
import { FooterSendEmail } from "./EmailSend/FooterSendEmail";

export const FooterPrime = () => {
	return (
		<div className="bg-primary-font-color shadow-lg py-1 mt-[5rem] text-white">
			<PageContainerPosition>
				<BottomLogo />
				<FooterSendEmail />
				<FooterDownLoadApp />
			</PageContainerPosition>
		</div>
	);
};
