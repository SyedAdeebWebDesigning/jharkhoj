import { cn } from "@/lib/utils";
import { image } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTripadvisor } from "react-icons/fa";
import { buttonVariants } from "../ui/button";

const TopAttractions = () => {
	const attractionsLinks = [
		{
			name: "Baba Baidyanath Temple",
			category: "Religious Site",
			link: "https://www.tripadvisor.in/Attraction_Review-g1893710-d2697959-Reviews-Baba_Baidyanath_Temple-Deoghar_Deoghar_District_Jharkhand.html",
			imageUrl: "/attractions/baidyanath.webp",
		},
		{
			name: "Jubilee Park",
			category: "Parks",
			link: "https://www.tripadvisor.in/Attraction_Review-g662321-d2288675-Reviews-Jubilee_Park-Jamshedpur_East_Singhbhum_District_Jharkhand.html",
			imageUrl: "/attractions/jubilee-park.webp",
		},
		{
			name: "Dassam Falls",
			category: "Waterfalls",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d3171255-Reviews-Dassam_Falls-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/dassam-falls.webp",
		},
		{
			name: "Parasnath Hills",
			category: "Mountains",
			link: "https://www.tripadvisor.in/Attraction_Review-g2295042-d3705336-Reviews-Parasnath_Hills-Giridih_Giridih_District_Jharkhand.html",
			imageUrl: "/attractions/parasnath-hills.webp",
		},
		{
			name: "Patratu Valley",
			category: "Valleys",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d10509592-Reviews-Patratu_Valley-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/patratu-valley.webp",
		},
		{
			name: "Maithan Dam",
			category: "Dams",
			link: "https://www.tripadvisor.in/Attraction_Review-g1011999-d4138788-Reviews-Maithan_Dam-Dhanbad_Dhanbad_District_Jharkhand.html",
			imageUrl: "/attractions/maithan-dam.webp",
		},
		{
			name: "Jonha Falls",
			category: "Waterfalls",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d3218641-Reviews-Jonha_Falls-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/jonha-falls.webp",
		},
		{
			name: "Rock Garden",
			category: "Parks",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d3913045-Reviews-Rock_Garden-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/rock-garden.webp",
		},
		{
			name: "Dalma Wildlife Sanctuary",
			category: "Nature & Wildlife Areas",
			link: "https://www.tripadvisor.in/Attraction_Review-g662321-d2708867-Reviews-Dalma_Wildlife_Sanctuary-Jamshedpur_East_Singhbhum_District_Jharkhand.html",
			imageUrl: "/attractions/dalma-wildlife-sanctuary.webp",
		},
		{
			name: "Hundru Falls",
			category: "Waterfalls",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d3207695-Reviews-Hundru_Falls-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/hundru-falls.webp",
		},
		{
			name: "Jagannath Mandir",
			category: "Religious Sites",
			link: "https://www.tripadvisor.in/Attraction_Review-g662320-d3217340-Reviews-Jagannath_Mandir-Ranchi_Ranchi_District_Jharkhand.html",
			imageUrl: "/attractions/jagannath-mandir.webp",
		},
		{
			name: "Trikuta Parvata",
			category: "Religious Sites",
			link: "https://www.tripadvisor.in/Attraction_Review-g1893710-d4138785-Reviews-Trikuta_Parvata-Deoghar_Deoghar_District_Jharkhand.html",
			imageUrl: "/attractions/baidyanath.webp",
		},
	];
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
