import React from "react";
export const StatticCard = ({ images }) => {
	const addImages = images.map((image) => {
		return (
			<div key={image.id} className="w-[24rem] rounded">
				<img
					className="w-full h-full p-2 mt-0 rounded-[5px] object-cover transition duration-500 ease-in-out transform hover:scale-105"
					src={image.url}
					style={{ borderRadius: "10px" }}
					alt="Add "
				/>
			</div>
		);
	});
	return <div className="flex justify-between  w-full">{addImages}</div>;
};
