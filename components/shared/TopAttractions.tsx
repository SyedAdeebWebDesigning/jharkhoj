import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTripadvisor } from "react-icons/fa";
import { buttonVariants } from "../ui/button";
import { attractionsLinks } from "@/lib/links";

const TopAttractions = () => {
	return (
		<div className="pt-10 border-b mx-6">
			<div className="flex items-center justify-between md:flex-row flex-col gap-4">
				<div className="text-center md:text-left">
					<h2 className="text-3xl font-bold">Top Attractions in Jharkhand</h2>
					<p className="text-neutral-600 mt-2 text-lg">
						Based on <span className="font-semibold">Tripadvisor</span> reviews
					</p>
				</div>
				<Link
					href={
						"https://www.tripadvisor.in/Attractions-g297626-Activities-oa0-Jharkhand.html"
					}
					target="_blank"
					className="rounded-full border px-6 py-2 hover:bg-secondary/50 border-black hover:text-black transition">
					<p className="flex items-center justify-start">
						<FaTripadvisor className="size-5 mr-1" />
						See All on <span className="font-semibold ml-1">Tripadvisor</span>
					</p>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-full mx-auto gap-6 my-10">
				{attractionsLinks.map((attraction, idx) => (
					<Link
						href={attraction.link}
						target="_blank"
						key={attraction.name}
						className="border p-5 rounded-lg hover:shadow-lg transition w-full">
						<h3 className="text-xl font-semibold">
							{idx + 1}. {attraction.name}
						</h3>
						<p className="text-neutral-600 mt-2">{attraction.category}</p>
					</Link>
				))}
			</div>
			<div className="flex items-center justify-center mb-10">
				<Link
					href={
						"https://www.tripadvisor.in/Attractions-g297626-Activities-oa0-Jharkhand.html"
					}
					target="_blank"
					className={cn(
						"rounded-full border px-6 py-4",
						buttonVariants({ variant: "secondary", size: "lg" })
					)}>
					<p className="flex items-center justify-start">
						<FaTripadvisor className="size-5 mr-1" />
						See All on <span className="font-semibold ml-1">Tripadvisor</span>
					</p>
				</Link>
			</div>
		</div>
	);
};

export default TopAttractions;
