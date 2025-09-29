"use client";

import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { highlightsCards } from "@/lib/links";

export default function HighlightsSection() {
	return (
		<section className="py-16 bg-neutral-50">
			<div className="container mx-auto px-4 text-center">
				{/* Section Heading */}
				<Heading
					title="Highlights of Jharkhand"
					subtitle="Choose what excites you — nature, culture, adventure or wildlife."
				/>

				{/* Cards Grid */}
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2  gap-4 max-w-6xl mx-auto">
					{highlightsCards.map((card, idx) => (
						<div
							key={card.title}
							className="group block overflow-hidden shadow-md bg-white hover:shadow-lg transition transform ">
							{/* Image */}
							<motion.div
								className="relative h-[400px] w-full"
								initial={{ x: idx % 2 === 0 ? -10 : 10, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ type: "spring", stiffness: 300 }}>
								<Image
									src={card.image}
									alt={card.title}
									fill
									loading="lazy"
									loader={({ src }) => src}
									className="object-cover transition-transform"
								/>
								{/* Content */}
								<div className="p-4 text-left absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
									<h3 className="text-2xl font-semibold ">{card.title}</h3>
									<p className="mt-1 text-sm text-neutral-100">
										{card.description}
									</p>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
