import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { li } from "motion/react-client";

const PopularCities = () => {
	const citiesImages = [
		{
			name: "Ranchi",
			imageUrl: "/cities/ranchi.webp",
			linkUrl: "/destinations/cities?city=ranchi",
		},
		{
			name: "Jamshedpur",
			imageUrl: "/cities/jamshedpur.webp",
			linkUrl: "/destinations/cities?city=jamshedpur",
		},
		{
			name: "Deoghar",
			imageUrl: "/cities/deoghar.webp",
			linkUrl: "/destinations/cities?city=deoghar",
		},
		{
			name: "Dhanbad",
			imageUrl: "/cities/dhanbad.webp",
			linkUrl: "/destinations/cities?city=dhanbad",
		},
	];
	return (
		<div className="py-10 border-b">
			<div className="flex items-center justify-between md:flex-row flex-col gap-4 my-5">
				<div className="text-center md:text-left">
					<h2 className="text-3xl font-bold mb-4">
						Popular Cities in Jharkhand
					</h2>
				</div>
				<Link
					href={"/destinations/cities?city=all"}
					className="rounded-full border px-6 py-2 hover:bg-secondary/50 border-black hover:text-black transition">
					See All
				</Link>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full mx-auto">
				{citiesImages.map((city) => (
					<Link href={city.linkUrl} key={city.name}>
						<Card className="group relative w-full h-[300px] overflow-hidden hover:shadow-xl transition">
							{/* Full background image */}
							<Image
								src={city.imageUrl}
								alt={city.name}
								fill
								loading="lazy"
								className="object-cover object-center transition-transform duration-300 hover:scale-110"
							/>

							{/* Gradient overlay + title */}
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
								<h3 className="text-white text-2xl font-semibold">
									{city.name}
								</h3>
							</div>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PopularCities;
