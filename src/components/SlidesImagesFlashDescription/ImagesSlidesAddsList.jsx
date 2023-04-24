import React from "react";
import Carousel from "react-multi-carousel";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 2,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 6,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export const ImagesSlidesAddsList = ({ images }) => {
	return (
		<div>
			<Carousel responsive={responsive}>
				{images.map((image) => {
					return (
						<div
							key={image.id}
							className="bg-primary-page-color w-[11.5rem]  m-2 rounded justify-center overflow-hidden hover:shadow-lg cursor-pointer"
						>
							<img
								src={image.image}
								alt="Option"
								className="h-[10rem] w-[10rem] mt-0 object-cover pl-3"
							/>
							<div
								className=" p-3
                            "
							>
								<h3 className="text-sm">
									{image.name.length > 20
										? image.name.slice(0, 20) + "..."
										: image.name}
								</h3>

								<h1>{image.price}</h1>
								<p className="line-through text-xs text-gray-text-color font-bold">
									{image.cost}
								</p>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};
