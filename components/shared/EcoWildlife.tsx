import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const EcoWildlife = () => {
	return (
		<div className="bg-white flex flex-col-reverse md:flex-row w-full">
			{/* Content Side */}
			<div className="w-full md:w-1/2">
				<div className="p-8 md:p-16">
					<Heading title="Eco & Wildlife" />
					<h2 className="mt-4 text-gray-700 text-justify text-lg md:text-xl leading-relaxed">
						With nearly one-third of Jharkhand blanketed in forests, the state
						is a true paradise for eco-tourism, where ancient sal groves,
						majestic waterfalls like Hundru, Dassam, and Jonha, and tranquil
						lakes such as Dimna and Patratu create landscapes that offer both
						serenity and adventure to travelers.
						<br />
						<br />
						Sanctuaries including Betla National Park, Dalma Wildlife Sanctuary,
						and Hazaribagh are home to elephants, leopards, sloth bears, bison,
						and hundreds of bird species, offering wildlife enthusiasts
						unforgettable encounters with nature's diversity and photographers a
						living canvas of untamed beauty.
						<br />
						<br />
						Beyond exploring jungles and spotting wildlife, Jharkhand invites
						visitors to trek through forest trails, enjoy dawn birdwatching
						tours, experience eco-adventure activities like camping and rock
						climbing, and engage with community-led conservation programs that
						reflect the harmony between tribal traditions and natural heritage.
					</h2>

					<div className="w-full flex items-center justify-start">
						<Link
							href="/wildlife"
							className={cn(
								"mt-6 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center mx-auto md:mx-0",
								buttonVariants({ variant: "default" })
							)}>
							Explore More →
						</Link>
					</div>
				</div>
			</div>

			{/* Image Side */}
			<div className="w-full md:w-1/2 bg-emerald-900/40 flex items-center justify-center p-6 md:p-10">
				<div className="relative w-full  aspect-[1/1] overflow-hidden">
					<Image
						src="/assets/eco-wildlife.webp"
						alt="Eco & Wildlife"
						fill
						loading="lazy"
						className="object-cover transition-transform duration-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default EcoWildlife;
