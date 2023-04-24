import React from "react";
export const StatticCard = ({ images }) => {
	const addImages = images.map((image) => {
		return (
			<div key={images.url} className="w-[24rem] rounded">
				<img
					className="w-full h-full p-2 mt-0 rounded-[5px]"
					src={image.url}
					alt="Add "
				/>
			</div>
		);
	});
	return <div className="flex justify-between  w-full">{addImages}</div>;
};
