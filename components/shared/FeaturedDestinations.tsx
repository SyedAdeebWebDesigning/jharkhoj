"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Heading from "./Heading";
import { destinations } from "@/lib/links";

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {};

const FeaturedDestinations = (props: Props) => {
	// Track which card is flipped
	const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

	const handleFlip = (index: number) => {
		setFlippedIndex(flippedIndex === index ? null : index);
	};

	return (
		<div className="py-16 bg-white">
			<MaxWidthWrapper>
				<Heading
					title="Featured Destinations"
					subtitle="Explore the beauty of Jharkhand"
				/>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{destinations.map(
						(
							destination: {
								title: string;
								type: string;
								image: string;
								city: string;
								description: string;
							},
							index: number
						) => (
							<div
								key={destination.title}
								className="relative h-[400px] w-full [perspective:10000px] cursor-pointer group "
								onClick={() => handleFlip(index)}>
								{/* Card Wrapper */}
								<div
									className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
										flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
									}`}>
									{/* Front Side */}
									<div className="absolute inset-0 [backface-visibility:hidden] z-10 overflow-hidden group-hover:shadow-xl transition-shadow">
										<Image
											src={destination.image}
											alt={destination.title}
											loading="lazy"
											fill
											className="object-cover group-hover:scale-[1.01] transition-all duration-200 overflow-hidden -z-10"
										/>
										<Card className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent border-0 rounded-none">
											<CardContent>
												<CardDescription
													className="text-neutral-50 text-lg flex items-center"
													style={{ textShadow: "0 0 5px rgba(0, 0, 0, 1)" }}>
													<MapPin className="mr-2 size-5" />
													{destination.city}
												</CardDescription>
												<CardTitle className="text-white text-3xl font-semibold uppercase">
													{destination.title} {destination.type}
												</CardTitle>
											</CardContent>
										</Card>
									</div>

									{/* Back Side */}
									<div className="absolute inset-0 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
										{/* Background image with blur */}
										<Image
											src={destination.image}
											alt={destination.title}
											fill
											loading="lazy"
											className="object-cover scale-110 blur rotate-y-180 "
										/>
										{/* Dark overlay */}
										<div className="absolute inset-0 bg-black/50" />

										{/* Content */}
										<div className="relative z-10 p-6">
											<h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
												{destination.title} {destination.type}
											</h3>
											<p className="text-sm text-neutral-100 drop-shadow-md text-justify">
												{destination.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>
				<div className="flex items-center justify-center mt-10">
					<Link
						href={"/destinations"}
						className={cn(
							"mx-auto flex items-center justify-center",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						View All Destinations →
					</Link>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default FeaturedDestinations;
