"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Banner() {
	const images = [
		"/banner/Banner-1.jpg",
		"/banner/Banner-2.jpg",
		"/banner/Banner-3.jpg",
		"/banner/Banner-4.jpg",
	];
	return (
		<ImagesSlider className="md:h-[100vh] h-[80vh] pt-20" images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center mx-auto h-full  ">
				<motion.p
					initial={{ opacity: 0.5, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					className="font-bold text-3xl md:text-6xl px-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Discover Jharkhand
					<br />
					India's Hidden Gem of Culture and Nature
				</motion.p>
				<Link
					href={"/destinations"}
					className={cn(
						"px-4 py-2 text-white mx-auto text-center bg-transparent rounded-full w-fit relative mt-4",
						buttonVariants({ size: "lg", variant: "outline" })
					)}>
					Explore Now →
				</Link>
			</motion.div>
		</ImagesSlider>
	);
}
