import React from "react";

import Link from "next/link";

import {
	Landmark,
	Mountain,
	Waves,
	Dog,
	WavesIcon,
	Binoculars,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PopularExperience = () => {
	const categories = [
		{
			name: "Waterfalls",
			shortDescription: "Explore beautiful waterfalls",
			icon: WavesIcon,
			linkUrl: "/destinations/popular-experiences?category=waterfalls",
			bgGradient: ["#dbeafe", "#bfdbfe"], // light blue shades
		},
		{
			name: "Wildlife & Forests",
			shortDescription: "Discover wildlife and forests",
			icon: Dog,
			linkUrl: "/destinations/popular-experiences?category=wildlife-forests",
			bgGradient: ["#dcfce7", "#bbf7d0"], // soft greens
		},
		{
			name: "Hill Stations",
			shortDescription: "Visit scenic hill stations",
			icon: Mountain,
			linkUrl: "/destinations/popular-experiences?category=hill-stations",
			bgGradient: ["#ede9fe", "#ddd6fe"], // lavender / purple mist
		},
		{
			name: "Heritage & Temples",
			shortDescription: "Explore heritage sites and temples",
			icon: Landmark,
			linkUrl: "/destinations/popular-experiences?category=heritage-temples",
			bgGradient: ["#fef3c7", "#fde68a"], // warm golden tones
		},
		{
			name: "Lakes & Rivers",
			shortDescription: "Relax by lakes and rivers",
			icon: Waves,
			linkUrl: "/destinations/popular-experiences?category=lakes-rivers",
			bgGradient: ["#bae6fd", "#7dd3fc"], // aqua / sky blue
		},
		{
			name: "Adventure & Eco-Tourism",
			shortDescription: "Experience adventure and eco-tourism",
			icon: Binoculars,
			linkUrl:
				"/destinations/popular-experiences?category=adventure-eco-tourism",
			bgGradient: ["#fef9c3", "#bbf7d0"], // soft yellow-green
		},
	];

	return (
		<div className="py-10 border-b">
			<div className="flex items-center justify-between md:flex-row flex-col gap-4">
				<div className="text-center md:text-left">
					<h2 className="text-3xl font-bold">Explore Popular Experiences</h2>
					<p className="text-neutral-600 mt-2 text-lg">
						See what other travelers like to do, based on ratings and number of
						bookings.
					</p>
				</div>
				<Link
					href={"/destinations/popular-experiences?category=all"}
					className="rounded-full border px-6 py-2 hover:bg-secondary/50 border-black hover:text-black transition">
					See All
				</Link>
			</div>
			<div className="grid gap-3 mt-6 sm:grid-cols-2 md:grid-cols-3">
				{categories.map((category) => (
					<Link
						href={category.linkUrl}
						key={category.name}
						className="flex items-center relative group border z-10 overflow-hidden border-neutral-200 bg-white rounded-full py-3 px-3 text-sm min-w-[200px] hover:bg-secondary/50 transition">
						<div
							className={cn(
								"mx-2 flex items-center justify-center transition-all duration-300",
								"overflow-hidden " // expand on hover
							)}>
							<category.icon className="w-5 h-5 text-black" />
						</div>

						<div className="flex flex-col ml-1">
							<p className="text-neutral-800 text-lg">{category.name}</p>
							<p className="text-neutral-500 text-md line-clamp-1">
								{category.shortDescription}
							</p>
						</div>
						<div
							className="absolute size-10 p-2 rounded-full top-4 left-[10px] -z-10 transition-all duration-700 group-hover:scale-[2000%] group-hover:left-0 group-hover:top-0 overflow-hidden"
							style={{
								background: `linear-gradient(135deg, ${category.bgGradient[0]}, ${category.bgGradient[1]})`,
							}}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PopularExperience;
